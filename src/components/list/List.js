"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = List;
const jsx_runtime_1 = require("react/jsx-runtime");
const UserInfo_1 = __importDefault(require("../UserInfo"));
const ChatList_1 = __importDefault(require("./chatList/ChatList"));
function List({ isDarkMode }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex-1 pt-[25px] pb-[15px] pr-5', children: [(0, jsx_runtime_1.jsx)(UserInfo_1.default, { isDarkMode: isDarkMode }), (0, jsx_runtime_1.jsx)(ChatList_1.default, { isDarkMode: isDarkMode })] }));
}
