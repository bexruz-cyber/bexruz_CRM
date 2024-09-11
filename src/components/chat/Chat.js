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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chat;
const jsx_runtime_1 = require("react/jsx-runtime");
const emoji_picker_react_1 = __importDefault(require("emoji-picker-react"));
const firestore_1 = require("firebase/firestore");
const react_1 = require("react");
const firebase_1 = require("../../lib/firebase");
const chatStore_1 = require("../../lib/chatStore");
const userStore_1 = require("../../lib/userStore");
const upload_1 = __importDefault(require("../../lib/upload"));
function Chat({ isDarkMode }) {
    var _a;
    const [chat, setChat] = (0, react_1.useState)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const [text, setText] = (0, react_1.useState)("");
    const [img, setImg] = (0, react_1.useState)({
        file: null,
        url: "",
    });
    const [chatUser, setChatUser] = (0, react_1.useState)(undefined);
    const endRef = (0, react_1.useRef)(null);
    const { currentUser } = (0, userStore_1.useUserStore)();
    const { chatId, user } = (0, chatStore_1.useChatStore)();
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = endRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }, []);
    (0, react_1.useEffect)(() => {
        const unSub = (0, firestore_1.onSnapshot)((0, firestore_1.doc)(firebase_1.db, "chats", chatId), (res) => {
            setChat(res.data());
        });
        return () => {
            unSub();
        };
    }, [chatId]);
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };
    const handleImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };
    const handleSend = () => __awaiter(this, void 0, void 0, function* () {
        if (text === "")
            return;
        let imgUrl = null;
        try {
            if (img.file) {
                imgUrl = yield (0, upload_1.default)(img.file);
            }
            yield (0, firestore_1.updateDoc)((0, firestore_1.doc)(firebase_1.db, "chats", chatId), {
                messages: (0, firestore_1.arrayUnion)(Object.assign({ senderId: currentUser.id, text, createdAt: new Date() }, (imgUrl && { img: imgUrl }))),
            });
            const userIDs = [currentUser.id, user.id];
            userIDs.forEach((id) => __awaiter(this, void 0, void 0, function* () {
                const userChatRef = (0, firestore_1.doc)(firebase_1.db, "userchats", id);
                const userChatsSnapshot = yield (0, firestore_1.getDoc)(userChatRef);
                if (userChatsSnapshot.exists()) {
                    const userChatsData = userChatsSnapshot.data();
                    const chatIndex = userChatsData.chats.findIndex((c) => c.chatId === chatId);
                    if (chatIndex !== -1) {
                        userChatsData.chats[chatIndex].lastMessage = text;
                        userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
                        userChatsData.chats[chatIndex].updatedAt = Date.now();
                    }
                    yield (0, firestore_1.updateDoc)(userChatRef, {
                        chats: userChatsData.chats,
                    });
                }
            }));
        }
        catch (err) {
            console.log(err);
        }
        setImg({
            file: null,
            url: "",
        });
        setText("");
    });
    (0, react_1.useEffect)(() => {
        console.log("Foydalanuvchi ID:", user.id); // Foydalanuvchi ID ni tekshiring
        const fetchChatUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const chatRef = (0, firestore_1.doc)(firebase_1.db, "users", user.id);
                const chatSnapshot = yield (0, firestore_1.getDoc)(chatRef);
                if (chatSnapshot.exists()) {
                    setChatUser(chatSnapshot.data());
                }
                else {
                    console.log("Foydalanuvchi ma'lumotlari topilmadi.");
                }
            }
            catch (err) {
                console.log("Xatolik:", err);
            }
        });
        fetchChatUser();
    }, [user.id]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex-[2] transition-all duration-300 flex flex-col pb-[15px] border-r border-l ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: `chatHeader border-b flex justify-between items-center w-full p-5 ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-[15px]", children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-[46px] overflow-hidden rounded-full", children: (0, jsx_runtime_1.jsx)("img", { src: (chatUser === null || chatUser === void 0 ? void 0 : chatUser.avatarUrl) || "./avatar.png", alt: "User Avatar", className: "w-full object-cover" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h2", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base mb-0.5 line-clamp-1`, children: (chatUser === null || chatUser === void 0 ? void 0 : chatUser.username) || "Jane Doe" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2.5", children: [(0, jsx_runtime_1.jsx)("button", { className: "", children: (0, jsx_runtime_1.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.6569 19 17 17.6569 17 16V15.4286L18.8375 16.7411C20.1613 17.6866 22 16.7404 22 15.1136V8.88638C22 7.25963 20.1613 6.31339 18.8375 7.25891L17 8.57143V8C17 6.34315 15.6569 5 14 5H5Z", fill: "#6F767E" }) }) }), (0, jsx_runtime_1.jsx)("button", { className: "", children: (0, jsx_runtime_1.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M1.18273 7.00943C0.0794046 4.79522 1.19265 2.35157 3.31397 1.07877C4.3353 0.465978 5.65528 0.731923 6.35963 1.6924L7.92229 3.82331C8.5874 4.73027 8.68934 5.93307 8.18636 6.93904L7.77663 7.75849C7.65802 7.99571 7.63927 8.27012 7.7606 8.50595C7.98164 8.93562 8.45236 9.69705 9.35915 10.6038C10.266 11.5106 11.0274 11.9814 11.4571 12.2024C11.6929 12.3237 11.9673 12.305 12.2045 12.1864L13.024 11.7766C14.0299 11.2737 15.2327 11.3756 16.1397 12.0407L18.2706 13.6034C19.2311 14.3077 19.497 15.6277 18.8842 16.649C17.6114 18.7704 15.1678 19.8836 12.9536 18.7803C11.0874 17.8504 8.70279 16.3114 6.17717 13.7858C3.65156 11.2602 2.11261 8.87556 1.18273 7.00943Z", fill: "#6F767E" }) }) }), (0, jsx_runtime_1.jsx)("button", { className: " text-[#6F767E]", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-6", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" }) }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 flex flex-col gap-[15px] transition-all duration-300 p-5 bg-blend-overlay hover:overflow-y-auto overflow-hidden", children: [(_a = chat === null || chat === void 0 ? void 0 : chat.messages) === null || _a === void 0 ? void 0 : _a.map((message) => ((0, jsx_runtime_1.jsxs)("div", { className: `mb-2.5 flex flex-col ${message.senderId === currentUser.id ? 'self-end' : 'self-start'}`, children: [message.img && ((0, jsx_runtime_1.jsx)("div", { className: 'mb-[5px] w-full', children: (0, jsx_runtime_1.jsx)("img", { src: message.img, alt: "img", className: 'w-full h-[300px] rounded-[10px] object-cover' }) })), (0, jsx_runtime_1.jsx)("div", { className: `py-2.5 px-[15px] flex-col w-full ml-auto   rounded-t-[10px] rounded-${message.senderId === currentUser.id ? 'bl-[10px]' : 'br-[10px]'} border ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`, children: (0, jsx_runtime_1.jsx)("p", { className: `font-normal flex-col w-full ml-auto text-base leading-6 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`, children: message.text }) })] }, message.createdAt.getTime()))), img.url &&
                        ((0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsx)("img", { src: img.url, alt: "img", className: ' rounded-[10px]' }) }) })), (0, jsx_runtime_1.jsx)("div", { ref: endRef })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex items-center gap-2.5 justify-between p-2.5 w-full ${isDarkMode ? "bg-[#333333]" : "bg-[E4E4E4]"} rounded-md`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2.5 ", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "file", children: (0, jsx_runtime_1.jsx)("img", { src: "./img.png", alt: "img", className: "max-w-[18px]" }) }), (0, jsx_runtime_1.jsx)("input", { type: "file", className: 'hidden', name: 'file', id: 'file', onChange: handleImg }), (0, jsx_runtime_1.jsx)("img", { src: "./camera.png", alt: "camera", className: "max-w-[18px]" }), (0, jsx_runtime_1.jsx)("img", { src: "./mic.png", alt: "micraphone", className: "max-w-[18px]" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: `w-full bg-transparent outline-none font-normal py-1.5 text-base ${isDarkMode ? "placeholder:text-[#6F767E] text-[#EFEFEF] " : "placeholder:text-[#808191] text-[#11142D] "}`, placeholder: "Write a message down here...", onChange: (e) => setText(e.target.value), value: text }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("button", { className: 'max-w-[18px]', onClick: () => setOpen((prev) => !prev), children: (0, jsx_runtime_1.jsx)("img", { src: "./emoji.png", alt: "emoji", className: "w-full object-cover" }) }), (0, jsx_runtime_1.jsx)("div", { className: "z-50 absolute bottom-[50px] left-0", children: (0, jsx_runtime_1.jsx)(emoji_picker_react_1.default, { onEmojiClick: handleEmoji, open: open }) })] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleSend, className: `p-[19px] ml-2.5 ${isDarkMode ? "bg-[#333333]" : "bg-[E4E4E4]"} rounded-md`, children: (0, jsx_runtime_1.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#clip0_371_10633)", children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.0303 0.96967C17.3232 1.26256 17.3232 1.73744 17.0303 2.03033L8.78033 10.2803C8.48744 10.5732 8.01256 10.5732 7.71967 10.2803C7.42678 9.98744 7.42678 9.51256 7.71967 9.21967L15.9697 0.96967C16.2626 0.676777 16.7374 0.676777 17.0303 0.96967Z", fill: "#475BE8" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.914389 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM3.53331 6.83297L8.55461 9.06466C8.72428 9.14007 8.85995 9.27574 8.93536 9.44542L11.167 14.4667L15.2775 2.7225L3.53331 6.83297Z", fill: "#475BE8" })] }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", { id: "clip0_371_10633", children: (0, jsx_runtime_1.jsx)("rect", { width: "18", height: "18", fill: "white" }) }) })] }) })] })] }));
}
