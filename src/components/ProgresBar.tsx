import { useEffect, useState } from "react";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
  isDarkMode: boolean;
}

const ProgressBar = ({ title, percentage, color, isDarkMode }: ProgressBarProps) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
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

  return (
    <div className="w-full transition-all duration-300">
      <div className={`flex items-center justify-between mb-2.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <span className={`font-medium text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {title}
        </span>
        <span className={`font-medium text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          {currentPercentage}%
        </span>
      </div>
      <div className={`relative transition-all ease-linear duration-500 ${animation ? "w-[350px]" : "w-0"} h-2 rounded ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} mb-[15px]`}>
        <div
          style={{ width: `${currentPercentage}%`, backgroundColor: color }}
          className="absolute h-full rounded transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default ProgressBar;
