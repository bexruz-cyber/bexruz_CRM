import { MyProfileData } from "../DB/MyProfileDB";
import profile_bg from "../img/MyProfile/profile_bg.png"
import { useState } from 'react';
import { Propertydata } from '../DB/PropertyDB';
import { useNavigate } from 'react-router-dom';


interface MyProfileProps {
  isDarkMode: boolean;
}

export default function My_profile({ isDarkMode }: MyProfileProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('popular');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };
  const navigate = useNavigate()

  // Filter PropertyList based on selected filter
  const filteredProperties = Propertydata.PropertyList[selectedFilter as keyof typeof Propertydata.PropertyList] || [];

  return (
    <div className="pt-7 pb-8 px-[25px]">
      <h1 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} mb-5 font-semibold md:font-bold text-lg md:text-2xl leading-6 md:leading-[34px]`}>
        Messages
      </h1>
      <div className={`p-5  flex items-center gap-5 ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#fcfcfc]"} rounded-[15px] mb-5`}>
        <div className="max-w-[379px] w-full relative ">
          <img src={MyProfileData.img} alt="" className="absolute right-0 top-[38px]" />
          <div className="max-w-[340px] overflow-hidden rounded-bl-[15px] rounded-tl-[15px]">
            <img src={profile_bg} alt="" className="w-full object-cover" />
          </div>
          <button className={`flex items-center gap-[10px] absolute bottom-[18px] left-5 rounded-lg ${isDarkMode ? "bg-[#111315] text-[#EFEFEF]" : "bg-[#F4F4F4] text-[#11142D]"} font-normal text-sm px-[15px] py-3 `}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6C1.5 4.75736 2.50736 3.75 3.75 3.75H5.31598C5.50537 3.75 5.6785 3.643 5.7632 3.47361L5.85676 3.28647C6.17437 2.65125 6.82362 2.25 7.53381 2.25H10.4662C11.1764 2.25 11.8256 2.65125 12.1432 3.28647L12.2368 3.47361C12.3215 3.643 12.4946 3.75 12.684 3.75H14.25C15.4926 3.75 16.5 4.75736 16.5 6V13.5C16.5 14.7426 15.4926 15.75 14.25 15.75H3.75C2.50736 15.75 1.5 14.7426 1.5 13.5V6ZM9 12.75C10.6569 12.75 12 11.4069 12 9.75C12 8.09315 10.6569 6.75 9 6.75C7.34315 6.75 6 8.09315 6 9.75C6 11.4069 7.34315 12.75 9 12.75ZM13.5 7.5C13.9142 7.5 14.25 7.16421 14.25 6.75C14.25 6.33579 13.9142 6 13.5 6C13.0858 6 12.75 6.33579 12.75 6.75C12.75 7.16421 13.0858 7.5 13.5 7.5Z" fill="#6F767E" />
            </svg>
            Change Photo
          </button>
        </div>
        <div className="w-full">
          <h2 className={`font-medium text-[22px] mb-1.5 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>{MyProfileData.name} {MyProfileData.lastName}</h2>
          <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} mb-[30px] font-normal text-base`}>Admin</p>
          <div className="max-w-[544px] mb-5">
            <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} mb-[5px] font-sm text-base`}>Address</p>
            <div className={`flex items-center gap-2.5 p-2.5 border ${isDarkMode ? "border-[#272B30] text-[#EFEFEF]" : "texy-[#11142D] border-[#E4E4E4]"} rounded-md`}>
              <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00441C12 7.42437 11.5075 8.72921 10.684 9.75716H10.6875C10.6875 9.75716 8.60223 12.5497 6.98682 14.527C6.47145 15.1579 5.52874 15.1576 5.01367 14.5265C3.40341 12.5535 1.32083 9.76322 1.32083 9.76322L1.31597 9.75716C0.492539 8.72921 0 7.42437 0 6.00441C0 2.68827 2.68629 0 6 0C9.31371 0 12 2.68827 12 6.00441ZM8.24036 5.97842C8.24036 7.21659 7.23736 8.22032 6.0001 8.22032C4.76284 8.22032 3.75984 7.21659 3.75984 5.97842C3.75984 4.74025 4.76284 3.73651 6.0001 3.73651C7.23736 3.73651 8.24036 4.74025 8.24036 5.97842Z" fill="currentColor" />
              </svg>
              <h3 className="font-normal text-sm">4517 Washington Ave. Manchaster, Kentucky 39495</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-5 max-w-[544px]">
            <div className="">
              <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} mb-[5px] font-sm text-base`}>Phone Number</p>
              <div className={`flex items-center gap-2.5 p-2.5 border ${isDarkMode ? "border-[#272B30] text-[#EFEFEF]" : "texy-[#11142D] border-[#E4E4E4]"} rounded-md`}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.324546 4.69457C-0.502947 3.03392 0.331984 1.20118 1.92298 0.246581C2.68897 -0.213016 3.67896 -0.013558 4.20722 0.706801L5.37922 2.30498C5.87805 2.98521 5.95451 3.8873 5.57727 4.64178L5.26997 5.25637C5.18102 5.43428 5.16695 5.64009 5.25795 5.81696C5.42373 6.13921 5.77677 6.71029 6.45687 7.39039C7.13696 8.07048 7.70804 8.42352 8.03029 8.58931C8.20717 8.6803 8.41297 8.66624 8.59088 8.57728L9.20547 8.26999C9.95995 7.89275 10.862 7.9692 11.5423 8.46803L13.1405 9.64003C13.8608 10.1683 14.0603 11.1583 13.6007 11.9243C12.6461 13.5153 10.8133 14.3502 9.15268 13.5227C7.75309 12.8253 5.96459 11.6711 4.07038 9.77687C2.17617 7.88266 1.02196 6.09417 0.324546 4.69457Z" fill="currentColor" />
                </svg>
                <p className="font-normal text-sm">+0123 456 7890</p>
              </div>
            </div>
            <div className="">
              <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} mb-[5px] font-sm text-base`}>Email</p>
              <div className={`flex items-center gap-2.5 p-2.5 border ${isDarkMode ? "border-[#272B30] text-[#EFEFEF]" : "texy-[#11142D] border-[#E4E4E4]"} rounded-md`}>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.403226 0.964382C0.260562 1.16893 0.348101 1.44059 0.560148 1.57186L7.10515 5.62353C7.34703 5.77327 7.65281 5.77327 7.89469 5.62353L14.4398 1.57179C14.6519 1.44052 14.7394 1.16885 14.5967 0.964299C14.1901 0.381386 13.5146 0 12.75 0H2.25C1.48536 0 0.809808 0.381422 0.403226 0.964382Z" fill="currentColor" />
                  <path d="M15 3.88674C15 3.49498 14.5699 3.2554 14.2368 3.4616L8.68422 6.89893C7.95858 7.34813 7.04126 7.34813 6.31562 6.89893L0.763178 3.4617C0.430082 3.2555 0 3.49508 0 3.88683V9.75C0 10.9926 1.00736 12 2.25 12H12.75C13.9926 12 15 10.9926 15 9.75V3.88674Z" fill="currentColor" />
                </svg>
                <p className="font-normal text-sm">{MyProfileData.email}</p>
              </div>
            </div>
          </div>
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
              <div onClick={() => navigate(`/propertyDetail/${property.id}`)} className='w-full sm:flex lg:block  justify-between' key={property.id} >
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
  )
}
