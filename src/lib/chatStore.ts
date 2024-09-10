import { create } from "zustand";
import { useUserStore } from "./userStore";

// State interfeysini aniqlaymiz
interface chatState {
  chatId: any | null; // Agar `chatId` ma'lumot turi noma'lum bo'lsa, `any` sifatida belgilash mumkin
  user: any | null;
  isCurrentUserBlocked: boolean;
  isReceiverUserBlocked: boolean;
  changeChat: (chatId: any, user: any) => void;
}

export const useChatStore = create<chatState>((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverUserBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true, // currentUser bloklanganini belgilash
        isReceiverUserBlocked: false,
      });
    } else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false, // currentUser bloklanganini belgilash
        isReceiverUserBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false, // currentUser bloklanganini belgilash
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
