import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Header, Login, Sign, Dashboard, Property, Agent, My_profile, Navbar, ProfileDashboard, PropertyDetail, AgentDetail } from "./components";
import { useEffect, useState } from "react";
import { Propertydata } from "./DB/PropertyDB";

export default function App() {
  const location = useLocation(); // Hozirgi sahifani kuzatib borish uchun
  const navigate = useNavigate(); // Sahifani yo'naltirish uchun
  const [isLoading, setIsLoading] = useState<boolean>(true); // Yuklanish holati
  const [isLogin, setIsLogin] = useState<boolean>(false); // Foydalanuvchi kirganligini tekshirish
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); // Modal oynasini ochish yoki yopish
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Tungi yoki kunduzgi rejim
  const [editProfile, setEditProfile] = useState<boolean>(false); // Profilni tahrirlash rejimi
  const [modalsClose, setModalsClose] = useState(false); // Modallarning yopilish holati

  const propertydataFromLocalStorage = localStorage.getItem('Propertydata'); // LocalStorage'dan ma'lumot olish

  // LocalStorage'da ma'lumot bo'lmasa, dastlabki ma'lumotlarni saqlash
  useEffect(() => {
    if (!propertydataFromLocalStorage === true) {
      localStorage.setItem('Propertydata', JSON.stringify(Propertydata.PropertyListMain));
    }
  }, [isLogin, propertydataFromLocalStorage]);

  // Foydalanuvchini avtomatik tekshirish va login qilish
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
        setIsLogin(true); // Foydalanuvchi tizimga kirganligini ko'rsatadi
      } else {
        setIsLogin(false);
        navigate("/login"); // Agar login qilmagan bo'lsa, login sahifasiga yo'naltirish
      }
    } catch (error) {
      console.error('Autentifikatsiya tekshirishda xatolik', error);
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  }, [location.pathname, navigate]);

  // Agar yuklanish jarayoni tugamagan bo'lsa, yuklanish animatsiyasini ko'rsatish
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`max-w-[1540px] relative mx-auto pt-[70px] md:pl-[250px] ${modalsClose ? "h-screen overflow-y-hidden" : "overflow-auto"} ${editProfile ? "h-screen overflow-y-hidden" : "overflow-auto"}`}>
      <div className={`fixed left-0 top-0 h-full w-full z-[-1] transition-all duration-300 ${isDarkMode ? "bg-[#111315]" : "bg-[#F4F4F4]"}`}></div>
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
        <Route path="/property" element={<Property isDarkMode={isDarkMode} modalsClose={modalsClose} setModalsClose={setModalsClose} />} />
        <Route path="/propertyDetail/:id" element={<PropertyDetail isDarkMode={isDarkMode} />} />
        <Route path="/agent" element={<Agent isDarkMode={isDarkMode} />} />
        <Route path="/my_profile" element={<My_profile isDarkMode={isDarkMode} />} />
        <Route path="/profileDashboard" element={<ProfileDashboard isDarkMode={isDarkMode} />} />
        <Route path="/agentDetail/:id" element={<AgentDetail isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
}
