"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
const react_1 = require("react");
const PropertyDB_1 = require("./DB/PropertyDB");
function App() {
    const location = (0, react_router_dom_1.useLocation)(); // Pathname'ni kuzatib borish uchun
    const navigate = (0, react_router_dom_1.useNavigate)(); // Yönlendirme uchun
    const [isLoading, setIsLoading] = (0, react_1.useState)(true); // Yuklanish holati
    const [isLogin, setIsLogin] = (0, react_1.useState)(false); // Kirish holati
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false); // Modal oynaning ochilishi
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(true);
    const [editProfile, setEditProfile] = (0, react_1.useState)(false); //
    const [modalsClose, setModalsClose] = (0, react_1.useState)(false);
    const propertydataFromLocalStorage = localStorage.getItem('Propertydata');
    (0, react_1.useEffect)(() => {
        if (!propertydataFromLocalStorage === true) {
            localStorage.setItem('Propertydata', JSON.stringify(PropertyDB_1.Propertydata.PropertyListMain));
        }
    }, [isLogin, propertydataFromLocalStorage]);
    // const MessagelocalStorageData = localStorage.getItem('Messages');
    // useEffect(() => {
    //   if (!MessagelocalStorageData === true) {
    //     localStorage.setItem('Messages', JSON.stringify(MessageData))
    //   }
    // }, [isLogin, MessagelocalStorageData])
    (0, react_1.useEffect)(() => {
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
            }
            else {
                setIsLogin(false);
                navigate("/login");
            }
        }
        catch (error) {
            console.error('Autentifikatsiya tekshirishda xatolik', error);
            navigate("/login");
        }
        finally {
            setIsLoading(false);
        }
    }, [location.pathname, navigate]);
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-screen", children: (0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin" }) }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `max-w-[1540px] relative mx-auto pt-[70px] md:pl-[250px] ${modalsClose ? "h-screen  overflow-y-hidden" : "overflow-auto"}  ${editProfile ? "h-screen  overflow-y-hidden" : "overflow-auto"}  `, children: [(0, jsx_runtime_1.jsx)("div", { className: `fixed left-0 top-0 h-full w-full z-[-1]  transition-all duration-300 ${isDarkMode ? "bg-[#111315]" : "bg-[#F4F4F4]"}` }), isLogin && !["/login", "/sign"].includes(location.pathname) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.Header, { isLoading: isLoading, setIsLoading: setIsLoading, setModalIsOpen: setModalIsOpen, modalIsOpen: modalIsOpen, isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode, setEditProfile: setEditProfile, editProfile: editProfile }), (0, jsx_runtime_1.jsx)(components_1.Navbar, { setModalIsOpen: setModalIsOpen, modalIsOpen: modalIsOpen, isDarkMode: isDarkMode })] })), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(components_1.Dashboard, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/sign", element: (0, jsx_runtime_1.jsx)(components_1.Sign, { isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(components_1.Login, { isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/property", element: (0, jsx_runtime_1.jsx)(components_1.Property, { isDarkMode: isDarkMode, modalsClose: modalsClose, setModalsClose: setModalsClose }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/propertyDetail/:id", element: (0, jsx_runtime_1.jsx)(components_1.PropertyDetail, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/agent", element: (0, jsx_runtime_1.jsx)(components_1.Agent, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/message", element: (0, jsx_runtime_1.jsx)(components_1.Message, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/my_profile", element: (0, jsx_runtime_1.jsx)(components_1.My_profile, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/profileDashboard", element: (0, jsx_runtime_1.jsx)(components_1.ProfileDashboard, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/agentDetail/:id", element: (0, jsx_runtime_1.jsx)(components_1.AgentDetail, { isDarkMode: isDarkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/messageChatDetail/:id", element: (0, jsx_runtime_1.jsx)(components_1.MessageChatDetail, { isDarkMode: isDarkMode }) })] })] }));
}
