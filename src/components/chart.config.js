"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalRevenueOptions = exports.TotalRevenueSeries = void 0;
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
            formatter(val) {
                return `$ ${val} thousands`;
            },
        },
    },
};
