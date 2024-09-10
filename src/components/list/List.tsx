import React from 'react'
import UserInfo from '../UserInfo'
import ChatList from './chatList/ChatList'
interface ListProps {
  isDarkMode: boolean;
}
export default function List({isDarkMode}: ListProps) {
  return (
    <div className='flex-1 pt-[25px] pb-[15px] pr-5'>
      <UserInfo isDarkMode={isDarkMode}/>
      <ChatList isDarkMode={isDarkMode}/>
    </div>
  )
}
