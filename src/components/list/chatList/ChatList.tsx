import { useEffect, useState } from "react";
import { DocumentData, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";
import AddUser from "./addUser/AddUser";
import { useChatStore } from "../../../lib/chatStore";

interface ChatListProps {
    isDarkMode: boolean;
}

interface ChatItem extends DocumentData {
    receiverId: string;
    updatedAt: number;
    user?: DocumentData; // Yangi qo'shgan user maydoni
    username: string;
}

export default function ChatList({ isDarkMode }: ChatListProps) {
    const [chats, setChats] = useState<ChatItem[]>([]); // ChatItem turi
    const [addMode, setAddMode] = useState(false);

    const { currentUser } = useUserStore();
    const { chatId, changeChat } = useChatStore();

    useEffect(() => {
        const fetchChats = async () => {
            const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
                const data = res.data();

                if (data && data.chats) {
                    const items: ChatItem[] = data.chats;

                    const promises = items.map(async (item) => {
                        const userDocRef = doc(db, "users", item.receiverId);
                        const userDocSnap = await getDoc(userDocRef);
                        const user = userDocSnap.data();

                        return { ...item, user };
                    });

                    const chatData = await Promise.all(promises);
                    setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
                }
            });

            return () => {
                unSub(); // Komponent unmount bo'lganda listenerni tozalash
            };
        };

        fetchChats(); // Async funksiyani chaqirish

    }, [currentUser]);

    const handleSelect = async (chat: ChatItem) => {
        const userChats = chats.map(item => {
            const { user, ...rest } = item;
            return rest;
        })

        const chatIndex = userChats.findIndex(item => item.chatId === chat.chatId);
        userChats[chatIndex].iSeen = true

        const userChatsRef = doc(db, "userchats", currentUser.id)
        try {
            await updateDoc(userChatsRef, {
                chats: userChats
            })
            changeChat(chat.chatId, chat.user);
        } catch (err) {
            console.log(err);

        }
    };

    return (
        <div className="hover:overflow-y-auto overflow-hidden">
            <div className={`bg-transparent border rounded-md ${isDarkMode ? "border-[#272B30]" : "border-[#E4E4E4]"} py-[18px] px-[15px] flex items-center gap-5 mb-5`}>
                <div className="flex items-center gap-5 flex-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM12.75 7.875C12.75 10.5674 10.5674 12.75 7.875 12.75V14.25C11.3958 14.25 14.25 11.3958 14.25 7.875H12.75ZM7.875 12.75C5.18261 12.75 3 10.5674 3 7.875H1.5C1.5 11.3958 4.35418 14.25 7.875 14.25V12.75ZM3 7.875C3 5.18261 5.18261 3 7.875 3V1.5C4.35418 1.5 1.5 4.35418 1.5 7.875H3ZM7.875 3C10.5674 3 12.75 5.18261 12.75 7.875H14.25C14.25 4.35418 11.3958 1.5 7.875 1.5V3ZM15.5303 14.4697L12.3896 11.329L11.329 12.3896L14.4697 15.5303L15.5303 14.4697Z" fill="#6F767E" />
                    </svg>
                    <input type="text" placeholder="Search" className={`bg-transparent outline-none ${isDarkMode ? " text-[#6F767E] font-normal text-lg leading-[18px] placeholder:text-[#6F767E]" : "placeholder:text-[#66687B] text-[#66687B]"}`} />
                </div>
                <button onClick={() => setAddMode((prev) => !prev)} className="flex text-[#6F767E] ">
                    {addMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    )}
                </button>
            </div>
            {chats.map(chat => (
                <div className={`cursor-pointer rounded-[10px] flex items-center py-3 px-[15px]`} key={chat.chatId} onClick={() => handleSelect(chat)}>
                    <div className="max-w-[46px] rounded-full overflow-hidden">
                        <img src={chat.user?.avatarUrl || "./avatar.png"} alt="avatar" className="w-full" />
                    </div>
                    <div className="max-w-[174px] w-full ml-[17px] mr-1">
                        <h2 className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-semibold text-base mb-[5px] line-clamp-1`}>{chat.user?.username}</h2>
                        <p className={`${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} font-normal text-sm line-clamp-1`}>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
            {addMode && <AddUser isDarkMode={isDarkMode} />}
        </div>
    )
}
