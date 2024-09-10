import ReactApexChart from "react-apexcharts";

interface AgentPieChart {
  title: string;
  value: number;
  series: number[];
  colors: string[];
  isDarkMode: boolean;
}

const AgentPieChart = ({ title, value, series, colors, isDarkMode }: AgentPieChart) => {
  return (
      <div className={`w-full flex flex-col  transition-all duration-300 justify-between items-center pt-[15px] px-[30px] pb-5 border ${isDarkMode ? "bg-[#1A1D1F] border-[#272B30]" : "bg-[#FCFCFC] border-[#E4E4E4]"} rounded-lg min-h-[110px]`}>
      <div className="flex flex-col">
        {/* To'g'ri foydalanish usuli */}
        <span className={`text-center text-sm mb-[5px] ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          {title}
        </span>
        <span className={`text-center text-2xl mb-5 font-bold ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
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

export default AgentPieChart;
