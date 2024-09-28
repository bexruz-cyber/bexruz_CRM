import { create } from "zustand";
import { useUserStore } from "./userStore";

// Define the User interface (if not already defined in userStore)
interface User {
  id: string; // Unique identifier for the user
  username: string; // Username of the user
  avatarUrl?: string; // Optional avatar URL
  blocked: string[]; // Array of user IDs that this user has blocked
}

// Define the chat state interface
interface ChatState {
  chatId: string | null; // Chat ID
  user: User | null; // User involved in the chat
  isCurrentUserBlocked: boolean; // Is the current user blocked
  isReceiverUserBlocked: boolean; // Is the receiver user blocked
  changeChat: (chatId: string | null, user: User | null) => void; // Change the chat and user
  changeBlock: () => void; // Toggle block state
}

// Create the chat store
export const useChatStore = create<ChatState>((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverUserBlocked: false,

  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // Check if currentUser is null before accessing its properties
    if (!currentUser) {
      console.warn("No current user found");
      return;
    }

    // Ensure user is not null before accessing its properties
    if (user && user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true, // currentUser is blocked
        isReceiverUserBlocked: false,
      });
    } else if (user && currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false, // currentUser is not blocked
        isReceiverUserBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false, // currentUser is not blocked
        isReceiverUserBlocked: false,
      });
    }
  },

  changeBlock: () => {
    set((state) => ({
      ...state,
      isReceiverUserBlocked: !state.isReceiverUserBlocked,
    }));
  },
}));
