import { Link } from 'react-router-dom';


interface NavbarProps {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isDarkMode: boolean;
}

export default function Navbar({modalIsOpen , setModalIsOpen , isDarkMode}:NavbarProps) {
    const currentPath:string = document.location.pathname;


    const linkClasses = (...paths: string[]): string => {
        return paths.includes(currentPath)
            ? 'flex items-center gap-x-2.5 rounded-xl bg-[#475BE8] py-4 px-6 text-[#FCFCFC]'
            : `${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"} flex items-center gap-x-2.5 rounded-xl py-4 px-6`;
    };
    
    

    const modalClose = () => {
        setModalIsOpen(!modalIsOpen)
    }



    return (
        <>
        <div className={`md:max-w-[250px] ${isDarkMode ? "bg-[#1A1D1F]" : "bg-[#FCFCFC]"}  z-30 px-4 py-[25px] w-full h-full fixed left-0 transition-all duration-300 ${modalIsOpen ? "left-0": "max-md:-left-full"}`}>
            <ul>
                <li>
                    <Link onClick={modalClose} to="/" className={linkClasses('/')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 5H6C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8V6C9 5.44772 8.55228 5 8 5ZM6 3C4.34315 3 3 4.34315 3 6V8C3 9.65685 4.34315 11 6 11H8C9.65685 11 11 9.65685 11 8V6C11 4.34315 9.65685 3 8 3H6Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 15H6C5.44772 15 5 15.4477 5 16V18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 18.5523 9 18V16C9 15.4477 8.55228 15 8 15ZM6 13C4.34315 13 3 14.3431 3 16V18C3 19.6569 4.34315 21 6 21H8C9.65685 21 11 19.6569 11 18V16C11 14.3431 9.65685 13 8 13H6Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 5H16C15.4477 5 15 5.44772 15 6V8C15 8.55228 15.4477 9 16 9H18C18.5523 9 19 8.55228 19 8V6C19 5.44772 18.5523 5 18 5ZM16 3C14.3431 3 13 4.34315 13 6V8C13 9.65685 14.3431 11 16 11H18C19.6569 11 21 9.65685 21 8V6C21 4.34315 19.6569 3 18 3H16Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 15H16C15.4477 15 15 15.4477 15 16V18C15 18.5523 15.4477 19 16 19H18C18.5523 19 19 18.5523 19 18V16C19 15.4477 18.5523 15 18 15ZM16 13C14.3431 13 13 14.3431 13 16V18C13 19.6569 14.3431 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 14.3431 19.6569 13 18 13H16Z" fill="currentColor" />
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link onClick={modalClose} to="/property" className={linkClasses('/property')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.7575 4.87216L6.75746 6.37216C6.3123 6.48345 6 6.88343 6 7.3423V20H14V9.99997V7.99997V5.8423C14 5.19173 13.3886 4.71437 12.7575 4.87216ZM16 9.99997V20H18V11C18 10.4477 17.5523 9.99997 17 9.99997H16ZM20 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H20V11C20 9.34312 18.6569 7.99997 17 7.99997H16V5.8423C16 3.89059 14.1658 2.45851 12.2724 2.93187L6.27239 4.43187C4.93689 4.76575 4 5.9657 4 7.3423V20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H4H6H14H16H18H20Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 17C8 16.4477 8.44772 16 9 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H9C8.44772 18 8 17.5523 8 17Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 13C8 12.4477 8.44772 12 9 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H9C8.44772 14 8 13.5523 8 13Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 9C8 8.44772 8.44772 8 9 8H11C11.5523 8 12 8.44772 12 9C12 9.55228 11.5523 10 11 10H9C8.44772 10 8 9.55228 8 9Z" fill="currentColor" />
                        </svg>
                        Property
                    </Link>
                </li>
                <li>
                    <Link onClick={modalClose} to="/agent" className={linkClasses('/agent', '/agentDetail')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4997 10.9689C16.473 10.723 18 9.03977 18 6.99985C18 4.95994 16.473 3.27667 14.4997 3.03076C15.4334 4.08851 16 5.47801 16 6.99985C16 8.52169 15.4334 9.9112 14.4997 10.9689Z" fill="currentColor" />
                            <path d="M20 19.9998C20 20.5521 20.4477 20.9998 21 20.9998C21.5523 20.9998 22 20.5521 22 19.9998V17.9998C22 15.3397 19.9227 13.1648 17.3018 13.0088C18.3539 13.9405 19.1587 15.1452 19.6055 16.5118C19.8565 16.9504 20 17.4583 20 17.9998V19.9998Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 15C5.34315 15 4 16.3431 4 18V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V18C2 15.2386 4.23858 13 7 13H13C15.7614 13 18 15.2386 18 18V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V18C16 16.3431 14.6569 15 13 15H7Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7Z" fill="currentColor" />
                        </svg>
                        Agent
                    </Link>
                </li>
                <li>
                    <Link onClick={modalClose} to="/message" className={linkClasses('/message')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.9455 7.22016L12 4.5L11.0545 7.22016C10.5052 8.80044 9.03042 9.87192 7.35774 9.90601L4.47853 9.96468L6.77337 11.7045C8.10656 12.7153 8.66987 14.449 8.18541 16.0503L7.35149 18.8067L9.7153 17.1618C11.0886 16.2062 12.9115 16.2062 14.2847 17.1618L16.6486 18.8067L15.8146 16.0503C15.3302 14.449 15.8935 12.7153 17.2267 11.7045L19.5215 9.96468L16.6423 9.90601C14.9696 9.87192 13.4949 8.80044 12.9455 7.22016ZM13.8891 3.84334C13.2666 2.05222 10.7335 2.05222 10.1109 3.84334L9.16537 6.5635C8.89071 7.35364 8.15333 7.88938 7.31699 7.90642L4.43778 7.9651C2.54193 8.00373 1.75917 10.4128 3.27024 11.5584L5.56508 13.2983C6.23167 13.8036 6.51333 14.6705 6.2711 15.4712L5.43717 18.2276C4.88807 20.0426 6.93736 21.5315 8.49385 20.4484L10.8577 18.8035C11.5443 18.3257 12.4557 18.3257 13.1424 18.8035L15.5062 20.4484C17.0627 21.5315 19.112 20.0426 18.5629 18.2276L17.7289 15.4712C17.4867 14.6705 17.7684 13.8036 18.435 13.2983L20.7298 11.5584C22.2409 10.4128 21.4581 8.00373 19.5623 7.9651L16.6831 7.90642C15.8467 7.88938 15.1093 7.35364 14.8347 6.5635L13.8891 3.84334Z" fill="currentColor" />
                        </svg>
                        Message
                    </Link>
                </li>
                <li>
                    <Link onClick={modalClose} to="/my_profile" className={linkClasses('/my_profile')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33284 17.7154 5.44116 19.5488C7.19693 21.0756 9.49052 22 12 22C14.4162 22 16.6323 21.143 18.3609 19.7165C18.4276 19.6614 18.4936 19.6055 18.5588 19.5488ZM12.2579 19.9959C12.1723 19.9986 12.0863 20 12 20C11.9914 20 11.9827 20 11.9741 20C11.8937 19.9997 11.8135 19.9983 11.7337 19.9956C10.3914 19.9517 9.13273 19.5772 8.03655 18.9508C8.95181 17.7632 10.3882 17 12 17C13.6118 17 15.0482 17.7632 15.9634 18.9508C14.865 19.5785 13.6033 19.9533 12.2579 19.9959ZM17.5624 17.7498C16.2832 16.0781 14.2675 15 12 15C9.73249 15 7.7168 16.0781 6.43759 17.7498C4.93447 16.2953 4 14.2568 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2568 19.0655 16.2953 17.5624 17.7498Z" fill="currentColor" />
                        </svg>
                        My Profile
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}
