"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddUser;
const jsx_runtime_1 = require("react/jsx-runtime");
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../../../lib/firebase");
const react_1 = require("react");
const userStore_1 = require("../../../../lib/userStore");
function AddUser({ isDarkMode }) {
    const [user, setUser] = (0, react_1.useState)(null);
    const [username, setUsername] = (0, react_1.useState)("");
    const { currentUser, isLoading } = (0, userStore_1.useUserStore)();
    const handleSearch = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            // Loading holatini yangilash
            const userRef = (0, firestore_1.collection)(firebase_1.db, "users");
            const q = (0, firestore_1.query)(userRef, (0, firestore_1.where)("username", "==", username));
            const querySnapshot = yield (0, firestore_1.getDocs)(q);
            if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                setUser(Object.assign(Object.assign({}, userData), { id: querySnapshot.docs[0].id }));
            }
            else {
                console.log("User not found");
                setUser(null);
            }
        }
        catch (error) {
            console.error("Error fetching user:", error);
        }
        finally {
            // Loading holatini yangilash
        }
    });
    const handleAdd = () => __awaiter(this, void 0, void 0, function* () {
        if (!user || !currentUser)
            return;
        const chatRef = (0, firestore_1.collection)(firebase_1.db, "chats");
        const userChatsRef = (0, firestore_1.collection)(firebase_1.db, "userchats");
        try {
            // Yangi chat yaratish
            const newChatRef = (0, firestore_1.doc)(chatRef);
            yield (0, firestore_1.setDoc)(newChatRef, {
                createdAt: (0, firestore_1.serverTimestamp)(),
                messages: []
            });
            // Transaction orqali yangilas           h
            yield (0, firestore_1.runTransaction)(firebase_1.db, (transaction) => __awaiter(this, void 0, void 0, function* () {
                const userChatDocRef = (0, firestore_1.doc)(userChatsRef, user.id);
                const currentUserChatDocRef = (0, firestore_1.doc)(userChatsRef, currentUser.id);
                const userChatDoc = yield transaction.get(userChatDocRef);
                const currentUserChatDoc = yield transaction.get(currentUserChatDocRef);
                const userChatUpdate = {
                    chats: (0, firestore_1.arrayUnion)({
                        chatId: newChatRef.id,
                        lastMessage: "",
                        receiverId: user.id,
                        updateAt: Date.now()
                    })
                };
                const currentUserChatUpdate = {
                    chats: (0, firestore_1.arrayUnion)({
                        chatId: newChatRef.id,
                        lastMessage: "",
                        receiverId: user.id,
                        updateAt: Date.now()
                    })
                };
                if (!userChatDoc.exists() || !userChatDoc.data().chats.some((chat) => chat.chatId === newChatRef.id)) {
                    transaction.update(userChatDocRef, userChatUpdate);
                }
                if (!currentUserChatDoc.exists() || !currentUserChatDoc.data().chats.some((chat) => chat.chatId === newChatRef.id)) {
                    transaction.update(currentUserChatDocRef, currentUserChatUpdate);
                }
            }));
        }
        catch (err) {
            console.error("Error adding chat:", err);
        }
    });
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-screen", children: (0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin" }) }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `p-[30px] ${isDarkMode ? "bg-[#111315CC]" : "bg-[#FCFCFCCC]"} rounded-[10px] z-50 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`, children: [(0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSearch, className: "search flex gap-5 mb-5", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Username", name: "username", value: username, onChange: (e) => setUsername(e.target.value), className: `p-5 rounded-[10px] border-[none] outline-none ${isDarkMode ? "bg-[#111315] text-[#6F767E] font-normal text-lg leading-[18px] placeholder:text-[#6F767E]" : "bg-[#F4F4F4] placeholder:text-[#66687B] text-[#66687B]"}` }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "p-5 rounded-[10px] bg-[#475BE8] font-normal leading-[18px] text-lg text-white", children: "Search" })] }), user && ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2.5", children: [(0, jsx_runtime_1.jsx)("img", { src: user.avatarUrl || "./avatar.png", alt: "avatar", className: "block max-w-[50px] rounded-[10px]" }), (0, jsx_runtime_1.jsx)("span", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-medium text-sm`, children: user.username })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleAdd, className: "p-2.5 rounded-[10px] bg-[#475BE8] font-normal leading-[18px] text-lg text-white", children: "Add user" })] }))] }));
}
