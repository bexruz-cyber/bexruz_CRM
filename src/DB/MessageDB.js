"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageData = void 0;
const uuid_1 = require("uuid");
const profileImg_png_1 = __importDefault(require("../img/message/profileImg.png"));
const profileImg1_png_1 = __importDefault(require("../img/message/profileImg1.png"));
const profileImg2_png_1 = __importDefault(require("../img/message/profileImg2.png"));
const profileImg3_png_1 = __importDefault(require("../img/message/profileImg3.png"));
const profileImg4_png_1 = __importDefault(require("../img/message/profileImg4.png"));
const profileImg5_png_1 = __importDefault(require("../img/message/profileImg5.png"));
const img9_png_1 = __importDefault(require("../img/property_list/propertycardimg/img9.png"));
const img6_png_1 = __importDefault(require("../img/property_list/propertycardimg/img6.png"));
exports.MessageData = [
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg_png_1.default,
        name: "Jane ",
        lastName: "Cooper",
        lastNews: "Hello, How are you?",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: ["Hello! How are you?👋"],
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg1_png_1.default,
        name: "Jubed ",
        lastName: "Ahmed",
        lastNews: "I need a photo for see",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg2_png_1.default,
        name: "Mahfuzul Islam ",
        lastName: "Nabil",
        lastNews: "How can i help you?",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg3_png_1.default,
        name: "Jane ",
        lastName: "Cooper",
        lastNews: "Hello, How are you",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg4_png_1.default,
        name: "Hussain ",
        lastName: "Ahmed",
        lastNews: "I need a photo for see",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg5_png_1.default,
        name: "Jakir ",
        lastName: "Hussen",
        lastNews: "How can i help you?",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg_png_1.default,
        name: "Tajul ",
        lastName: "Islam",
        lastNews: "Hello, How are you",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg1_png_1.default,
        name: "Moinul  ",
        lastName: "Hasan Nayem",
        lastNews: "I need a photo for see",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg3_png_1.default,
        name: "Jane ",
        lastName: "Cooper",
        lastNews: "Hello, How are you",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
    {
        Id: (0, uuid_1.v4)(),
        profileImg: profileImg_png_1.default,
        name: "Delwor ",
        lastName: "Hussen",
        lastNews: "How can i help you?",
        recentActivity: "3:30 PM",
        messages: [
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Hello! How are you?👋",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Im good 👍 and you...? How cane how help you...?",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "I need a photo of your house builing front view. becouse i's not in the descripsion.",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "Okay wait...",
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "me",
                message: {
                    text: "",
                    img: {
                        img1: img9_png_1.default,
                        img2: img6_png_1.default,
                    },
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
            {
                role: "you",
                profileImg: profileImg_png_1.default,
                message: {
                    text: "Thank you😍",
                    img: {},
                },
                time: "11.25 AM",
                Id: (0, uuid_1.v4)(),
            },
        ],
    },
];
