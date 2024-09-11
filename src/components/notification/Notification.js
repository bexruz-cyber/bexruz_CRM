"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Notification;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function Notification() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "bottom-right" }) }));
}
