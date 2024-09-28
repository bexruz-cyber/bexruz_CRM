"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Agent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react"); // Import useRef
const react_2 = require("swiper/react"); // Import Swiper
require("swiper/css");
require("swiper/css/pagination");
const modules_1 = require("swiper/modules");
const components_1 = require("../components/");
const AgentDB_1 = require("../DB/AgentDB");
function Agent({ isDarkMode }) {
    // Use SwiperRef type for the ref instead of SwiperClass
    const swiperRef = (0, react_1.useRef)(null);
    const pagination = {
        clickable: true,
        el: '.swiper-pagination', // Target the pagination element
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    // Chunk the agent list into groups of 4
    const agentChunks = chunkArray(AgentDB_1.AgentData.agentList, 4);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pt-7 pl-[25px] pb-[30px] pr-5 relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between gap-2.5 mb-5", children: (0, jsx_runtime_1.jsx)("h1", { className: `${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold md:font-bold text-lg md:text-2xl leading-6 md:leading-[34px]`, children: "Agents List" }) }), (0, jsx_runtime_1.jsx)("div", { className: `${AgentDB_1.AgentData.agentList.length > 4 ? "mb-[30px]" : "mb-0"}`, children: (0, jsx_runtime_1.jsx)(react_2.Swiper, { ref: swiperRef, pagination: pagination, modules: [modules_1.Pagination], className: `${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} rounded-[10px]`, spaceBetween: 10, slidesPerView: 1, children: agentChunks.map((chunk, index) => ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, { children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 gap-4", children: chunk.map(agent => ((0, jsx_runtime_1.jsx)(components_1.AgentCard, { isDarkMode: isDarkMode, agent: agent }, agent.Id))) }) }, index))) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mt-4", children: [AgentDB_1.AgentData.agentList.length > 4 ? ((0, jsx_runtime_1.jsx)("div", { className: "font-normal text-sm text-[#808191]", children: "Showing 1 to 10 Name" })) : ((0, jsx_runtime_1.jsx)("div", { className: "font-normal text-sm text-[#808191] hidden", children: "Showing 1 to 10 Name" })), (0, jsx_runtime_1.jsx)("div", { className: "swiper-pagination" }), " "] })] }));
}
