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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChatList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../../lib/firebase");
const userStore_1 = require("../../../lib/userStore");
const AddUser_1 = __importDefault(require("./addUser/AddUser"));
const chatStore_1 = require("../../../lib/chatStore");
function ChatList({ isDarkMode }) {
    const [chats, setChats] = (0, react_1.useState)([]); // ChatItem turi
    const [addMode, setAddMode] = (0, react_1.useState)(false);
    const { currentUser } = (0, userStore_1.useUserStore)();
    const { chatId, changeChat } = (0, chatStore_1.useChatStore)();
    (0, react_1.useEffect)(() => {
        const fetchChats = () => __awaiter(this, void 0, void 0, function* () {
            const unSub = (0, firestore_1.onSnapshot)((0, firestore_1.doc)(firebase_1.db, "userchats", currentUser.id), (res) => __awaiter(this, void 0, void 0, function* () {
                const data = res.data();
                if (data && data.chats) {
                    const items = data.chats;
                    const promises = items.map((item) => __awaiter(this, void 0, void 0, function* () {
                        const userDocRef = (0, firestore_1.doc)(firebase_1.db, "users", item.receiverId);
                        const userDocSnap = yield (0, firestore_1.getDoc)(userDocRef);
                        const user = userDocSnap.data();
                        return Object.assign(Object.assign({}, item), { user });
                    }));
                    const chatData = yield Promise.all(promises);
                    setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
                }
            }));
            return () => {
                unSub(); // Komponent unmount bo'lganda listenerni tozalash
            };
        });
        fetchChats(); // Async funksiyani chaqirish
    }, [currentUser]);
    const handleSelect = (chat) => __awaiter(this, void 0, void 0, function* () {
        const userChats = chats.map(item => {
            const { user } = item, rest = __rest(item, ["user"]);
            return rest;
        });
        const chatIndex = userChats.findIndex(item => item.chatId === chat.chatId);
        userChats[chatIndex].iSeen = true;
        const userChatsRef = (0, firestore_1.doc)(firebase_1.db, "userchats", currentUser.id);
        try {
            yield (0, firestore_1.updateDoc)(userChatsRef, {
                chats: userChats
            });
            changeChat(chat.chatId, chat.user);
        }
        catch (err) {
            console.log(err);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "hover:overflow-y-auto overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: `bg-transparent border rounded-md ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"} py-[18px] px-[15px] flex items-center gap-5 mb-5`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-5 flex-1", children: [(0, jsx_runtime_1.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z", fill: "#6F767E" }) }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search", className: `bg-transparent outline-none ${isDarkMode ? " text-[#6F767E] font-normal text-lg leading-[18px] placeholder:text-[#6F767E]" : "placeholder:text-[#66687B] text-[#66687B]"}` })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setAddMode((prev) => !prev), className: "flex text-[#6F767E] ", children: addMode ? ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" }) })) : ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }) })) })] }), chats.map(chat => {
                var _a, _b;
                return ((0, jsx_runtime_1.jsxs)("div", { className: `cursor-pointer rounded-[10px] flex items-center py-3 px-[15px]`, onClick: () => handleSelect(chat), children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-[46px] rounded-full overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: ((_a = chat.user) === null || _a === void 0 ? void 0 : _a.avatarUrl) || "./avatar.png", alt: "avatar", className: "w-full" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "max-w-[174px] w-full ml-[17px] mr-1", children: [(0, jsx_runtime_1.jsx)("h2", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base mb-[5px] line-clamp-1`, children: (_b = chat.user) === null || _b === void 0 ? void 0 : _b.username }), (0, jsx_runtime_1.jsx)("p", { className: `${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} font-normal text-sm line-clamp-1`, children: chat.lastMessage })] })] }, chat.chatId));
            }), addMode && (0, jsx_runtime_1.jsx)(AddUser_1.default, { isDarkMode: isDarkMode })] }));
}
