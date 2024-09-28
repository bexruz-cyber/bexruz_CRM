"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propertydata = void 0;
const uuid_1 = require("uuid");
const house_1_png_1 = __importDefault(require("../img/house/house_1.png"));
const house_2_png_1 = __importDefault(require("../img/house/house_2.png"));
const house_3_png_1 = __importDefault(require("../img/house/house_3.png"));
const house_4_png_1 = __importDefault(require("../img/house/house_4.png"));
const star_png_1 = __importDefault(require("../img/property_list/star.png"));
const letdo_png_1 = __importDefault(require("../img/property_list/letdo.png"));
const metro_png_1 = __importDefault(require("../img/property_list/metro.png"));
const profilemage_png_1 = __importDefault(require("../img/property_list/profilemage.png"));
const bigImg_png_1 = __importDefault(require("../img/property_list/bigImg.png"));
const smallImg1_png_1 = __importDefault(require("../img/property_list/smallImg1.png"));
const smallImg2_png_1 = __importDefault(require("../img/property_list/smallImg2.png"));
const img1_png_1 = __importDefault(require("../img/property_list/propertycardimg/img1.png"));
const img2_png_1 = __importDefault(require("../img/property_list/propertycardimg/img2.png"));
const img3_png_1 = __importDefault(require("../img/property_list/propertycardimg/img3.png"));
const img4_png_1 = __importDefault(require("../img/property_list/propertycardimg/img4.png"));
const img5_png_1 = __importDefault(require("../img/property_list/propertycardimg/img5.png"));
const img6_png_1 = __importDefault(require("../img/property_list/propertycardimg/img6.png"));
const img7_png_1 = __importDefault(require("../img/property_list/propertycardimg/img7.png"));
const img8_png_1 = __importDefault(require("../img/property_list/propertycardimg/img8.png"));
const img9_png_1 = __importDefault(require("../img/property_list/propertycardimg/img9.png"));
const img10_png_1 = __importDefault(require("../img/property_list/propertycardimg/img10.png"));
exports.Propertydata = {
    latestSales: [
        {
            id: 1,
            img: house_1_png_1.default,
            title: "Metro Jayakar Apartment",
            description: "North Carolina, USA",
            price: "+$35",
        },
        {
            id: 2,
            img: house_2_png_1.default,
            title: "Letdo Ji Hotel & Aportment",
            description: " Carolina North, UK",
            price: "+$40",
        },
        {
            id: 3,
            img: house_3_png_1.default,
            title: "Star Sun Hotel & Apartment",
            description: "North Carolina, USA",
            price: "+$50",
        },
        {
            id: 4,
            img: house_4_png_1.default,
            title: "Metro Jayakar Apartment",
            description: "North Carolina, USA",
            price: "+$35",
        },
    ],
    PropertyList: {
        popular: [
            {
                id: 1,
                img: star_png_1.default,
                title: "Star Sun Hotel & Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
            {
                id: 2,
                img: letdo_png_1.default,
                title: "Letdo Ji Hotel & Apartment",
                price: "$500",
                location: "New Yrk City, USA",
            },
            {
                id: 3,
                img: metro_png_1.default,
                title: "Metro Jayakar Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
        ],
        recommended: [
            {
                id: 4,
                img: metro_png_1.default,
                title: "Metro Jayakar Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
            {
                id: 5,
                img: letdo_png_1.default,
                title: "Letdo Ji Hotel & Apartment",
                price: "$500",
                location: "New Yrk City, USA",
            },
            {
                id: 6,
                img: star_png_1.default,
                title: "Star Sun Hotel & Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
        ],
        newest: [
            {
                id: 5,
                img: letdo_png_1.default,
                title: "Letdo Ji Hotel & Apartment",
                price: "$500",
                location: "New Yrk City, USA",
            },
            {
                id: 4,
                img: metro_png_1.default,
                title: "Metro Jayakar Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
            {
                id: 6,
                img: star_png_1.default,
                title: "Star Sun Hotel & Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
        ],
        mostRecent: [
            {
                id: 5,
                img: letdo_png_1.default,
                title: "Letdo Ji Hotel & Apartment",
                price: "$500",
                location: "New Yrk City, USA",
            },
            {
                id: 6,
                img: star_png_1.default,
                title: "Star Sun Hotel & Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
            {
                id: 4,
                img: metro_png_1.default,
                title: "Metro Jayakar Apartment",
                price: "$500",
                location: "North Carolina, USA",
            },
        ],
    },
    PropertyListMain: [
        {
            status: "Any Type",
            id: (0, uuid_1.v4)(),
            type: "Apartment",
            img: img1_png_1.default,
            title: "Metro Jayakarta Hotel & Spa",
            location: "North Carolina, USA",
            price: 7400,
            beds: 4,
            area: 28,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "Any Type",
            id: (0, uuid_1.v4)(),
            type: "Apartment",
            img: img2_png_1.default,
            title: "Metro Jayakarta Hotel & Spa",
            location: "North Carolina, USA",
            price: 7400,
            beds: 4,
            area: 28,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "Any Type",
            id: (0, uuid_1.v4)(),
            type: "Apartment",
            img: img3_png_1.default,
            title: "Star Sun Hotel & Apartment",
            location: "Condong City, USA",
            price: 8500,
            beds: 6,
            area: 29,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For Sale",
            id: (0, uuid_1.v4)(),
            type: "Houses",
            img: img4_png_1.default,
            title: "Lotus Apy Hotel & Apartment",
            location: "Mlrgoluwih Caloriya, USA",
            price: 7900,
            beds: 3,
            area: 25,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For Sale",
            id: (0, uuid_1.v4)(),
            type: "Houses",
            img: img5_png_1.default,
            title: "Lavender Apartment",
            location: "North Carolina, USA",
            price: 9000,
            beds: 3,
            area: 26,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For Sale",
            id: (0, uuid_1.v4)(),
            type: "Houses",
            img: img6_png_1.default,
            title: "Star Sun Hotel & Apartment",
            location: "North Carolina, USA",
            price: 4800,
            beds: 5,
            area: 28,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For rent",
            id: (0, uuid_1.v4)(),
            type: "Commercial",
            img: img7_png_1.default,
            title: "Almander Hotel & Apartment",
            location: "Suryodiningratan, UK",
            price: 7400,
            beds: 2,
            area: 22,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For rent",
            id: (0, uuid_1.v4)(),
            type: "Garages",
            img: img8_png_1.default,
            title: "Almander Hotel & Apartment",
            location: "Suryodiningratan, UK",
            price: 6500,
            beds: 5,
            area: 26,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For rent",
            id: (0, uuid_1.v4)(),
            type: "Lots",
            img: img9_png_1.default,
            title: "Metro Jayakarta Hotel & Sp",
            location: "North Carolina, USA",
            price: 8100,
            beds: 4,
            area: 28,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
        {
            status: "For rent",
            id: (0, uuid_1.v4)(),
            type: "Lots",
            img: img10_png_1.default,
            title: "Metro Jayakarta Hotel & Sp",
            location: "North Carolina, USA",
            price: 5800,
            beds: 4,
            area: 28,
            propertyDetail: {
                images: {
                    bigImg: bigImg_png_1.default,
                    smallImg: {
                        img1: smallImg1_png_1.default,
                        img2: smallImg2_png_1.default,
                    },
                },
                rating: 5,
                priceOneDay: 80,
                facility: {
                    beds: true,
                    baths: true,
                    area: true,
                    smookingArea: true,
                    kitchen: true,
                    balcony: true,
                    wifi: true,
                    parkingArea: true,
                },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                seller: {
                    sellerImg: profilemage_png_1.default,
                    name_lastname: "Hussain Ahmed",
                    agent: "Agent",
                    sellerLocation: "North Carolina, USA",
                    propertis: 10,
                    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340894.342773026!2d-82.50161121222705!3d35.14185058324535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1724390059961!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
                },
            },
        },
    ],
};
