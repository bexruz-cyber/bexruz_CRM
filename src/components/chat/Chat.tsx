import EmojiPicker from 'emoji-picker-react';
import { EmojiClickData } from 'emoji-picker-react';
import { DocumentData, arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import upload from '../../lib/upload';

interface MessageProps {
  isDarkMode: boolean;
}
interface imgState {
  file: File | null;
  url: string;
}

interface Message {
  senderId: string;
  text: string;
  createdAt: Date;
  img?: string;
}

export default function Chat({ isDarkMode }: MessageProps) {
  const [chat, setChat] = useState<DocumentData | undefined>();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState<imgState>({
    file: null,
    url: "",
  })
  const [chatUser, setChatUser] = useState<DocumentData | undefined>(undefined);


  const endRef = useRef<HTMLDivElement | null>(null);
  const { currentUser } = useUserStore();
  const { chatId, user } = useChatStore();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e: EmojiClickData): void => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text === "") return;

    let imgUrl = null

    try {
      if (img.file) {
        imgUrl = await upload(img.file)
      }


      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex((c: any) => c.chatId === chatId);

          if (chatIndex !== -1) {
            userChatsData.chats[chatIndex].lastMessage = text;
            userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
            userChatsData.chats[chatIndex].updatedAt = Date.now();
          }

          await updateDoc(userChatRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }

    setImg({
      file: null,
      url: "",
    })
    setText("")
  };


  useEffect(() => {
    console.log("Foydalanuvchi ID:", user.id); // Foydalanuvchi ID ni tekshiring
    const fetchChatUser = async () => {
      try {
        const chatRef = doc(db, "users", user.id);
        const chatSnapshot = await getDoc(chatRef);
        if (chatSnapshot.exists()) {
          setChatUser(chatSnapshot.data());
        } else {
          console.log("Foydalanuvchi ma'lumotlari topilmadi.");
        }
      } catch (err) {
        console.log("Xatolik:", err);
      }
    };
  
    fetchChatUser();
  }, [user.id]);
  
  return (
    <div className={`flex-[2] transition-all duration-300 flex flex-col pb-[15px] border-r border-l ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`}>
      <div className={`chatHeader border-b flex justify-between items-center w-full p-5 ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`}>
        <div className="flex items-center gap-[15px]">
          <div className="max-w-[46px] overflow-hidden rounded-full">
            <img src={chatUser?.avatarUrl || "./avatar.png"} alt="User Avatar" className="w-full object-cover" />
          </div>
          <div>
            <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base mb-0.5 line-clamp-1`} >
              {chatUser?.username || "Jane Doe"}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.6569 19 17 17.6569 17 16V15.4286L18.8375 16.7411C20.1613 17.6866 22 16.7404 22 15.1136V8.88638C22 7.25963 20.1613 6.31339 18.8375 7.25891L17 8.57143V8C17 6.34315 15.6569 5 14 5H5Z" fill="#6F767E" />
            </svg>
          </button>
          <button className="">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.18273 7.00943C0.0794046 4.79522 1.19265 2.35157 3.31397 1.07877C4.3353 0.465978 5.65528 0.731923 6.35963 1.6924L7.92229 3.82331C8.5874 4.73027 8.68934 5.93307 8.18636 6.93904L7.77663 7.75849C7.65802 7.99571 7.63927 8.27012 7.7606 8.50595C7.98164 8.93562 8.45236 9.69705 9.35915 10.6038C10.266 11.5106 11.0274 11.9814 11.4571 12.2024C11.6929 12.3237 11.9673 12.305 12.2045 12.1864L13.024 11.7766C14.0299 11.2737 15.2327 11.3756 16.1397 12.0407L18.2706 13.6034C19.2311 14.3077 19.497 15.6277 18.8842 16.649C17.6114 18.7704 15.1678 19.8836 12.9536 18.7803C11.0874 17.8504 8.70279 16.3114 6.17717 13.7858C3.65156 11.2602 2.11261 8.87556 1.18273 7.00943Z" fill="#6F767E" />
            </svg>
          </button>
          <button className=" text-[#6F767E]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-[15px] transition-all duration-300 p-5 bg-blend-overlay hover:overflow-y-auto overflow-hidden">
        {chat?.messages?.map((message: Message) => (
          <div className={`mb-2.5 flex flex-col ${message.senderId === currentUser.id ? 'self-end' : 'self-start'}`} key={message.createdAt.getTime()}
          >
            {message.img && (
              <div className='mb-[5px] w-full'>
                <img src={message.img} alt="img" className='w-full h-[300px] rounded-[10px] object-cover' />
              </div>
            )}
            <div className={`py-2.5 px-[15px] flex-col w-full ml-auto   rounded-t-[10px] rounded-${message.senderId === currentUser.id ? 'bl-[10px]' : 'br-[10px]'} border ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"}`}>
              <p className={`font-normal flex-col w-full ml-auto text-base leading-6 ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}`}>
                {message.text}
              </p>
            </div>

          </div>
        ))}
        {img.url &&
          (<div className="">
            <div className="">
              <img src={img.url} alt="img" className=' rounded-[10px]' />
            </div>
          </div>
          )}
        <div ref={endRef}></div>
      </div>
      <div className="flex items-center justify-between px-5">
        <div className={`flex items-center gap-2.5 justify-between p-2.5 w-full ${isDarkMode ? "bg-[#333333]" : "bg-[E4E4E4]"} rounded-md`}>
          <div className="flex items-center gap-2.5 ">
            <label htmlFor="file">
              <img src="./img.png" alt="img" className="max-w-[18px]" />
            </label>
            <input type="file" className='hidden' name='file' id='file' onChange={handleImg} />
            <img src="./camera.png" alt="camera" className="max-w-[18px]" />
            <img src="./mic.png" alt="micraphone" className="max-w-[18px]" />
          </div>
          <input type="text"
            className={`w-full bg-transparent outline-none font-normal py-1.5 text-base ${isDarkMode ? "placeholder:text-[#6F767E] text-[#EFEFEF] " : "placeholder:text-[#808191] text-[#11142D] "}`} placeholder="Write a message down here..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <div className="relative">
            <button className='max-w-[18px]' onClick={() => setOpen((prev) => !prev)}>
              <img src="./emoji.png" alt="emoji" className="w-full object-cover" />
            </button>
            <div className="z-50 absolute bottom-[50px] left-0">
              <EmojiPicker onEmojiClick={handleEmoji} open={open} />
            </div>
          </div>
        </div>
        <button onClick={handleSend} className={`p-[19px] ml-2.5 ${isDarkMode ? "bg-[#333333]" : "bg-[E4E4E4]"} rounded-md`}>
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
      </div>
    </div>
  )
}
