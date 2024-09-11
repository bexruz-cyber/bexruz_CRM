"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Message;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("../components");
const auth_1 = require("firebase/auth");
const firebase_1 = require("../lib/firebase");
const userStore_1 = require("../lib/userStore");
const chatStore_1 = require("../lib/chatStore");
function Message({ isDarkMode }) {
    const { currentUser, isLoading, fetchUserInfo } = (0, userStore_1.useUserStore)(); // `useUserStore` ni chaqirish kerak
    const { chatId } = (0, chatStore_1.useChatStore)(); // `useUserStore` ni chaqirish kerak
    (0, react_1.useEffect)(() => {
        const unSub = (0, auth_1.onAuthStateChanged)(firebase_1.auth, (user) => {
            if (user === null || user === void 0 ? void 0 : user.uid) {
                fetchUserInfo(user === null || user === void 0 ? void 0 : user.uid); // Foydalanuvchi ma'lumotlarini olish uchun chaqirish
            }
            else {
                fetchUserInfo(null); // Foydalanuvchi ma'lumotlarini tozalash
            }
        });
        return () => {
            unSub(); // Tozalash
        };
    }, [fetchUserInfo]); // `fetchUserInfo` ni dependency arrayda qo'shish
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-screen", children: (0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin" }) }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "pt-7 pl-[20px] pr-[25px] pb-[22px] h-full", children: (0, jsx_runtime_1.jsxs)("div", { className: `${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} relative pl-5 flex min-h-[865px] rounded-[15px] max-h-[865px] h-full`, children: [currentUser ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.List, { isDarkMode: isDarkMode }), chatId && (0, jsx_runtime_1.jsx)(components_1.Chat, { isDarkMode: isDarkMode })] })) : ((0, jsx_runtime_1.jsx)(components_1.LoginChat, { isDarkMode: isDarkMode })), (0, jsx_runtime_1.jsx)(components_1.Notificationin, {})] }) }));
}
