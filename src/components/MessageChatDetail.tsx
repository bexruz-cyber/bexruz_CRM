import phone from "../img/message/phone.svg";
import filled from "../img/message/filled.svg";
import menu from "../img/message/menu.svg";
import { MessageMiniCard } from "../components/";
import { MessageData } from "../DB/MessageDB";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


interface MessageChatDetailProps {
    isDarkMode: boolean;
}

// Interface for a message object
interface Message {
    text: string;
    img: Record<string, string>; // Key-value pairs where key is a string and value is the image URL
  }
  
  // Interface for a single message entry
  interface MessageEntry {
    role: string;
    profileImg?: string; // Optional if the role is "you"
    message: Message;
    time: string;
    Id: string;
  }
  
  // Interface for the main data structure
  interface Chat {
    Id: string;
    profileImg: string;
    name: string;
    lastName: string;
    lastNews: string;
    recentActivity: string;
    messages: MessageEntry[];
  }
  




export default function MessageChatDetail({ isDarkMode }: MessageChatDetailProps) {
    const { id } = useParams<{ id: string }>();
    const MessagelocalStorageData: Chat[] = JSON.parse(localStorage.getItem('Messages') ?? '[]');
    const [messageText, setMessageText] = useState<string>("")
    const [messageImg, setMessageImg] = useState<string>("")
    const [messageTime, setMessageTime] = useState<string>("")
    const [messageError, setMessageError] = useState(false)

    const chat = MessagelocalStorageData && MessagelocalStorageData.find((property) => property.Id === id);
    
    // Redirect to "/message" if the property is not found
    if (!chat) {
        // window.location.pathname = "/message";
        return null; // Prevents rendering the rest of the component
    }
    


    console.log(chat);

    const addpropertyhandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!messageText) {
            setMessageError(true)
            return;
        }


        const newProperty = {
            role: "you",
            profileImg: chat.profileImg,

            message: {
                text: messageText,
                img: { messageImg },
            },
            time: messageTime,
            Id: uuidv4(),
        }

        // Reset the state values
        const newArr = chat.messages.unshift(newProperty)
        localStorage.setItem('Messages', JSON.stringify(newArr));
    }
    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setImageState: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    const img = new Image();
                    img.src = reader.result as string;

                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');

                        if (ctx) {
                            // Resize the image
                            const maxWidth = 800; // Set your desired max width
                            const maxHeight = 600; // Set your desired max height
                            let width = img.width;
                            let height = img.height;

                            if (width > height) {
                                if (width > maxWidth) {
                                    height *= maxWidth / width;
                                    width = maxWidth;
                                }
                            } else {
                                if (height > maxHeight) {
                                    width *= maxHeight / height;
                                    height = maxHeight;
                                }
                            }

                            canvas.width = width;
                            canvas.height = height;

                            // Draw the image on the canvas
                            ctx.drawImage(img, 0, 0, width, height);

                            // Convert the canvas to a base64 string with reduced quality
                            const quality = 0.7; // Set quality between 0 and 1
                            const compressedImage = canvas.toDataURL('image/jpeg', quality);

                            setImageState(compressedImage); // Update the state with compressed image
                        }
                    };
                }
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <>
            <div className="static pt-7 pl-[20px] pr-[25px] pb-[22px]">
                <h1 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} mb-5 font-semibold md:font-bold text-lg md:text-2xl leading-6 md:leading-[34px]`} >  Messages
                </h1>
                <div className={`static ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} flex  rounded-[15px] h-full max-h-[865px]`}>
                    <div className="static overflow-y-auto min-w-[407px]">
                        <div
                            className={`max-h-[865px] border-r pt-[25px] pl-5 pr-10 pb-[15px] ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"
                                }`}
                        >
                            <div
                                className={`flex items-center gap-2 py-[18px] px-[15px] border rounded-md overflow-hidden ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"
                                    }`}
                            >
                                <button className="max-w-[18px]">
                                    {/* SVG kod */}
                                </button>
                                <input
                                    type="search"
                                    className={`w-full bg-transparent outline-none leading-[18px] font-medium text-sm ${isDarkMode
                                        ? "placeholder:text-[#6F767E] text-[#6F767E]"
                                        : "placeholder:text-[#808191]"
                                        }`}
                                    placeholder="Search"
                                />
                            </div>
                            <div>
                                {MessageData.map((message) => (
                                    <MessageMiniCard
                                        key={message.Id}
                                        Id={message.Id}
                                        profileImg={message.profileImg}
                                        name={message.name}
                                        lastName={message.lastName}
                                        lastNews={message.lastNews}
                                        recentActivity={message.recentActivity}
                                        isDarkMode={isDarkMode}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {chat.messages.length ? (
                        <div className={`w-full px-5 relative   overflow-y-auto pb-[25px]`}>
                            <div className="max-h-[865px]">
                                <div className={`sticky top-0  ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"}  z-50 flex justify-between items-center w-full pt-[25px] pb-2.5`}>
                                    <div className="flex items-center gap-[15px]">
                                        <img
                                            src={chat.profileImg}
                                            alt={chat.profileImg}
                                            className="max-w-[46px]"
                                        />
                                        <div className="">
                                            <h2
                                                className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"
                                                    } font-semibold text-base mb-0.5 line-clamp-1`}
                                            >
                                                {chat.name} {chat.lastName}
                                            </h2>
                                            <p
                                                className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"
                                                    } font-normal text-sm line-clamp-1`}
                                            >
                                                Active Now
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <button className="">
                                            <img src={phone} alt={phone} />
                                        </button>
                                        <button className="">
                                            <img src={filled} alt={filled} />
                                        </button>
                                        <button className="ml-[15px]">
                                            <img src={menu} alt={menu} />
                                        </button>
                                    </div>
                                </div>
                                {/* Chat Messages */}
                                <div className="pt-5 mb-[50px]">
                                    {chat.messages.map((msg) => (
                                        <div
                                            key={msg.Id}
                                            className={`flex ${msg.role === "you" ? "justify-start" : "justify-end"
                                                } my-[15px]`}
                                        >
                                            {msg.role === "you" ? (
                                                <div>
                                                    <div className="flex items-center mb-2.5">
                                                        <div className="max-w-[46px] mr-[15px]">
                                                            <img src={chat.profileImg} alt={chat.profileImg} className="w-full object-cover" />
                                                        </div>
                                                        <div className={`py-2.5 px-[15px] mr-2 max-w-[340px] rounded-t-[10px] rounded-br-[10px] border ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`}>
                                                            <p className={`font-normal text-base leading-6 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>{msg.message.text}</p>
                                                        </div>
                                                        <button className="">
                                                            <img src={menu} alt="menu" />
                                                        </button>
                                                    </div>
                                                    <p className={`ml-[61px] font-normal text-xs ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}`}>{msg.time}</p>
                                                </div>
                                            ) : ""}
                                            {msg.role === "me" ? (
                                                <div>
                                                    <div className="flex items-center mb-2.5">
                                                        <div className={`py-2.5 px-[15px] mr-2 max-w-[340px] rounded-t-[10px] rounded-br-[10px] border ${msg.message.img?.img1 && "border-transparent"} ${!msg.message.img?.img1 && `${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`} `}>
                                                            <p className={`font-normal text-base leading-6 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>{msg.message.text}</p>
                                                            <div className="flex items-center flex-row-reverse gap-5">
                                                                {msg.message.img?.img1 && (
                                                                    <img src={msg.message.img.img1} alt="Attached" className="mt-2" />
                                                                )}
                                                                {msg.message.img?.img2 && (
                                                                    <img src={msg.message.img.img2} alt="Attached" className="mt-2" />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <button className="">
                                                            <img src={menu} alt="menu" />
                                                        </button>
                                                    </div>
                                                    <p className={`ml-[61px] font-normal text-xs ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}`}>{msg.time}</p>
                                                </div>
                                            ) : ""}
                                        </div>
                                    ))}
                                </div>
                                {/* malumot qoshadigan joy */}
                                <div className="sticky   mx-auto bottom-0  max-w-[697px] w-full">
                                    <form onSubmit={addpropertyhandler} className="flex items-center gap-2.5">
                                        <div className={`max-w-[631px] w-full flex items-center gap-2.5 border ${isDarkMode ? "border-[#272B30] bg-[#333333]" : "bg-[#F2F2F2] border-[#E4E4E4]"} p-2.5 rounded-md`}>
                                            <div className="max-w-9">
                                                <img src={chat.profileImg} alt={chat.profileImg} className="w-full object-cover" />
                                            </div>
                                            <input type="text" className={`w-full bg-transparent outline-none font-normal text-base ${isDarkMode ? "placeholder:text-[#6F767E] text-[#EFEFEF] " : "placeholder:text-[#808191] text-[#11142D] "}`} placeholder="Write a message down here..."
                                                onChange={(e) => setMessageText(e.target.value)}
                                            />
                                            <label htmlFor="file">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_371_10631)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.58145 2.06301C10.4302 1.2433 11.5669 0.789722 12.7468 0.799975C13.9266 0.810228 15.0553 1.28349 15.8896 2.11782C16.724 2.95216 17.1972 4.08082 17.2075 5.2607C17.2177 6.44059 16.7642 7.5773 15.9445 8.42601L15.9353 8.4353L13.6854 10.6852C13.2292 11.1416 12.6802 11.4945 12.0756 11.72C11.471 11.9455 10.825 12.0384 10.1814 11.9923C9.53777 11.9462 8.91158 11.7622 8.34531 11.4529C7.77903 11.1435 7.28592 10.7159 6.89941 10.1992C6.65131 9.86752 6.71906 9.39751 7.05075 9.1494C7.38244 8.9013 7.85245 8.96905 8.10056 9.30074C8.35823 9.64522 8.68697 9.93025 9.06449 10.1365C9.442 10.3428 9.85946 10.4654 10.2885 10.4961C10.7176 10.5269 11.1483 10.465 11.5514 10.3146C11.9544 10.1643 12.3204 9.92898 12.6246 9.62474L12.6247 9.62464L14.8698 7.37951C15.4136 6.81418 15.7144 6.05828 15.7075 5.27374C15.7007 4.48715 15.3852 3.73471 14.829 3.17848C14.2727 2.62226 13.5203 2.30675 12.7337 2.29992C11.9488 2.2931 11.1926 2.59415 10.6272 3.13838L9.34127 4.41685C9.04752 4.70889 8.57265 4.7075 8.28061 4.41376C7.98857 4.12001 7.98996 3.64514 8.2837 3.3531L9.5737 2.0706L9.58145 2.06301Z" fill="#6F767E" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.92439 6.27989C6.52897 6.05436 7.17499 5.9615 7.81862 6.00759C8.46224 6.05369 9.08843 6.23766 9.65471 6.54704C10.221 6.85643 10.7141 7.28398 11.1006 7.80069C11.3487 8.13238 11.2809 8.60239 10.9493 8.8505C10.6176 9.0986 10.1476 9.03085 9.89945 8.69916C9.64178 8.35468 9.31304 8.06965 8.93552 7.86339C8.55801 7.65714 8.14055 7.53449 7.71146 7.50376C7.28238 7.47303 6.8517 7.53494 6.44865 7.68529C6.04559 7.83564 5.67959 8.07092 5.37545 8.37516L3.13022 10.6204C2.58644 11.1857 2.28565 11.9416 2.29247 12.7262C2.29931 13.5128 2.61481 14.2652 3.17104 14.8214C3.72726 15.3776 4.4797 15.6931 5.26629 15.7C6.05082 15.7068 6.80672 15.406 7.37205 14.8622L8.6497 13.5846C8.94259 13.2917 9.41746 13.2917 9.71036 13.5846C10.0033 13.8775 10.0033 14.3524 9.71036 14.6453L8.42786 15.9278L8.41856 15.9369C7.56985 16.7566 6.43314 17.2102 5.25326 17.1999C4.07337 17.1897 2.94471 16.7164 2.11038 15.8821C1.27604 15.0477 0.802781 13.9191 0.792529 12.7392C0.782276 11.5593 1.23585 10.4226 2.05556 9.57389L2.0647 9.56459L4.3146 7.31469C4.31457 7.31472 4.31463 7.31466 4.3146 7.31469C4.77078 6.85837 5.31985 6.5054 5.92439 6.27989Z" fill="#6F767E" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_371_10631">
                                                            <rect width="18" height="18" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleFileChange(e, setMessageImg)}
                                                className="hidden" id="file" />
                                        </div>
                                        <button type="submit" className={`p-[19px] ${isDarkMode ? "bg-[#333333]" : "bg-[E4E4E4]"} rounded-md`}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_371_10633)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0303 0.96967C17.3232 1.26256 17.3232 1.73744 17.0303 2.03033L8.78033 10.2803C8.48744 10.5732 8.01256 10.5732 7.71967 10.2803C7.42678 9.98744 7.42678 9.51256 7.71967 9.21967L15.9697 0.96967C16.2626 0.676777 16.7374 0.676777 17.0303 0.96967Z" fill="#475BE8" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.914389 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM3.53331 6.83297L8.55461 9.06466C8.72428 9.14007 8.85995 9.27574 8.93536 9.44542L11.167 14.4667L15.2775 2.7225L3.53331 6.83297Z" fill="#475BE8" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_371_10633">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-y-auto w-full h-full flex flex-col">
                            <div className="max-h-[865px]  w-full px-5">
                                <div className="flex justify-between items-center w-full pt-[25px]">
                                    <div className="flex items-center gap-[15px]">
                                        <img
                                            src={chat.profileImg}
                                            alt={chat.profileImg}
                                            className="max-w-[46px]"
                                        />
                                        <div className="">
                                            <h2
                                                className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"
                                                    } font-semibold text-base mb-0.5 line-clamp-1`}
                                            >
                                                {chat.name} {chat.lastName}
                                            </h2>
                                            <p
                                                className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"
                                                    } font-normal text-sm line-clamp-1`}
                                            >
                                                Active Now
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <button className="">
                                            <img src={phone} alt={phone} />
                                        </button>
                                        <button className="">
                                            <img src={filled} alt={filled} />
                                        </button>
                                        <button className="ml-[15px]">
                                            <img src={menu} alt={menu} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center self-center content-center justify-center pt-[40%] w-full h-full">
                                <h1
                                    className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"
                                        } font-normal text-sm line-clamp-1`}
                                >
                                    No Messages
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
