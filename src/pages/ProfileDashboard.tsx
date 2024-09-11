// src/components/Dashboard.tsx

import { useState } from 'react';
import { Propertydata } from '../DB/PropertyDB';
import { TotalRevenueSeries, TotalRevenueOptions } from '../components/TotalRevenue';
import { PieChart, ProgressBar, TotalRevenue } from '../components';
import { AgentData } from '../DB/AgentDB';
import chartCustomer from "../img/chart.png"
import { useNavigate } from 'react-router-dom';
import { DashboardData } from '../DB/DashboardDB'; // Import if defined elsewhere


interface DashboardProps {
    isDarkMode: boolean;
}

const ProfileDashboard = ({ isDarkMode }: DashboardProps) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('popular');
    const navigate = useNavigate()
    const { circleChartData, progressBarData } = DashboardData; // Make sure this is defined or imported



    // Handle button click and set the selected filter
    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
    };

    // Filter PropertyList based on selected filter
    const filteredProperties = Propertydata.PropertyList[selectedFilter as keyof typeof Propertydata.PropertyList] || [];


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
                <div className={`relative transition-all duration-300 ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} flex-1 p-5 rounded-[15px] col-span-1 sm:col-span-2 xl:col-span-4`}>
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
            <div className='flex max-lg:flex-col items-center gap-5 t_c_s_container'>
                <div className={`top_agent min-h-[360px] transition-all duration-300 ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"}  p-5 w-full rounded-[10px]`}>
                    <div className="flex items-center justify-between mb-5 gap-x-2.5">
                        <h3 className={`font-semibold text-lg ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  leading-6`}>Top Agent</h3>
                        <button onClick={() => navigate("/agent")} className={`py-[9px] px-[15px] border ${isDarkMode ? "text-[#6F767E] border-[#272B30]" : "border-[#E4E4E4] text-[#808191]"} leading-5 font-semibold text-sm rounded-lg`}>View All</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 gap-[15px]">
                            {AgentData.topAgent.map((item) => (
                                <div onClick={() => navigate("/agent")} className="cursor-pointer w-full flex items-start justify-between" key={item.id}>
                                    <div className="flex items-center gap-x-2.5">
                                        <img src={item.image} alt="" className='object-cover max-w-10 ' />
                                        <div className="">
                                            <h4 className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[11142D]"} leading-5 mb-0.5`}>{item.name}</h4>
                                            <p className={`font-normal text-xs leading-4 ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}`}>{item.degree}</p>
                                        </div>
                                    </div>
                                    <button className='px-[8.25px] py-[3px]'>
                                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 7C1.25 7.41421 1.58579 7.75 2 7.75C2.41421 7.75 2.75 7.41421 2.75 7C2.75 6.58579 2.41421 6.25 2 6.25C1.58579 6.25 1.25 6.58579 1.25 7Z" stroke="#6F767E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.25 12.25C1.25 12.6642 1.58579 13 2 13C2.41421 13 2.75 12.6642 2.75 12.25C2.75 11.8358 2.41421 11.5 2 11.5C1.58579 11.5 1.25 11.8358 1.25 12.25Z" stroke="#6F767E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.25 1.75C1.25 2.16421 1.58579 2.5 2 2.5C2.41421 2.5 2.75 2.16421 2.75 1.75C2.75 1.33579 2.41421 1 2 1C1.58579 1 1.25 1.33579 1.25 1.75Z" stroke="#6F767E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`min-h-[360px] transition-all duration-300 ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"}  py-5 lg:max-w-[318px] w-full rounded-[10px]`}>
                    <div className="flex items-center px-5 justify-between mb-5 gap-x-2.5">
                        <h3 className={`font-semibold text-lg ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  dark:text-leading-6`}>Customer</h3>
                        <button onClick={() => navigate("/review")} className={`py-[9px] px-[15px] ${isDarkMode ? "border-[#272B30] text-[#6F767E]" : "border-[#E4E4E4] text-[#808191]"} border leading-5  font-semibold text-sm rounded-lg`}>View All</button>
                    </div>
                    <div className={`${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"} pb-8 border-b px-5 mb-8`}>
                        <h4 className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}  font-semibold text-xs mb-3 leading-4`}>Total Customers</h4>
                        <div className="flex items-end justify-between relative">
                            <div className="">
                                <h5 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}   font-semibold text-[26px] mb-1 leading-[35px]`}>5007k</h5>
                                <p className="text-[#2ED480] font-semibold text-xs leading-4">21.77%</p>
                            </div>
                            <img src={chartCustomer} alt="chartCustomer" className='max-w-[116px] right-0 bottom-[-11px] absolute' />
                        </div>
                    </div>
                    <div className="px-5 pb-5">
                        <h4 className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}  font-semibold text-xs mb-3 leading-4`}>New Customers This Month</h4>
                        <div className="flex items-end justify-between relative">
                            <div className="">
                                <h5 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}   font-semibold text-[26px] mb-1 leading-[35px]`}>12k</h5>
                                <p className="text-[#2ED480] font-semibold text-xs leading-4">21.77%</p>
                            </div>
                            <img src={chartCustomer} alt="chartCustomer" className='max-w-[116px] right-0 bottom-[-11px] absolute' />
                        </div>
                    </div>
                </div>
                <div className={`sales transition-all duration-300 min-h-[360px] ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"}  p-5 w-full rounded-[10px]`}>
                    <div className="flex items-center justify-between mb-5 gap-x-2.5">
                        <h3 className={`font-semibold text-lg ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} text-leading-6`}>Latest Sales</h3>
                        <button onClick={() => navigate("/property")} className='max-w-[13px]'>
                            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.61944 0.719994L12.7844 4.96889C13.0719 5.26221 13.0719 5.73779 12.7844 6.03111L8.61944 10.28C8.33192 10.5733 7.86574 10.5733 7.57822 10.28C7.29069 9.98668 7.29069 9.51111 7.57822 9.21778L10.4863 6.25111H0.736259C0.329634 6.25111 0 5.91482 0 5.5C0 5.08518 0.329634 4.74889 0.736259 4.74889H10.4863L7.57822 1.78222C7.29069 1.48889 7.29069 1.01332 7.57822 0.719994C7.86574 0.426669 8.33192 0.426669 8.61944 0.719994Z" fill="#6F767E" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-y-5">
                        {Propertydata.latestSales.map((s) => (
                            <div onClick={() => navigate("/property")} key={s.id} className="cursor-pointer flex items-center justify-between gap-x-2.5">
                                <div className="flex items-center gap-x-2.5">
                                    <img src={s.img} alt="" className='object-cover max-w-[49px] h-[49px]' />
                                    <div className="">
                                        <h4 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base leading-6 mb-0.5`}>{s.title}</h4>
                                        <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} font-medium text-sm leading-5`}>{s.description}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-lg leading-6  text-[#2F80ED]">{s.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`mb-[25px] sales_laptop transition-all duration-300 min-h-[360px] ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"}  p-5 w-full rounded-[10px]`}>
                <div className="flex items-center justify-between mb-5 gap-x-2.5">
                    <h3 className={`font-semibold text-lg ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} text-leading-6`}>Latest Sales</h3>
                    <button className='max-w-[13px]'>
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.61944 0.719994L12.7844 4.96889C13.0719 5.26221 13.0719 5.73779 12.7844 6.03111L8.61944 10.28C8.33192 10.5733 7.86574 10.5733 7.57822 10.28C7.29069 9.98668 7.29069 9.51111 7.57822 9.21778L10.4863 6.25111H0.736259C0.329634 6.25111 0 5.91482 0 5.5C0 5.08518 0.329634 4.74889 0.736259 4.74889H10.4863L7.57822 1.78222C7.29069 1.48889 7.29069 1.01332 7.57822 0.719994C7.86574 0.426669 8.33192 0.426669 8.61944 0.719994Z" fill="#6F767E" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    {Propertydata.latestSales.map((s) => (
                        <div key={s.id} className="flex items-center justify-between gap-x-2.5">
                            <div className="flex items-center gap-x-2.5">
                                <img src={s.img} alt="" className='object-cover max-w-[49px] h-[49px]' />
                                <div className="">
                                    <h4 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} line-clamp-1 font-semibold text-base leading-6 mb-0.5`}>{s.title}</h4>
                                    <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} line-clamp-1 font-medium text-sm leading-5`}>{s.description}</p>
                                </div>
                            </div>
                            <p className="font-semibold text-lg leading-6  text-[#2F80ED]">{s.price}</p>
                        </div>
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
        </div >
    );
};

export default ProfileDashboard;



















