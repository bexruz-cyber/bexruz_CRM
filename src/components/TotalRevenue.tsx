import React from "react";
import ReactApexChart from "react-apexcharts";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";
import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
    {
        name: "Last Month",
        data: [183, 124, 115, 85, 143, 143, 96],
    },
    {
        name: "Running Month",
        data: [95, 84, 72, 44, 108, 108, 47],
    },
];

export const TotalRevenueOptions: ApexOptions = {
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
            formatter: (value: number) => {
                if (value >= 1000000) {
                    return `${(value / 1000000).toFixed(1)}M`;
                } else if (value >= 1000) {
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
            formatter: (val: number) => `$ ${val} thousands`,
        },
    },
};

interface TotalRevenueProps {
    title: string;
    series: { name: string; data: number[] }[];
    options: ApexOptions;
    isDarkMode: boolean;
}

const TotalRevenue: React.FC<TotalRevenueProps> = ({ title, series, options, isDarkMode }) => {
    const calculateTotal = (series: { name: string; data: number[] }[]) => {
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

    return (
        <div className={`flex flex-col rounded-lg ${bgColor} transition-all duration-300`}>
            <h2 className={`text-lg font-semibold ${textColor}`}>
                {title}
            </h2>

            <div className="my-5 flex flex-row gap-4 flex-wrap items-center">
                <h3 className={`text-3xl font-bold ${textColor}`}>
                    ${formattedValue}
                </h3>
                <div className="flex flex-row items-center gap-1">
                    <ArrowCircleUpRounded
                        sx={{ fontSize: 25 }}
                        className={arrowColor}
                    />
                    <div className="flex flex-col">
                        <p className={`text-sm ${arrowColor}`}>
                            0.8%
                        </p>
                        <p className={`text-xs ${textColor}`}>
                            Than Last Month
                        </p>
                    </div>
                </div>
            </div>

            <ReactApexChart
                series={series}
                type="bar"
                height={191}
                options={{
                    ...options,
                    chart: {
                        ...options.chart,
                        background: 'transparent',
                    },
                    tooltip: {
                        ...options.tooltip,
                        theme: isDarkMode ? 'dark' : 'light',
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                        },
                    },
                    xaxis: {
                        ...options.xaxis,
                        labels: {
                            style: {
                                colors: isDarkMode ? '#E0E0E0' : '#333333',
                            },
                        },
                    },
                    yaxis: {
                        ...options.yaxis,
                        labels: {
                            style: {
                                colors: isDarkMode ? '#E0E0E0' : '#333333',
                            },
                        },
                    },
                    fill: {
                        ...options.fill,
                        colors: chartColors,
                    },
                    stroke: {
                        ...options.stroke,
                        colors: chartColors,
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '50%',
                            borderRadius: 5,
                        },
                    },
                }}
            />
        </div>
    );
};

export default TotalRevenue;
