"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProfileData = void 0;
const name = localStorage.getItem("name");
const lastName = localStorage.getItem("lastname");
const email = localStorage.getItem("email");
const profileImg_png_1 = __importDefault(require("../img/message/profileImg.png"));
exports.MyProfileData = {
    name: name,
    lastName: lastName,
    email: email,
    img: profileImg_png_1.default,
};
