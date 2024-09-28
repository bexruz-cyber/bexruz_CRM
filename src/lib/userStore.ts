import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Define the User interface
interface User {
  id: string; // Unique identifier for the user
  username: string; // Username of the user
  avatarUrl?: string; // Optional avatar URL
  blocked: string[]; // Array of user IDs that this user has blocked
}

// Define the user state interface
interface UserState {
  currentUser: User | null; // Current logged-in user
  isLoading: boolean; // Loading state
  fetchUserInfo: (uid: string | null) => Promise<void>; // Asynchronous function to fetch user info
}

// Create the user store
export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: string | null) => {
    set({ isLoading: true }); // Set loading state to true

    if (!uid) {
      set({ currentUser: null, isLoading: false });
      return;
    }

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data() as User, isLoading: false }); // Set currentUser with fetched data
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ currentUser: null, isLoading: false });
    }
  },
}));
