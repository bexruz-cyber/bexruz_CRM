"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_apexcharts_1 = __importDefault(require("react-apexcharts"));
const AgentPieChart = ({ title, value, series, colors, isDarkMode }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: `w-full flex flex-col  transition-all duration-300 justify-between items-center pt-[15px] px-[30px] pb-5 border ${isDarkMode ? "bg-[#1A1D1F] border-[#272B30]" : "bg-[#FCFCFC] border-[#E4E4E4]"} rounded-lg min-h-[110px]`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("span", { className: `text-center text-sm mb-[5px] ${isDarkMode ? "text-gray-400" : "text-gray-500"}`, children: title }), (0, jsx_runtime_1.jsx)("span", { className: `text-center text-2xl mb-5 font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`, children: value })] }), (0, jsx_runtime_1.jsx)(react_apexcharts_1.default, { options: {
                    chart: {
                        type: "donut",
                        background: "transparent",
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                size: '60%',
                                labels: { show: false },
                            },
                        },
                    },
                    colors: colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                    theme: {
                        mode: isDarkMode ? "dark" : "light",
                    },
                }, series: series, type: "donut", width: "120px", height: "120px", style: { zIndex: 10 } })] }));
};
exports.default = AgentPieChart;
