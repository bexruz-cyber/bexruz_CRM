import { useEffect } from 'react';
import { Chat,  List, LoginChat, Notificationin } from '../components';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useUserStore } from '../lib/userStore';
import { useChatStore } from '../lib/chatStore';

interface MessageProps {
  isDarkMode: boolean;
}

export default function Message({ isDarkMode }: MessageProps) {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore(); // `useUserStore` ni chaqirish kerak
  const { chatId } = useChatStore(); // `useUserStore` ni chaqirish kerak

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        fetchUserInfo(user?.uid); // Foydalanuvchi ma'lumotlarini olish uchun chaqirish
      } else {
        fetchUserInfo(null); // Foydalanuvchi ma'lumotlarini tozalash
      }
    });
    return () => {
      unSub(); // Tozalash
    };
  }, [fetchUserInfo]); // `fetchUserInfo` ni dependency arrayda qo'shish
   
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pt-7 pl-[20px] pr-[25px] pb-[22px] h-full">
      <div className={`${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"} relative pl-5 flex min-h-[865px] rounded-[15px] max-h-[865px] h-full`}>
        {currentUser ? (
          <>
            <List isDarkMode={isDarkMode} />
            {chatId && <Chat isDarkMode={isDarkMode} />}
          </>
        ) : (
          <LoginChat isDarkMode={isDarkMode} />
        )}
        <Notificationin />
      </div>
    </div>
  );
}
