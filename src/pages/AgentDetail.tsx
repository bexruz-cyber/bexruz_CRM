import { useNavigate, useParams } from "react-router-dom";
import { AgentData } from "../DB/AgentDB";
import agentBg from "../img/Agent/agentDetailbg.png"
import instagram from "../img/Agent/instagram.svg"
import { AgentPieChart, PropertyCard } from "../components/";
import { Propertydata } from "../DB/PropertyDB";

interface AgentDetailProps {
    isDarkMode: boolean;
}

export default function AgentDetail({ isDarkMode }: AgentDetailProps) {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const agent = AgentData.agentList.find(property => property.Id === id);

    // Redirect to "/property" if the property is not found
    if (!agent) {
        window.location.pathname = "/agent";
        return null; // Prevents rendering the rest of the component
    }

    return (
        <div className="pt-[15px] pb-[58px] px-[27px] sm:pt-7 sm:pl-[25px] sm:pb-9 sm:pr-5 relative">
            <button onClick={() => navigate("/agent")} className={`flex items-center gap-[25px] ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} mb-5 font-semibold md:font-bold text-lg md:text-2xl leading-6 md:leading-[34px]`}>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.79292 0.792893C8.18345 1.18342 8.18345 1.81658 7.79292 2.20711L2.00003 8L7.79292 13.7929C8.18345 14.1834 8.18345 14.8166 7.79292 15.2071C7.4024 15.5976 6.76923 15.5976 6.37871 15.2071L0.585817 9.41422C-0.195233 8.63317 -0.195231 7.36683 0.585817 6.58579L6.37871 0.792893C6.76923 0.402369 7.4024 0.402369 7.79292 0.792893Z" fill="currentColor" />
                </svg>
                Agent Details
            </button>
            <div className="flex items-center max-lg:flex-col gap-[30px] lg:overflow-x-auto mb-5">
                <div className={`${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#fcfcfc]"} px-[17px] overflow-hidden pb-5 relative pt-[102px] max-lg:w-full lg:min-w-[322px]  rounded-[10px]`}>
                    <div className="lg:max-w-[322px] rounded-[10px] overflow-hidden h-[140px] w-full absolute top-0 left-0">
                        <img src={agentBg} alt="agentbg" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-20">
                        <div className="mb-[30px]">
                            <div className="flex items-end gap-3">
                                <div className="max-w-[100px] w-full rounded-full overflow-hidden">
                                    <img src={agent.profileImage} alt="profile img" className="h-[100px] object-cover w-full " />
                                </div>
                                <div className="">
                                    <h2 className={`font-semibold text-base mb-1.5 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} `}>{agent.name} {agent.lastName}</h2>
                                    <p className={`font-normal text-sm  ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}`}>Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-[15px] mb-6">
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>Age:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.agentDetails.age}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>City:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.agentDetails.city}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>State:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.agentDetails.state}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>Country:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.agentDetails.country}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>Post Code:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.agentDetails.postCode}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>Agent ID:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.Id}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>Phone:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.phone}</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <h3 className={`min-w-[79px] font-normal text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} leading-5`}>Email:</h3>
                                <p className={`line-clamp-1 font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-[22px] `}>{agent.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-2.5">
                            {agent.facebook.length && (
                                <a href={agent.facebook} className={`${isDarkMode ? "bg-[#111315]" : "bg-[#f7f7f7]"} flex items-center w-[38px] h-9 justify-center rounded-full `}>
                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.77365 17.25L3.75 9.75H0.75V6.75H3.75V4.875C3.75 2.09145 5.47374 0.75 7.95686 0.75C9.1463 0.75 10.1686 0.838553 10.4665 0.878138V3.78711L8.74429 3.78789C7.39384 3.78789 7.13236 4.4296 7.13236 5.37128V6.75H11.0625L9.5625 9.75H7.13236V17.25H3.77365Z" fill="#1976D2" />
                                    </svg>
                                </a>
                            )}
                            {agent.twitter.length && (
                                <a href={agent.facebook} className={`${isDarkMode ? "bg-[#111315]" : "bg-[#f7f7f7]"} flex items-center w-[38px] h-9 justify-center rounded-full `}>
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2.4501C17.325 2.7501 16.65 2.9751 15.9 3.0501C16.65 2.6001 17.25 1.8501 17.55 1.0251C16.8 1.4751 16.05 1.7751 15.225 1.9251C14.55 1.1751 13.575 0.725098 12.525 0.725098C10.5 0.725098 8.85 2.3751 8.85 4.4001C8.85 4.7001 8.85 5.0001 8.925 5.2251C5.775 5.0751 3.075 3.5751 1.275 1.3251C0.9 1.9251 0.75 2.5251 0.75 3.2001C0.75 4.4751 1.425 5.6001 2.4 6.2751C1.8 6.2751 1.2 6.1251 0.75 5.8251C0.75 5.8251 0.75 5.8251 0.75 5.9001C0.75 7.7001 2.025 9.2001 3.675 9.5001C3.375 9.5751 3.075 9.6501 2.7 9.6501C2.475 9.6501 2.25 9.6501 2.025 9.5751C2.475 11.0751 3.825 12.1251 5.475 12.1251C4.2 13.1001 2.625 13.7001 0.9 13.7001C0.6 13.7001 0.3 13.7001 0 13.6251C1.65 14.6751 3.6 15.2751 5.625 15.2751C12.45 15.2751 16.125 9.6501 16.125 4.7751C16.125 4.6251 16.125 4.4751 16.125 4.3251C16.875 3.8001 17.475 3.1251 18 2.4501Z" fill="#55ACEE" />
                                    </svg>

                                </a>
                            )}
                            {agent.instagram.length && (
                                <a href={agent.facebook} className={`${isDarkMode ? "bg-[#111315]" : "bg-[#f7f7f7]"} flex items-center w-[38px] h-9 justify-center rounded-full `}>
                                    <img src={instagram} alt="" />

                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <div className={`${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#fcfcfc]"} min-w-[793px]  p-5 rounded-[10px]`}>
                        <h3 className={`${isDarkMode ? "text-[#EFEFEF] border-[#272B30]" : "text-[#11142D] border-[#E4E4E4]"} pb-4 border-b mb-5  font-semibold md:text-lg leading-6`}>Agent Details</h3>
                        <p className={`font-medium leading-5 text-base ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} mb-[30px]`}>{agent.agentDetails.agentDescription}</p>
                        <div className={`pb-[25px] grid grid-cols-1 gap-[11px] border-b mb-5 ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`}>
                            {agent.agentDetails.agency.length && (
                                <div className="flex items-center">
                                    <div className="flex items-center gap-[15px] min-w-[180px]">
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="17" height="17" rx="8.5" fill="#475BE8" />
                                            <path d="M12 6.5L7.10002 11.5L5 9.35713" stroke="#1A1D1F" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-5`}>Agency</h4>
                                    </div>
                                    <div className="ml-5 mr-[31px]">
                                        <svg width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.76 6.72V5.352H2.128V6.72H0.76ZM0.768 2.008V0.64H2.136V2.008H0.768Z" fill="#EFEFEF" />
                                        </svg>
                                    </div>
                                    <p className={`font-medium text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#11142D]"} leading-5`}>{agent.agentDetails.agency}</p>
                                </div>
                            )}
                            {agent.agentDetails.agentLicense.length && (
                                <div className="flex items-center">
                                    <div className="flex items-center gap-[15px] min-w-[180px]">
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="17" height="17" rx="8.5" fill="#475BE8" />
                                            <path d="M12 6.5L7.10002 11.5L5 9.35713" stroke="#1A1D1F" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-5`}>Agent License</h4>
                                    </div>
                                    <div className="ml-5 mr-[31px]">
                                        <svg width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.76 6.72V5.352H2.128V6.72H0.76ZM0.768 2.008V0.64H2.136V2.008H0.768Z" fill="#EFEFEF" />
                                        </svg>
                                    </div>
                                    <p className={`font-medium text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#11142D]"} leading-5`}>{agent.agentDetails.agentLicense}</p>
                                </div>
                            )}
                            {agent.agentDetails.taxNumber.length && (
                                <div className="flex items-center">
                                    <div className="flex items-center gap-[15px] min-w-[180px]">
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="17" height="17" rx="8.5" fill="#475BE8" />
                                            <path d="M12 6.5L7.10002 11.5L5 9.35713" stroke="#1A1D1F" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-5`}>Tax Number</h4>
                                    </div>
                                    <div className="ml-5 mr-[31px]">
                                        <svg width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.76 6.72V5.352H2.128V6.72H0.76ZM0.768 2.008V0.64H2.136V2.008H0.768Z" fill="#EFEFEF" />
                                        </svg>
                                    </div>
                                    <p className={`font-medium text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#11142D]"} leading-5`}>{agent.agentDetails.taxNumber}</p>
                                </div>
                            )}
                            {agent.agentDetails.serviceArea.length && (
                                <div className="flex items-center">
                                    <div className="flex items-center gap-[15px] min-w-[180px]">
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.5" width="17" height="17" rx="8.5" fill="#475BE8" />
                                            <path d="M12 6.5L7.10002 11.5L5 9.35713" stroke="#1A1D1F" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h4 className={`font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} leading-5`}>Service area</h4>
                                    </div>
                                    <div className="ml-5 mr-[31px]">
                                        <svg width="3" height="7" viewBox="0 0 3 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.76 6.72V5.352H2.128V6.72H0.76ZM0.768 2.008V0.64H2.136V2.008H0.768Z" fill="#EFEFEF" />
                                        </svg>
                                    </div>
                                    <p className={`font-medium text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#11142D]"} leading-5`}>{agent.agentDetails.serviceArea}</p>
                                </div>
                            )}
                        </div>
                        <h3 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} mb-5  font-semibold md:text-lg leading-6`}>Agent Status</h3>
                        <div className="grid grid-cols-3 gap-x-[25px]">
                            {agent.agentDetails.agentStatus.map(status => (
                                <AgentPieChart
                                    key={status.id}
                                    isDarkMode={isDarkMode}
                                    title={status.title}
                                    value={status.number}
                                    series={status.part}
                                    colors={status.colors}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className={`${isDarkMode ? "bg-[#1A1D1F] " : "bg-[#fcfcfc] "}  max-xl:max-w-[793px] w-full px-5 py-5 pb-[30px] rounded-[10px]`}>
                    <div className="flex items-center justify-between gap-5 mb-5">
                        <h3 className={`${isDarkMode ? "text-[#EFEFEF] border-[#272B30]" : "text-[#11142D] border-[#E4E4E4]"}   font-semibold md:text-lg leading-6`}>Agent Details</h3>
                        <button onClick={() => navigate("/property")} className={`py-[9px] px-[15px] ${isDarkMode ? "border-[#272B30] text-[#6F767E]" : "border-[#E4E4E4] text-[#808191]"} border leading-5  font-semibold text-sm rounded-lg`}>View All</button>
                    </div>
                    <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-x-[69px] gap-y-5 ">
                        {
                            Propertydata.PropertyListMain.slice(0, 4).map(property => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    isDarkMode={isDarkMode}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
