"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const userStore_1 = require("../lib/userStore");
function UserInfo({ isDarkMode }) {
    const { currentUser } = (0, userStore_1.useUserStore)();
    // Use the correct avatar URL property
    const avatarUrl = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.avatarUrl) || "./avatar.png";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-5 flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-[50px] max-h-[50px] flex rounded-full overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: avatarUrl, alt: "avatar", className: "w-full h-full object-cover", onError: (e) => {
                                // Set the default avatar image in case of an error
                                e.target.src = "./avatar.png";
                            } }) }), (0, jsx_runtime_1.jsx)("h2", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base`, children: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.username) || 'Unknown User' })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-5 cursor-pointer", children: (0, jsx_runtime_1.jsx)("img", { src: "./more.png", alt: "more options", className: "w-full object-cover" }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-5 cursor-pointer", children: (0, jsx_runtime_1.jsx)("img", { src: "./video.png", alt: "video call", className: "w-full object-cover" }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-5 cursor-pointer", children: (0, jsx_runtime_1.jsx)("img", { src: "./edit.png", alt: "edit", className: "w-full object-cover" }) })] })] }));
}
