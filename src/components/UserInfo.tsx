import { useUserStore } from "../lib/userStore";

interface UserInfoProps {
    isDarkMode: boolean;
}

export default function UserInfo({ isDarkMode }: UserInfoProps) {
    const { currentUser } = useUserStore(); 
  
    // Use the correct avatar URL property
    const avatarUrl = currentUser?.avatarUrl || "./avatar.png";
  
    return (
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="max-w-[50px] max-h-[50px] flex rounded-full overflow-hidden">
            <img 
              src={avatarUrl} 
              alt="avatar" 
              className="w-full h-full object-cover" 
              onError={(e) => { 
                // Set the default avatar image in case of an error
                (e.target as HTMLImageElement).src = "./avatar.png"; 
              }}
            />
          </div>
          <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base`}>
            {currentUser?.username || 'Unknown User'}
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-5 cursor-pointer"><img src="./more.png" alt="more options" className="w-full object-cover" /></div>
          <div className="w-5 cursor-pointer"><img src="./video.png" alt="video call" className="w-full object-cover" /></div>
          <div className="w-5 cursor-pointer"><img src="./edit.png" alt="edit" className="w-full object-cover" /></div>
        </div>
      </div>
    );
  }
  
