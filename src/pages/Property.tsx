import { useState } from "react";
import { PropertyCard } from "../components/";
import { v4 as uuidv4 } from "uuid";
import { PropertyListMain } from "src/lib/types/propertyListMainType";
import profileImg from "../img/property_list/profilemage.png";


interface PropertyProps {
  isDarkMode: boolean;
  modalsClose: boolean;
  setModalsClose: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Property({ isDarkMode, modalsClose, setModalsClose }: PropertyProps) {

  const [modals, setModals] = useState<{ [key: string]: boolean }>({
    status: false,
    type: false,
    countries: false,
    states: false,
  });


  const [selectStatusFilter, setSelectStatusFilter] = useState<string>('Any Type');
  const [selectTypeFilter, setSelectTypeFilter] = useState<string>('Any Type');
  const [selectCountriesFilter, setSelectCountriesFilter] = useState<string>('Any Type');
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [addPropertyStatus, setAddPropertyStatus] = useState<string>("");
  const [addPropertyType, setAddPropertyType] = useState<string>("");
  const [addPropertyImgUrl, setAddPropertyImgUrl] = useState<string>("");
  const [addPropertyTitle, setAddPropertyTitle] = useState<string>("");
  const [addPropertyLocation, setAddPropertyLocation] = useState<string>("");
  const [addPropertyPrice, setAddPropertyPrice] = useState<number | undefined>(undefined);
  const [addPropertyBeds, setAddPropertyBeds] = useState<number | undefined>(undefined);
  const [addPropertyArea, setAddPropertyArea] = useState<number | undefined>(undefined);
  const [addPropertyBigImg, setAddPropertyBigImg] = useState<string>("");
  const [addPropertySmallImg1, setAddPropertySmallImg1] = useState<string>("");
  const [addPropertySmallImg2, setAddPropertySmallImg2] = useState<string>("");
  const [addPropertyRating, setAddPropertyRating] = useState<number | undefined>(undefined);
  const [addPropertyPriceOneDay, setAddPropertyPriceOneDay] = useState<number | undefined>(undefined);
  const [addPropertyFaciltyBeds, setAddPropertyFaciltyBeds] = useState<boolean>(false);
  const [addPropertyFaciltyBaths, setAddPropertyFaciltyBaths] = useState<boolean>(false);
  const [addPropertyFaciltyArea, setAddPropertyFaciltyArea] = useState<boolean>(false);
  const [addPropertyFaciltySmookingArea, setAddPropertyFaciltySmookingArea] = useState<boolean>(false);
  const [addPropertyFaciltyKitchen, setAddPropertyFaciltyKitchen] = useState<boolean>(false);
  const [addPropertyFaciltyBalcony, setAddPropertyFaciltyBalcony] = useState<boolean>(false);
  const [addPropertyFaciltyWifi, setAddPropertyFaciltyWifi] = useState<boolean>(false);
  const [addPropertyFaciltyParkingArea, setAddPropertyFaciltyParkingArea] = useState<boolean>(false);
  const [addPropertyDescription, setAddPropertyDescription] = useState<string>("");
  const [addPropertySellerNameLastname, setAddPropertySellerNameLastname] = useState<string>("");
  const [addPropertySellerAgent] = useState<string>("Agent");
  const [addPropertySellerSellerLocation, setAddPropertySellerSellerLocation] = useState<string>("");
  const [addPropertySellerProperties, setAddPropertySellerProperties] = useState<number | undefined>(undefined); // Corrected typo
  const [addPropertySellerMap] = useState<string>(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
  const [fromErrorModal, setfromErrorModal] = useState(false)
  const propertydataFromLocalStorage: PropertyListMain[] = JSON.parse(localStorage.getItem('Propertydata') ?? '[]');

  const addpropertyhandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!addPropertyStatus || !addPropertyType || !addPropertyImgUrl || !addPropertyPrice || !addPropertyBeds || !addPropertyArea || !addPropertyBigImg || !addPropertySmallImg1 || !addPropertySmallImg2 || !addPropertyRating || !addPropertyPriceOneDay || !addPropertyDescription || !addPropertySellerNameLastname || !addPropertySellerAgent || !addPropertySellerSellerLocation || !addPropertySellerProperties || !addPropertySellerMap) {
      setfromErrorModal(true)
      setModalsClose(false)
      return;
    }

    const newProperty: PropertyListMain = {
      status: addPropertyStatus,
      id: uuidv4(),
      type: addPropertyType,
      img: addPropertyImgUrl,
      title: addPropertyTitle,
      location: addPropertyLocation,
      price: addPropertyPrice,
      beds: addPropertyBeds,
      area: addPropertyArea,
      propertyDetail: {
        images: {
          bigImg: addPropertyBigImg,
          smallImg: {
            img1: addPropertySmallImg1,
            img2: addPropertySmallImg2,
          },
        },
        rating: addPropertyRating,
        priceOneDay: addPropertyPriceOneDay,
        facility: {
          beds: addPropertyFaciltyBeds,
          baths: addPropertyFaciltyBaths,
          area: addPropertyFaciltyArea,
          smookingArea: addPropertyFaciltySmookingArea,
          kitchen: addPropertyFaciltyKitchen,
          balcony: addPropertyFaciltyBalcony,
          wifi: addPropertyFaciltyWifi,
          parkingArea: addPropertyFaciltyParkingArea,
        },
        description: addPropertyDescription,
        seller: {
          sellerImg: profileImg,
          name_lastname: addPropertySellerNameLastname,
          agent: addPropertySellerAgent,
          sellerLocation: addPropertySellerSellerLocation,
          propertis: addPropertySellerProperties,
          map: addPropertySellerMap,
        },
      },
    };

    // Reset the state values
    setAddPropertyStatus("");
    setAddPropertyType("");
    setAddPropertyImgUrl("");
    setAddPropertyTitle("");
    setAddPropertyLocation("");
    setAddPropertyPrice(undefined);
    setAddPropertyBeds(undefined);
    setAddPropertyArea(undefined);
    setAddPropertyBigImg("");
    setAddPropertySmallImg1("");
    setAddPropertySmallImg2("");
    setAddPropertyRating(undefined);
    setAddPropertyPriceOneDay(undefined);
    setAddPropertyFaciltyBeds(false);
    setAddPropertyFaciltyBaths(false);
    setAddPropertyFaciltyArea(false);
    setAddPropertyFaciltySmookingArea(false);
    setAddPropertyFaciltyKitchen(false);
    setAddPropertyFaciltyBalcony(false);
    setAddPropertyFaciltyWifi(false);
    setAddPropertyFaciltyParkingArea(false);
    setAddPropertyDescription("");
    setAddPropertySellerNameLastname("");
    setAddPropertySellerSellerLocation("");
    setAddPropertySellerProperties(undefined);
    setModalsClose(false);

    const newOBJ = [...propertydataFromLocalStorage, newProperty];
    localStorage.setItem('Propertydata', JSON.stringify(newOBJ));
  };
  const handleStatusFilterClick = (filter: string) => {
    setSelectStatusFilter(filter);
    setModals((prev) => ({
      ...prev,
      status: false,
    }));
  };

