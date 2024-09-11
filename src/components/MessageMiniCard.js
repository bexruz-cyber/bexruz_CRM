"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageMiniCard;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function MessageMiniCard({ Id, profileImg, name, lastName, lastNews, recentActivity, isDarkMode }) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: () => navigate(`/messageChatDetail/${Id}`), className: "flex items-center py-3 px-[15px]", children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-[46px] rounded-full overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: profileImg, alt: profileImg, className: "w-full" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "max-w-[174px] w-full ml-[17px] mr-1", children: [(0, jsx_runtime_1.jsxs)("h2", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base mb-[5px] line-clamp-1`, children: [name, " ", lastName] }), (0, jsx_runtime_1.jsx)("p", { className: `${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} font-normal text-sm line-clamp-1`, children: lastNews })] }), (0, jsx_runtime_1.jsx)("p", { className: `max-w-[76px] w-full self-start text-right font-medium text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} `, children: recentActivity })] }));
}
