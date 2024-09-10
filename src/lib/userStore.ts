import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

// State interfeysini aniqlaymiz
interface UserState {
  currentUser: any | null; // Agar `currentUser` ma'lumot turi noma'lum bo'lsa, `any` sifatida belgilash mumkin
  isLoading: boolean;
  fetchUserInfo: (uid: string | null) => Promise<void>; // Asinxron funksiya uchun `Promise<void>` tipi
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: string | null) => {
    set({ isLoading: true }); // Ma'lumot yuklanmoqda flagini o'zgartirish

    if (!uid) {
      set({ currentUser: null, isLoading: false });
      return;
    }

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ currentUser: null, isLoading: false });
    }
  },
}));
