const name = localStorage.getItem("name")
const lastName = localStorage.getItem("lastname")
const email = localStorage.getItem("email")
import profileImg from "../img/message/profileImg.png";

export const MyProfileData = {
    name: name,
    lastName: lastName,
    email: email,
    img: profileImg,
}