  const handleTypeFilterClick = (filter: string) => {
    setSelectTypeFilter(filter);
    setModals((prev) => ({
      ...prev,
      type: false,
    }));
  };

  const handleCountryClick = (filter: string) => {
    setSelectCountriesFilter(filter);
    setModals((prev) => ({
      ...prev,
      countries: false,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProperties = propertydataFromLocalStorage?.filter((property) => {
    const statusFilter = selectStatusFilter.toLowerCase();
    const typeFilter = selectTypeFilter.toLowerCase();
    const countriesFilter = selectCountriesFilter.toLowerCase();
    const searchLowercase = searchQuery.toLowerCase();

    const matchesStatus = statusFilter === 'any type' || property.status?.toLowerCase() === statusFilter;
    const matchesType = typeFilter === 'any type' || property.type?.toLowerCase() === typeFilter;
    const matchesCountries = countriesFilter === 'any type' || property.location?.toLowerCase() === countriesFilter;
    const matchesSearch = property.title?.toLowerCase().includes(searchLowercase);


    return matchesStatus && matchesType && matchesCountries && matchesSearch;
  }) ?? [];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const base64String = reader.result as string;

          // Kiritilgan input nomiga qarab state'ni yangilash
          if (inputName === 'titleImg') {
            setAddPropertyImgUrl(base64String); // Title rasm uchun state
          } else if (inputName === 'heroImg') {
            setAddPropertyBigImg(base64String); // Hero rasm uchun state
          } else if (inputName === 'smallImg1') {
            setAddPropertySmallImg1(base64String); // Qizil rasm 1 uchun state
          } else if (inputName === 'smallImg2') {
            setAddPropertySmallImg2(base64String); // Qizil rasm 2 uchun state
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };



  const toggleModalHandler = (modal: 'status' | 'type' | 'countries' | 'states') => {
    setModals((prev) => ({
      ...prev,
      [modal]: !prev[modal],
    }));
  };
  const modalsCloseHandler = () => {
    setModalsClose(false)
    setfromErrorModal(false)
  }
  const addPropertyFormHandler = () => {
    setModalsClose(true)
  }
  return (
    <>
      <div className="pt-7 pb-7 pl-[25px] pr-5">
        <div className="flex items-center justify-between gap-2.5 mb-5">
          <h1
            className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"
              } font-semibold md:font-bold text-lg md:text-2xl leading-6 md:leading-[34px]`}
          >
            Property List
          </h1>
          <button onClick={addPropertyFormHandler} className="py-[13px] px-5 bg-[#475BE8] rounded-[10px] text-[#FCFCFC] font-medium text-sm">
            + Add Property
          </button>
        </div>
        <div className={`${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} px-5 pt-5 pb-6 rounded-[15px]`}>
          <div className="">
            <div className="md:hidden">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z" fill="#808191" />
              </svg>
              <input
                type="search"
                placeholder="Enter an address, city or Zip code"
                className={`block mb-2.5 rounded-lg min-w-[229px] md:max-w-[229px] w-full p-2.5 ${isDarkMode
                  ? "bg-[#111315] text-[#6F767E]"
                  : "text-[#11142D] bg-[#F7F7F7]"
                  } font-medium text-xs flex items-center gap-[5px] outline-none`}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="filter_funksiya grid grid-cols-3 sm:flex sm:items-center max-lg:flex-wrap gap-x-5 gap-y-2.5">
              <div className={`w-full p-2.5 ${isDarkMode ? "bg-[#111315] text-[#6F767E]" : "text-[#11142D] bg-[#F7F7F7]"} font-medium text-xs flex items-center gap-[5px]  max-md:hidden  rounded-lg min-w-[229px] md:max-w-[229px]`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z" fill="#808191" />
                </svg>

                <input
                  type="search"
                  placeholder="Enter an address, city or Zip code"
                  className={` w-full outline-none  ${isDarkMode
                    ? "bg-[#111315] text-[#6F767E]"
                    : "text-[#11142D] bg-[#F7F7F7]"
                    } font-medium text-xs flex items-center gap-[5px]`}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Status Filter Modal */}
              <div onClick={() => toggleModalHandler("status")} className={`flex items-center justify-between cursor-pointer relative w-full rounded-lg max-xl:max-w-[160px] p-2.5 ${isDarkMode
                ? "bg-[#111315] text-[#6F767E]"
                : "text-[#11142D] bg-[#F7F7F7]"
                } font-medium text-xs flex items-center gap-[5px]`}
              >
                {selectStatusFilter}
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.175736 0.681116C0.41005 0.439628 0.789949 0.439628 1.02426 0.681116L4.5 4.26326L7.97574 0.681115C8.21005 0.439627 8.58995 0.439626 8.82426 0.681115C9.05858 0.922603 9.05858 1.31413 8.82426 1.55562L5.34853 5.13777C4.8799 5.62074 4.1201 5.62074 3.65147 5.13777L0.175736 1.55562C-0.0585785 1.31413 -0.0585786 0.922604 0.175736 0.681116Z" fill="#6F767E" />
                </svg>

                <div
                  className={`${modals.status ? "overflow-y-auto h-[114px]" : "h-0"
                    } top-9 absolute drop_shadow z-50 overflow-hidden left-0 w-full grid grid-cols-1 transition-all duration-300 rounded-lg ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"
                    }`}
                >
                  {[...new Set(propertydataFromLocalStorage?.map(item => item.status).filter(Boolean))].map((status, index) => (
                    <button
                      key={index}
                      className={`${selectStatusFilter === status ? " text-[#EFEFEF] font-medium bg-[#475BE8]" : `${isDarkMode ? "text-[#6F767E] font-normal" : "text-[#808191] font-normal"
                        }`} filter_type text-left max-h-[38px] w-full py-2 px-2.5 rounded-[10px] text-sm `}
                      onClick={() => handleStatusFilterClick(status ?? "")}
                    >
                      {status}
                    </button>
                  ))}

                </div>
              </div>

              {/* Type Filter Modal */}
              <div onClick={() => toggleModalHandler('type')} className={`flex items-center justify-between cursor-pointer relative w-full rounded-lg max-xl:max-w-[160px] p-2.5 ${isDarkMode
                ? "bg-[#111315] text-[#6F767E]"
                : "text-[#11142D] bg-[#F7F7F7]"
                } font-medium text-xs flex items-center gap-[5px]`}
              >
                {selectTypeFilter}
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.175736 0.681116C0.41005 0.439628 0.789949 0.439628 1.02426 0.681116L4.5 4.26326L7.97574 0.681115C8.21005 0.439627 8.58995 0.439626 8.82426 0.681115C9.05858 0.922603 9.05858 1.31413 8.82426 1.55562L5.34853 5.13777C4.8799 5.62074 4.1201 5.62074 3.65147 5.13777L0.175736 1.55562C-0.0585785 1.31413 -0.0585786 0.922604 0.175736 0.681116Z" fill="#6F767E" />
                </svg>
                <div
                  className={`${modals.type ? "overflow-y-auto h-[114px]" : "h-0"
                    } top-9 absolute  drop_shadow z-50 overflow-hidden left-0 w-full grid grid-cols-1 transition-all duration-300 rounded-lg ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"
                    }`}
                >
                  {['Any Type', ...new Set(propertydataFromLocalStorage && propertydataFromLocalStorage?.map(item => item.type))].map((type, index) => (
                    <button
                      key={index}
                      className={`${selectTypeFilter === type ? "text-[#EFEFEF] font-medium bg-[#475BE8]" : `${isDarkMode ? "text-[#6F767E] font-normal" : "text-[#808191] font-normal"
                        }`} filter_type text-left w-full py-2 px-2.5 rounded-[10px] text-sm `}
                      onClick={() => handleTypeFilterClick(type ?? "")}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country Filter Modal */}
              <div onClick={() => toggleModalHandler('countries')} className={`flex items-center justify-between cursor-pointer relative w-full rounded-lg max-xl:max-w-[160px] p-2.5 ${isDarkMode
                ? "bg-[#111315] text-[#6F767E]"
                : "text-[#11142D] bg-[#F7F7F7]"
                } font-medium text-xs flex items-center gap-[5px]`}
              >
                {selectCountriesFilter}
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.175736 0.681116C0.41005 0.439628 0.789949 0.439628 1.02426 0.681116L4.5 4.26326L7.97574 0.681115C8.21005 0.439627 8.58995 0.439626 8.82426 0.681115C9.05858 0.922603 9.05858 1.31413 8.82426 1.55562L5.34853 5.13777C4.8799 5.62074 4.1201 5.62074 3.65147 5.13777L0.175736 1.55562C-0.0585785 1.31413 -0.0585786 0.922604 0.175736 0.681116Z" fill="#6F767E" />
                </svg>
                <div
                  className={`${modals.countries ? "overflow-y-auto h-[114px]" : "h-0"
                    } top-9 absolute  drop_shadow z-50 overflow-hidden left-0 w-full grid grid-cols-1 transition-all duration-300 rounded-lg ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"
                    }`}
                >
                  {['Any Type', ...new Set(propertydataFromLocalStorage && propertydataFromLocalStorage.map(item => item.location))].map((location, index) => (
                    <button
                      key={index}
                      className={`${selectCountriesFilter === location ? "text-[#EFEFEF] font-medium bg-[#475BE8]" : `${isDarkMode ? "text-[#6F767E] font-normal" : "text-[#808191] font-normal"
                        }`} filter_type text-left w-full py-2 px-2.5 rounded-[10px] text-sm `}
                      onClick={() => handleCountryClick(location ?? "")}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-x-[65px] gap-y-[25px] mt-[25px]">

            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isDarkMode={isDarkMode}
                />
              ))
            ) : (
              <p>No properties found.</p>
            )}
          </div>
        </div>
      </div>
      <div onClick={modalsCloseHandler} className={`${fromErrorModal || modalsClose ? "block" : "hidden"} z-40 fixed top-0 left-0 w-full h-full  bg-[#111315CC]`}></div>
      <div className={`${modalsClose ? "scale-100" : "scale-0"}  w-full z-50 transition-all duration-300 px-5  max-w-[800px] fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}>
        <div className={`  overflow-y-auto md:h-[588px] h-[400px]   ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} p-5 rounded-[15px] `}>
          <div className="flex items-center justify-between">
            <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-medium text-[22px] mb-2 leading-[30px]`}>Add property</h2>
            <button onClick={modalsCloseHandler} className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>
              <svg width="28px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="none" />
                <path d="M7 17L16.8995 7.10051" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 7.00001L16.8995 16.8995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <form onSubmit={addpropertyhandler}>
            <div className="flex flex-col gap-5">
              <div className="flex max-md:flex-col items-center gap-5">
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="status" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter status
                  </label>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    placeholder="Enter status"
                    autoComplete="off"
                    value={addPropertyStatus}
                    onChange={(e) => setAddPropertyStatus(e.target.value)}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholdetext-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="type" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter type
                  </label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Enter type"
                    autoComplete="off"
                    onChange={(e) => setAddPropertyType(e.target.value)}
                    value={addPropertyType}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
              </div>
              <div className="flex max-md:flex-col items-center gap-5">
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="title" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter title"
                    autoComplete="off"
                    value={addPropertyTitle}
                    onChange={(e) => setAddPropertyTitle(e.target.value)}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="location" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter location"
                    autoComplete="off"
                    onChange={(e) => setAddPropertyLocation(e.target.value)}
                    value={addPropertyLocation}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 max-md:grid-cols-2 gap-5">
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="price" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter status"
                    autoComplete="off"
                    value={addPropertyPrice}
                    onChange={(e) => setAddPropertyPrice(Number(e.target.value))}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="beds" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter beds
                  </label>
                  <input
                    type="number"
                    name="beds"
                    id="beds"
                    placeholder="Enter beds"
                    autoComplete="off"
                    onChange={(e) => setAddPropertyBeds(Number(e.target.value))}
                    value={addPropertyBeds}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="area" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter area
                  </label>
                  <input
                    type="number"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    autoComplete="off"
                    onChange={(e) => setAddPropertyArea(Number(e.target.value))}
                    value={addPropertyArea}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="rating" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    placeholder="Enter type"
                    autoComplete="off"
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value <= 5) {
                        setAddPropertyRating(value);
                      }
                    }}
                    value={addPropertyRating}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"} font-normal text-base outline-none placeholder:font-normal placeholder:text-base rounded-[10px] border`}
                  />
                </div>

                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="priceOneDAy" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter price one day
                  </label>
                  <input
                    type="number"
                    name="priceOneDAy"
                    id="priceOneDAy"
                    placeholder="Enter price one day"
                    autoComplete="off"
                    onChange={(e) => setAddPropertyPriceOneDay(Number(e.target.value))}
                    value={addPropertyPriceOneDay}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="titleImg" className={`p-3  ${isDarkMode ? "bg-transparent border-[#272B30] text-[#808191]" : "bg-[#FCFCFC] border-[#E4E4E4] text-[#808191] "} font-normal text-base outline-none rounded-[10px] border`}>
                    Enter title img
                  </label>
                  <input
                    type="file"
                    name="titleImg"
                    id="titleImg"
                    accept="image/*"
                    onChange={(event) => handleFileChange(event, 'titleImg')}
                    placeholder="Enter img url"
                    autoComplete="off"
                    className={`hidden p-3  ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"} font-normal text-base outline-none rounded-[10px] border`}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="heroImg" className={`p-3  ${isDarkMode ? "bg-transparent border-[#272B30] text-[#808191]" : "bg-[#FCFCFC] border-[#E4E4E4] text-[#808191] "} font-normal text-base outline-none rounded-[10px] border`}>
                    Enter hero img
                  </label>
                  <input
                    type="file"
                    name="heroImg"
                    id="heroImg"
                    accept="image/*"
                    onChange={(event) => handleFileChange(event, 'heroImg')}
                    placeholder="Hero img url"
                    autoComplete="off"
                    className={`hidden p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"} font-normal text-base outline-none rounded-[10px] border`}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="smallImg1" className={`p-3  ${isDarkMode ? "bg-transparent border-[#272B30] text-[#808191]" : "bg-[#FCFCFC] border-[#E4E4E4] text-[#808191] "} font-normal text-base outline-none rounded-[10px] border`}>
                    Enter 1-small img
                  </label>
                  <input
                    type="file"
                    name="smallImg1"
                    id="smallImg1"
                    accept="image/*"
                    onChange={(event) => handleFileChange(event, 'smallImg1')}
                    placeholder="Hero img url"
                    autoComplete="off"
                    className={`hidden p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"} font-normal text-base outline-none rounded-[10px] border`}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="smallImg2" className={`p-3  ${isDarkMode ? "bg-transparent border-[#272B30] text-[#808191]" : "bg-[#FCFCFC] border-[#E4E4E4] text-[#808191] "} font-normal text-base outline-none rounded-[10px] border`}>
                    Enter 2-small img
                  </label>
                  <input
                    type="file"
                    name="smallImg2"
                    id="smallImg2"
                    accept="image/*"
                    onChange={(event) => handleFileChange(event, 'smallImg2')}
                    placeholder="Hero img url"
                    autoComplete="off"
                    className={`hidden p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"} font-normal text-base outline-none rounded-[10px] border`}
                  />
                </div>
              </div>
              <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-medium text-[22px] mb-2 leading-[30px]`}>Facility</h2>
              <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5">
                <div className="flex items-center gap-2.5">
                  <label htmlFor="faciltyBes" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Beds</label>
                  <input type="checkbox" name="faciltyBes" id="faciltyBes"
                    checked={addPropertyFaciltyBeds}
                    onChange={(e) => setAddPropertyFaciltyBeds(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="faciltybath" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Bath</label>
                  <input type="checkbox" name="faciltybath" id="faciltybath"
                    checked={addPropertyFaciltyBaths}
                    onChange={(e) => setAddPropertyFaciltyBaths(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="faciltyarea" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Area</label>
                  <input type="checkbox" name="faciltyarea" id="faciltyarea"
                    checked={addPropertyFaciltyArea}
                    onChange={(e) => setAddPropertyFaciltyArea(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="faciltySmokingArea" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Smoking area</label>
                  <input type="checkbox" name="faciltySmokingArea" id="faciltySmokingArea"
                    checked={addPropertyFaciltySmookingArea}
                    onChange={(e) => setAddPropertyFaciltySmookingArea(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="facilityKitchen" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Kitchen</label>
                  <input type="checkbox" name="facilityKitchen" id="facilityKitchen"
                    checked={addPropertyFaciltyKitchen}
                    onChange={(e) => setAddPropertyFaciltyKitchen(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="facilityBalcony" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Balcony</label>
                  <input type="checkbox" name="facilityBalcony" id="facilityBalcony"
                    checked={addPropertyFaciltyBalcony}
                    onChange={(e) => setAddPropertyFaciltyBalcony(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="facilityWify" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Wify</label>
                  <input type="checkbox" name="facilityWify" id="facilityWify"
                    checked={addPropertyFaciltyWifi}
                    onChange={(e) => setAddPropertyFaciltyWifi(e.target.checked)} />
                </div>
                <div className="flex items-center gap-2.5">
                  <label htmlFor="facilityParkingArea" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>Parking area</label>
                  <input type="checkbox" name="facilityParkingArea" id="facilityParkingArea"
                    checked={addPropertyFaciltyParkingArea}
                    onChange={(e) => setAddPropertyFaciltyParkingArea(e.target.checked)} />
                </div>


              </div>
              <div className="w-full grid grid-cols-1 gap-y-2.5">
                <label htmlFor="description" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                  Enter description
                </label>
                <textarea
                  cols={30}
                  rows={5}
                  name="description"
                  id="description"
                  placeholder="Enter description"
                  autoComplete="off"
                  value={addPropertyDescription}
                  onChange={(e) => setAddPropertyDescription(e.target.value)}
                  className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                />
              </div>
              <div className="w-full  grid grid-cols-1 gap-y-2.5">
                <label htmlFor="LastnameName" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                  Enter lastname & name
                </label>
                <input
                  type="text"
                  name="LastnameName"
                  id="LastnameName"
                  placeholder="Enter Lastname & Name"
                  autoComplete="off"
                  value={addPropertySellerNameLastname}
                  onChange={(e) => setAddPropertySellerNameLastname(e.target.value)}
                  className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                />
              </div>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="location" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter seller location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter location"
                    autoComplete="off"
                    value={addPropertySellerSellerLocation}
                    onChange={(e) => setAddPropertySellerSellerLocation(e.target.value)}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-y-2.5">
                  <label htmlFor="location" className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `}>
                    Enter Properties
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter location"
                    autoComplete="off"
                    value={addPropertySellerProperties}
                    onChange={(e) => setAddPropertySellerProperties(Number(e.target.value))}
                    className={`p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  `}
                  />
                </div>
              </div>
              <button type="submit" className="bg-[#475BE8] cursor-pointer w-full rounded-[10px] font-semibold text-base text-[#FCFCFC] mb-5 py-2.5 px-[102px] md:px-[114px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${fromErrorModal ? "scale-100" : "scale-0"} z-50 transition-all duration-300 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} flex flex-col items-center justify-center p-4 w-[280px]  rounded-[10px]`}>
        <div className={`text-center text-sm mb-5 font-medium ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>
          There was an error while adding a property. Please try again later.
        </div>
        <div className="flex items-center gap-2.5 ">
          <button
            className="bg-[#475BE8] w-full rounded-[10px] text-sm font-semibold text-[#FCFCFC] py-2.5 px-[102px] md:px-[114px]"
            onClick={() => setfromErrorModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
