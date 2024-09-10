import { useNavigate } from "react-router-dom";

interface MessageMiniCardProps {
    Id:string,
    profileImg: string;
    name: string;
    lastName: string;
    lastNews: string;
    recentActivity: string;
    isDarkMode: boolean;
}

export default function MessageMiniCard({ Id, profileImg, name, lastName, lastNews, recentActivity, isDarkMode }: MessageMiniCardProps) {
    const navigate = useNavigate()
    return (
        <div onClick={() =>navigate(`/messageChatDetail/${Id}`)} className="flex items-center py-3 px-[15px]">
            <div className="max-w-[46px] rounded-full overflow-hidden">
                <img src={profileImg} alt={profileImg} className="w-full" />
            </div>
            <div className="max-w-[174px] w-full ml-[17px] mr-1">
                <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base mb-[5px] line-clamp-1`}>{name} {lastName}</h2>
                <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} font-normal text-sm line-clamp-1`}>{lastNews}</p>
            </div>
            <p className={`max-w-[76px] w-full self-start text-right font-medium text-sm ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} `}>{recentActivity}</p>
        </div>
    );
}
