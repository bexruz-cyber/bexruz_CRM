"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalRevenueOptions = exports.TotalRevenueSeries = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_apexcharts_1 = __importDefault(require("react-apexcharts"));
const ArrowCircleUpRounded_1 = __importDefault(require("@mui/icons-material/ArrowCircleUpRounded"));
exports.TotalRevenueSeries = [
    {
        name: "Last Month",
        data: [183, 124, 115, 85, 143, 143, 96],
    },
    {
        name: "Running Month",
        data: [95, 84, 72, 44, 108, 108, 47],
    },
];
exports.TotalRevenueOptions = {
    chart: {
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    colors: ["#475BE8", "#CFC8FF"],
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: "55%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    stroke: {
        colors: ["transparent"],
        width: 4,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
        title: {
            text: "$ (thousands)",
        },
        labels: {
            formatter: (value) => {
                if (value >= 1000000) {
                    return `${(value / 1000000).toFixed(1)}M`;
                }
                else if (value >= 1000) {
                    return `${(value / 1000).toFixed(0)}K`;
                }
                return value.toString();
            },
        },
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
    },
    tooltip: {
        y: {
            formatter: (val) => `$ ${val} thousands`,
        },
    },
};
const TotalRevenue = ({ title, series, options, isDarkMode }) => {
    const calculateTotal = (series) => {
        return series.reduce((acc, cur) => {
            return acc + cur.data.reduce((sum, value) => sum + value, 0);
        }, 0);
    };
    const totalValue = calculateTotal(series);
    const formattedValue = totalValue.toLocaleString();
    const chartColors = isDarkMode ? ["#5A3FBC", "#9E7DFF"] : ["#475BE8", "#CFC8FF"];
    const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
    const bgColor = isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]";
    const arrowColor = isDarkMode ? "text-blue-400" : "text-blue-600";
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex flex-col rounded-lg ${bgColor} transition-all duration-300`, children: [(0, jsx_runtime_1.jsx)("h2", { className: `text-lg font-semibold ${textColor}`, children: title }), (0, jsx_runtime_1.jsxs)("div", { className: "my-5 flex flex-row gap-4 flex-wrap items-center", children: [(0, jsx_runtime_1.jsxs)("h3", { className: `text-3xl font-bold ${textColor}`, children: ["$", formattedValue] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center gap-1", children: [(0, jsx_runtime_1.jsx)(ArrowCircleUpRounded_1.default, { sx: { fontSize: 25 }, className: arrowColor }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("p", { className: `text-sm ${arrowColor}`, children: "0.8%" }), (0, jsx_runtime_1.jsx)("p", { className: `text-xs ${textColor}`, children: "Than Last Month" })] })] })] }), (0, jsx_runtime_1.jsx)(react_apexcharts_1.default, { series: series, type: "bar", height: 191, options: Object.assign(Object.assign({}, options), { chart: Object.assign(Object.assign({}, options.chart), { background: 'transparent' }), tooltip: Object.assign(Object.assign({}, options.tooltip), { theme: isDarkMode ? 'dark' : 'light', style: {
                            fontSize: '14px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                        } }), xaxis: Object.assign(Object.assign({}, options.xaxis), { labels: {
                            style: {
                                colors: isDarkMode ? '#E0E0E0' : '#333333',
                            },
                        } }), yaxis: Object.assign(Object.assign({}, options.yaxis), { labels: {
                            style: {
                                colors: isDarkMode ? '#E0E0E0' : '#333333',
                            },
                        } }), fill: Object.assign(Object.assign({}, options.fill), { colors: chartColors }), stroke: Object.assign(Object.assign({}, options.stroke), { colors: chartColors }), plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            borderRadius: 5,
                        },
                    } }) })] }));
};
exports.default = TotalRevenue;
