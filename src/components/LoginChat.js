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
exports.default = LoginChat;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
const auth_1 = require("firebase/auth");
const firebase_1 = require("../lib/firebase");
const firestore_1 = require("firebase/firestore");
const upload_1 = __importDefault(require("../lib/upload"));
function LoginChat({ isDarkMode }) {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [avatar, setAvatar] = (0, react_1.useState)({
        file: null,
        url: "",
    });
    const handleAvatar = (e) => {
        if (e.target.files && e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };
    const handleRegister = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        const { username, email, password } = Object.fromEntries(formData);
        try {
            const res = yield (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, email, password);
            // Ensure avatar.file is not null and upload if it is available
            const imgUrl = avatar.file ? yield (0, upload_1.default)(avatar.file) : undefined;
            // Create user document with optional avatarUrl field
            const userDocData = Object.assign({ username,
                email, id: res.user.uid, blocked: [] }, (imgUrl ? { avatarUrl: imgUrl } : {}));
            yield (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_1.db, "users", res.user.uid), userDocData);
            yield (0, firestore_1.setDoc)((0, firestore_1.doc)(firebase_1.db, "userchats", res.user.uid), {
                chats: []
            });
            react_toastify_1.toast.success("Account created! You can log in now!");
        }
        catch (error) {
            console.error(error);
            react_toastify_1.toast.error("Registration failed. Please try again.");
        }
        finally {
            setLoading(false);
        }
    });
    const handleLogin = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData);
        try {
            yield (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, email, password);
            react_toastify_1.toast.success("Login successful!");
        }
        catch (error) {
            console.log(error);
            react_toastify_1.toast.error("Login failed");
        }
        finally {
            setLoading(false);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center w-full px-10 justify-between ", children: [(0, jsx_runtime_1.jsxs)("div", { className: "max-w-[400px] w-full", children: [(0, jsx_runtime_1.jsx)("h2", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-2xl mb-5 line-clamp-1`, children: "Welcome back" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleLogin, className: "flex flex-col gap-5", children: [(0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email", name: "email", required: true, autoComplete: "false", className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border` }), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", name: "password", required: true, autoComplete: "false", className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border` }), (0, jsx_runtime_1.jsx)("button", { disabled: loading, type: "submit", className: "bg-[#475BE8] cursor-pointer disabled:cursor-wait  disabled:bg-[#475ae88e] w-full rounded-[10px] font-semibold text-base text-[#FCFCFC] mb-5 py-2.5 px-[102px] md:px-[114px]", children: loading ? "Loading" : "Sign In" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: `h-[80%] w-0.5 ${isDarkMode ? " bg-[#272B30]" : " bg-[#E4E4E4]"}` }), (0, jsx_runtime_1.jsxs)("div", { className: "max-w-[400px] w-full", children: [(0, jsx_runtime_1.jsx)("h2", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-2xl mb-5 line-clamp-1`, children: "Create an Acaunt" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleRegister, className: "flex flex-col gap-5", children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "file", className: `cursor-pointer  flex items-center gap-5 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-2xl  line-clamp-1`, children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-[50px] rounded-[10px] flex overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: avatar.url || "./avatar.png", alt: "avatar", className: "w-full object-cover" }) }), "Upload an img"] }), (0, jsx_runtime_1.jsx)("input", { type: "file", id: "file", className: "hidden", onChange: handleAvatar }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Username", name: "username", required: true, autoComplete: "false", className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border` }), (0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email", name: "email", required: true, autoComplete: "false", className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border` }), (0, jsx_runtime_1.jsx)("input", { type: "password", placeholder: "Password", name: "password", required: true, autoComplete: "false", className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border` }), (0, jsx_runtime_1.jsx)("button", { disabled: loading, className: "bg-[#475BE8] disabled:cursor-wait  disabled:bg-[#475ae88e] cursor-pointer w-full rounded-[10px] font-semibold text-base text-[#FCFCFC] mb-5 py-2.5 px-[102px] md:px-[114px]", children: loading ? "Loading" : "Sign Up" })] })] })] }));
}
