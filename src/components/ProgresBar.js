"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ProgressBar = ({ title, percentage, color, isDarkMode }) => {
    const [currentPercentage, setCurrentPercentage] = (0, react_1.useState)(0);
    const [animation, setAnimation] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setAnimation(true);
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            setCurrentPercentage(progress);
            if (progress >= percentage) {
                clearInterval(interval);
            }
        }, 15); // Adjust the speed of the animation here
        return () => clearInterval(interval);
    }, [percentage]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full transition-all duration-300", children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex items-center justify-between mb-2.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`, children: [(0, jsx_runtime_1.jsx)("span", { className: `font-medium text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`, children: title }), (0, jsx_runtime_1.jsxs)("span", { className: `font-medium text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`, children: [currentPercentage, "%"] })] }), (0, jsx_runtime_1.jsx)("div", { className: `relative transition-all ease-linear duration-500 ${animation ? "w-[350px]" : "w-0"} h-2 rounded ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} mb-[15px]`, children: (0, jsx_runtime_1.jsx)("div", { style: { width: `${currentPercentage}%`, backgroundColor: color }, className: "absolute h-full rounded transition-all duration-300" }) })] }));
};
exports.default = ProgressBar;
