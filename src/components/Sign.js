"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const sign_right_png_1 = __importDefault(require("../img/sign_right.png"));
const Sign = ({ isDarkMode, setIsDarkMode }) => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [name, setName] = (0, react_1.useState)(""); // State for name
    const [lastname, setLastname] = (0, react_1.useState)(""); // State for lastname
    const [step, setStep] = (0, react_1.useState)(1); // State to manage form steps
    const [error, setError] = (0, react_1.useState)(null); // Error state
    const navigate = (0, react_router_dom_1.useNavigate)();
    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
    };
    (0, react_1.useEffect)(() => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (storedEmail)
            setEmail(storedEmail);
        if (storedPassword)
            setPassword(storedPassword);
    }, []);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            // Validate email and password
            if (password.length < 8 || email.length === 0) {
                setError("Enter the full email and password and the password must not be less than 8 characters.");
                return;
            }
            // Move to next step
            setError(null);
            setStep(2);
        }
        else if (step === 2) {
            // Validate name and lastname
            if (name.length === 0 || lastname.length === 0) {
                setError("Enter the full first and last name.");
                return;
            }
            // Save data to localStorage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("name", name);
            localStorage.setItem("lastname", lastname);
            setError(null); // Clear error on successful submission
            // After form submission, handle any further actions like logging in the user
            navigate("/");
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "fixed w-full h-full left-0 top-0 overflow-auto", children: [(0, jsx_runtime_1.jsxs)("section", { className: "pt-[85px] md:py-[231px] relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-[1440px] transition-all duration-300 px-5 mx-auto lg:pl-[179px] flex", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-[362px] max-lg:mx-auto z-50", children: [(0, jsx_runtime_1.jsx)("h1", { className: `font-bold text-4xl max-md:text-center ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}   mb-2.5`, children: "Welcome back" }), (0, jsx_runtime_1.jsx)("p", { className: `font-normal text-base max-md:text-center ${isDarkMode ? "text-[#6F767E]" : "text-[#808191]"}   mb-[59px] md:mb-8`, children: "Welcome back! Please enter your details." }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 gap-y-2.5 md:gap-y-4 mb-5", children: [step === 1 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full grid grid-cols-1 gap-y-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", className: `font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `, children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", id: "email", placeholder: "Enter your email", autoComplete: "off", value: email, onChange: handleEmailChange, className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  ` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full grid grid-cols-1 gap-y-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", className: `font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `, children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", placeholder: "Password", onChange: handlePasswordChange, autoComplete: "off", className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  ` })] })] })), step === 2 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full grid grid-cols-1 gap-y-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: `font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `, children: "Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", id: "name", placeholder: "Enter your name", autoComplete: "off", value: name, onChange: handleNameChange, className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  ` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full grid grid-cols-1 gap-y-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "lastname", className: `font-medium text-sm ${isDarkMode ? "text-[#EFEFEF]" : "text-[#11142D]"}  `, children: "Lastname" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "lastname", id: "lastname", placeholder: "Enter your lastname", autoComplete: "off", value: lastname, onChange: handleLastnameChange, className: `p-3 ${isDarkMode ? "bg-transparent border-[#272B30] placeholder:text-[#808191] text-[#EFEFEF]" : "bg-[#FCFCFC] border-[#E4E4E4] placeholder:text-[#808191] text-[#11142D]"}   font-normal text-base   light:text-[#11142D] outline-none  placeholder:font-normal placeholder:text-base rounded-[10px] border  ` })] })] })), error && ((0, jsx_runtime_1.jsx)("div", { className: "text-red-500 text-sm mb-3", children: error })), (0, jsx_runtime_1.jsx)("div", { className: "w-full flex justify-end gap-5 items-center", children: (0, jsx_runtime_1.jsx)("p", { className: "font-medium text-sm max-md:text-right text-[#475BE8] cursor-pointer", children: "Forgot Password" }) })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-[#475BE8] cursor-pointer w-full rounded-[10px] font-semibold text-base text-[#FCFCFC] mb-5 py-2.5 px-[102px] md:px-[114px]", children: step === 1 ? "Next" : "Sign in" }), (0, jsx_runtime_1.jsxs)("button", { className: `${isDarkMode ? "text-[#EFEFEF] border-[#272B30]" : "text-[#11142D] border-[#E4E4E4] bg-[#FCFCFC]"}   flex justify-center font-semibold text-base   cursor-pointer border  rounded-[10px] items-center gap-x-2.5 w-full mb-[15px] md:mb-[30px] py-2.5`, children: [(0, jsx_runtime_1.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsx)("path", { d: "M23.745 12.27C23.745 11.48 23.675 10.73 23.555 10H12.255V14.51H18.725C18.435 15.99 17.585 17.24 16.325 18.09V21.09H20.185C22.445 19 23.745 15.92 23.745 12.27Z", fill: "#4285F4" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.255 24C15.495 24 18.205 22.92 20.185 21.09L16.325 18.09C15.245 18.81 13.875 19.25 12.255 19.25C9.12501 19.25 6.47501 17.14 5.52501 14.29H1.54501V17.38C3.51501 21.3 7.56501 24 12.255 24Z", fill: "#34A853" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.52501 14.29C5.27501 13.57 5.145 12.8 5.145 12C5.145 11.2 5.28501 10.43 5.52501 9.71V6.62H1.545C0.725004 8.24 0.255005 10.06 0.255005 12C0.255005 13.94 0.725004 15.76 1.545 17.38L5.52501 14.29Z", fill: "#FBBC05" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.255 4.75C14.025 4.75 15.605 5.36 16.855 6.55L20.275 3.13C18.205 1.19 15.495 0 12.255 0C7.56501 0 3.51501 2.7 1.54501 6.62L5.52501 9.71C6.47501 6.86 9.12501 4.75 12.255 4.75Z", fill: "#EA4335" })] }), "Sign in with Google"] }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4 font-normal text-sm text-[#808191] text-center", children: ["Don\u2019t have an account? ", (0, jsx_runtime_1.jsx)("span", { className: "font-medium text-[#475BE8] cursor-pointer", onClick: () => navigate("/login"), children: "Login" })] })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:max-w-[720px] max-lg:hidden w-full h-full absolute right-0 top-0", children: (0, jsx_runtime_1.jsx)("img", { src: sign_right_png_1.default, alt: "right_img", className: "w-full h-full object-cover" }) })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: toggleDarkMode, className: 'fixed z-50 top-5 left-5 justify-center flex items-center gap-2.5 leading-[22px] text-[#808191] dark:hover:text-[#475BE8] transition-all duration-300', children: [(0, jsx_runtime_1.jsx)("svg", { width: "16", height: "12", viewBox: "0 0 16 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.5 6C0.5 3.10051 2.85051 0.75 5.75 0.75H10.25C13.1495 0.75 15.5 3.10051 15.5 6C15.5 8.8995 13.1495 11.25 10.25 11.25H5.75C2.8505 11.25 0.5 8.8995 0.5 6ZM10.25 3.375C8.80025 3.375 7.625 4.55025 7.625 6C7.625 7.44975 8.80025 8.625 10.25 8.625C11.6997 8.625 12.875 7.44975 12.875 6C12.875 4.55025 11.6997 3.375 10.25 3.375Z", fill: "currentColor" }) }), isDarkMode ? "Light Mode" : "Dark Mode"] })] }));
};
exports.default = Sign;
