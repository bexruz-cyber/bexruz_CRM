import ReactApexChart from "react-apexcharts";

interface PieChartProps {
  title: string;
  value: number;
  series: number[];
  colors: string[];
  isDarkMode: boolean;
}

const PieChart = ({ title, value, series, colors, isDarkMode }: PieChartProps) => {
  return (
    <div className={`w-full flex flex-row transition-all duration-300 justify-between items-center py-6 px-5 ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} rounded-lg min-h-[110px]`}>
      <div className="flex flex-col">
        {/* To'g'ri foydalanish usuli */}
        <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          {title}
        </span>
        <span className={`text-2xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"} mt-1`}>
          {value}
        </span>
      </div>

      <ReactApexChart
        options={{
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
        }}
        series={series}
        type="donut"
        width="120px"
        height="120px"
        style={{ zIndex: 10 }}
      />
    </div>
  );
};

export default PieChart;
