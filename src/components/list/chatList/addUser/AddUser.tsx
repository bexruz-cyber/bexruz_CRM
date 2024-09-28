import { collection, getDocs, query, where, setDoc, serverTimestamp, doc, arrayUnion, runTransaction } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

interface ChatListProps {
    isDarkMode: boolean;
}

interface User {
    id: string;
    username: string;
    avatarUrl?: string;
}

interface Chat {
    chatId: string;
    lastMessage: string;
    receiverId: string;
    updateAt: number;
}

export default function AddUser({ isDarkMode }: ChatListProps) {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState("");
    const { currentUser, isLoading } = useUserStore();

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data() as User;
                setUser({ ...userData, id: querySnapshot.docs[0].id });
            } else {
                console.log("User not found");
                setUser(null);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const handleAdd = async () => {
        if (!user || !currentUser) return;

        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");

        try {
            // Create a new chat document
            const newChatRef = doc(chatRef);
            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: []
            });

            // Update user chats using a transaction
            await runTransaction(db, async (transaction) => {
                const userChatDocRef = doc(userChatsRef, user.id);
                const currentUserChatDocRef = doc(userChatsRef, currentUser.id);

                const userChatDoc = await transaction.get(userChatDocRef);
                const currentUserChatDoc = await transaction.get(currentUserChatDocRef);

                const userChatUpdate = {
                    chats: arrayUnion({
                        chatId: newChatRef.id,
                        lastMessage: "",
                        receiverId: user.id,
                        updateAt: Date.now(),
                    } as Chat), // Use Chat type
                };

                const currentUserChatUpdate = {
                    chats: arrayUnion({
                        chatId: newChatRef.id,
                        lastMessage: "",
                        receiverId: user.id,
                        updateAt: Date.now(),
                    } as Chat), // Use Chat type
                };

                if (!userChatDoc.exists() || !userChatDoc.data()?.chats.some((chat: Chat) => chat.chatId === newChatRef.id)) {
                    transaction.update(userChatDocRef, userChatUpdate);
                }

                if (!currentUserChatDoc.exists() || !currentUserChatDoc.data()?.chats.some((chat: Chat) => chat.chatId === newChatRef.id)) {
                    transaction.update(currentUserChatDocRef, currentUserChatUpdate);
                }
            });
        } catch (err) {
            console.error("Error adding chat:", err);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className={`p-[30px] ${isDarkMode ? "bg-[#111315CC]" : "bg-[#FCFCFCCC]"} rounded-[10px] z-50 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}>
            <form onSubmit={handleSearch} className="search flex gap-5 mb-5">
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`p-5 rounded-[10px] border-[none] outline-none ${isDarkMode ? "bg-[#111315] text-[#6F767E] font-normal text-lg leading-[18px] placeholder:text-[#6F767E]" : "bg-[#F4F4F4] placeholder:text-[#66687B] text-[#66687B]"}`}
                />
                <button type="submit" className="p-5 rounded-[10px] bg-[#475BE8] font-normal leading-[18px] text-lg text-white">Search</button>
            </form>

            {user && (
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2.5">
                        <img src={user.avatarUrl || "./avatar.png"} alt="avatar" className="block max-w-[50px] rounded-[10px]" />
                        <span className={`${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"} font-medium text-sm`}>{user.username}</span>
                    </div>
                    <button onClick={handleAdd} className="p-2.5 rounded-[10px] bg-[#475BE8] font-normal leading-[18px] text-lg text-white">Add user</button>
                </div>
            )}
        </div>
    );
}
