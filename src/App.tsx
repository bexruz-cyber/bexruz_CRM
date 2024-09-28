import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Header, Login, Sign, Dashboard, Property, Agent, Message, My_profile, Navbar, ProfileDashboard, PropertyDetail, AgentDetail, MessageChatDetail } from "./components";
import { useEffect, useState } from "react";
import { Propertydata } from "./DB/PropertyDB";

export default function App() {
  const location = useLocation(); // Pathname'ni kuzatib borish uchun
  const navigate = useNavigate(); // Yönlendirme uchun
  const [isLoading, setIsLoading] = useState<boolean>(true); // Yuklanish holati
  const [isLogin, setIsLogin] = useState<boolean>(false); // Kirish holati
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); // Modal oynaning ochilishi
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [editProfile, setEditProfile] = useState<boolean>(false); //
  const [modalsClose, setModalsClose] = useState(false)


  const propertydataFromLocalStorage = localStorage.getItem('Propertydata');


  useEffect(() => {
    if (!propertydataFromLocalStorage === true) {
      localStorage.setItem('Propertydata', JSON.stringify(Propertydata.PropertyListMain))
    }
  }, [isLogin, propertydataFromLocalStorage])

  useEffect(() => {
    try {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      const name = localStorage.getItem("name");
      const lastname = localStorage.getItem("lastname");

      if (location.pathname === "/login" || location.pathname === "/sign") {
        setIsLoading(false);
        return;
      }

      if (email && password && name && lastname) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
        navigate("/login");
      }
    } catch (error) {
      console.error('Autentifikatsiya tekshirishda xatolik', error);
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  }, [location.pathname, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }


  return (
    <div className={`max-w-[1540px] relative mx-auto pt-[70px] md:pl-[250px] ${modalsClose ? "h-screen  overflow-y-hidden" : "overflow-auto"}  ${editProfile ? "h-screen  overflow-y-hidden" : "overflow-auto"}  `}>
      <div className={`fixed left-0 top-0 h-full w-full z-[-1]  transition-all duration-300 ${isDarkMode ? "bg-[#111315]" : "bg-[#F4F4F4]"}`}></div>
      {isLogin && !["/login", "/sign"].includes(location.pathname) && (
        <>
          <Header isLoading={isLoading} setIsLoading={setIsLoading} setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setEditProfile={setEditProfile} editProfile={editProfile} />
          <Navbar setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} isDarkMode={isDarkMode} />
        </>
      )}
      <Routes>
        <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
        <Route path="/sign" element={<Sign isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/property" element={<Property isDarkMode={isDarkMode} modalsClose={modalsClose}  setModalsClose={setModalsClose} />} />
        <Route path="/propertyDetail/:id" element={<PropertyDetail isDarkMode={isDarkMode} />} />
        <Route path="/agent" element={<Agent isDarkMode={isDarkMode} />} />
        <Route path="/message" element={<Message isDarkMode={isDarkMode} />} />
        <Route path="/my_profile" element={<My_profile isDarkMode={isDarkMode} />} />
        <Route path="/profileDashboard" element={<ProfileDashboard isDarkMode={isDarkMode} />} />
        <Route path="/agentDetail/:id" element={<AgentDetail isDarkMode={isDarkMode} />} />
        <Route path="/messageChatDetail/:id" element={<MessageChatDetail isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
}
