"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChatStore = void 0;
const zustand_1 = require("zustand");
const userStore_1 = require("./userStore");
exports.useChatStore = (0, zustand_1.create)((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverUserBlocked: false,
    changeChat: (chatId, user) => {
        const currentUser = userStore_1.useUserStore.getState().currentUser;
        if (user.blocked.includes(currentUser.id)) {
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true, // currentUser bloklanganini belgilash
                isReceiverUserBlocked: false,
            });
        }
        else if (currentUser.blocked.includes(user.id)) {
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false, // currentUser bloklanganini belgilash
                isReceiverUserBlocked: true,
            });
        }
        else {
            return set({
                chatId,
                user,
                isCurrentUserBlocked: false, // currentUser bloklanganini belgilash
                isReceiverUserBlocked: false,
            });
        }
    },
    changeBlock: () => {
        set((state) => (Object.assign(Object.assign({}, state), { isReceiverUserBlocked: !state.isReceiverUserBlocked })));
    },
}));
