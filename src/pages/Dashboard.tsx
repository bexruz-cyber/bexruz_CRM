// src/components/Dashboard.tsx

import { TotalRevenueSeries, TotalRevenueOptions } from '../components/TotalRevenue';
import { PieChart, ProgressBar, TotalRevenue } from '../components';
import { DashboardData } from '../DB/DashboardDB'; // Import if defined elsewhere
import { useState } from 'react';
import { Propertydata } from '../DB/PropertyDB';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
    isDarkMode: boolean;
}

const Dashboard = ({ isDarkMode }: DashboardProps) => {
    const { circleChartData, progressBarData } = DashboardData;
    const [selectedFilter, setSelectedFilter] = useState<string>('popular');

    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
    };
    const navigate = useNavigate()

    // Filter PropertyList based on selected filter
    const filteredProperties = Propertydata.PropertyList[selectedFilter] || []; // Make sure this is defined or imported

    return (
        <div className={`pt-7 pb-[30px] px-[25px]`}>
            <h1 className={`font-bold text-2xl mb-5 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>
                Dashboard
            </h1>
            <div className="grid max-md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                {circleChartData.map(data => (
                    <div key={data.id} className="w-full">
                        <PieChart
                            isDarkMode={isDarkMode}
                            title={data.title}
                            value={data.number}
                            series={data.part}
                            colors={data.colors}
                        />
                    </div>
                ))}
            </div>
            <div className="flex max-xl:flex-col gap-5 mt-8 mb-6">
                <div className={`relative transition-all duration-300 min-h-[363px] ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} flex-1 p-5 rounded-[15px] col-span-1 sm:col-span-2 xl:col-span-4`}>
                    <TotalRevenue
                        title="Total Revenue"
                        series={TotalRevenueSeries}
                        options={TotalRevenueOptions}
                        isDarkMode={isDarkMode}
                    />
                </div>
                <div className={`xl:max-w-[390px] transition-all duration-300 max-h-[363px] scrollbar  min-h-[363px] w-full ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} px-5 pt-5 pb-9 rounded-[10px]`}>
                    <h2 className={`font-semibold text-lg ${isDarkMode ? "text-[#EFEFEF]" : "bg-[#FCFCFC]"}  text-[#11142D] mb-5 leading-6`}>
                        Property Referrals
                    </h2>
                    {progressBarData.map((bar) => (
                        <ProgressBar isDarkMode={isDarkMode} key={bar.title} {...bar} />
                    ))}
                </div>
            </div>
            <div className={`${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} transition-all duration-300 p-5 rounded-[15px]`}>
                <div className="flex max-md:flex-col md:items-center justify-between mb-[15px] gap-x-2.5 max-md:gap-5">
                    <h2 className={`font-semibold text-lg ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>Property List</h2>
                    <div className="flex flex-wrap gap-2.5">
                        <button
                            className={`filter_btn font-semibold text-xs p-2.5 rounded-[10px] ${selectedFilter === 'popular' ? (isDarkMode ? "text-[#FCFCFC] bg-[#475BE8]" : "text-[#FCFCFC] bg-[#475BE8]") : (isDarkMode ? "text-[#6F767E] bg-[#111315]" : "text-[#808191] bg-[#F7F7F7]")}`}
                            onClick={() => handleFilterClick('popular')}
                        >
                            Popular
                        </button>
                        <button
                            className={`filter_btn font-semibold text-xs p-2.5 rounded-[10px] ${selectedFilter === 'recommended' ? (isDarkMode ? "text-[#FCFCFC] bg-[#475BE8]" : "text-[#FCFCFC] bg-[#475BE8]") : (isDarkMode ? "text-[#6F767E] bg-[#111315]" : "text-[#808191] bg-[#F7F7F7]")}`}
                            onClick={() => handleFilterClick('recommended')}
                        >
                            Recommended
                        </button>
                        <button
                            className={`filter_btn font-semibold text-xs p-2.5 rounded-[10px] ${selectedFilter === 'newest' ? (isDarkMode ? "text-[#FCFCFC] bg-[#475BE8]" : "text-[#FCFCFC] bg-[#475BE8]") : (isDarkMode ? "text-[#6F767E] bg-[#111315]" : "text-[#808191] bg-[#F7F7F7]")}`}
                            onClick={() => handleFilterClick('newest')}
                        >
                            Newest
                        </button>
                        <button
                            className={`filter_btn font-semibold text-xs p-2.5 rounded-[10px] ${selectedFilter === 'mostRecent' ? (isDarkMode ? "text-[#FCFCFC] bg-[#475BE8]" : "text-[#FCFCFC] bg-[#475BE8]") : (isDarkMode ? "text-[#6F767E] bg-[#111315]" : "text-[#808191] bg-[#F7F7F7]")}`}
                            onClick={() => handleFilterClick('mostRecent')}
                        >
                            Most Recent
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 max-lg:gap-y-5 lg:grid-cols-3 gap-x-6">
                    {
                        filteredProperties.length > 0 ? filteredProperties.map(property => (
                            <div onClick={() => navigate("/property")} className='w-full sm:flex lg:block  justify-between' key={property.id} >
                                <div className="rounded-[10px] overflow-hidden">
                                    <img src={property.img} alt={property.title} className='w-full max-sm:max-w-none max-sm:mb-2.5 max-lg:max-w-[250px] block lg:mb-2.5' />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between gap-x-2.5 mb-2.5 lg:mb-1">
                                        <h2 className={`text-base font-semibold ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>{property.title}</h2>
                                        <p className={`font-semibold text-xs py-[7px] px-[9px] rounded-[4px] text-[#475BE8] ${isDarkMode ? "bg-[#111315]" : "bg-[#F0EEFF"}`}>{property.price}</p>
                                    </div>
                                    <a href="#" className={`flex items-center  gap-1.5 ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}`}>
                                        <div className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15 8.00441C15 9.42437 14.5075 10.7292 13.684 11.7572H13.6875C13.6875 11.7572 11.6022 14.5497 9.98682 16.527C9.47145 17.1579 8.52874 17.1576 8.01367 16.5265C6.40341 14.5535 4.32083 11.7632 4.32083 11.7632L4.31597 11.7572C3.49254 10.7292 3 9.42437 3 8.00441C3 4.68827 5.68629 2 9 2C12.3137 2 15 4.68827 15 8.00441ZM11.2404 7.97842C11.2404 9.21659 10.2374 10.2203 9.0001 10.2203C7.76284 10.2203 6.75984 9.21659 6.75984 7.97842C6.75984 6.74025 7.76284 5.73651 9.0001 5.73651C10.2374 5.73651 11.2404 6.74025 11.2404 7.97842Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        {property.location}
                                    </a>
                                </div>
                            </div>
                        )) : (
                            <p className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>No properties available.</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
