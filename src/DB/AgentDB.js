"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentData = void 0;
const uuid_1 = require("uuid");
const Agent_1_png_1 = __importDefault(require("../img/Agent/Agent_1.png"));
const Agent_2_png_1 = __importDefault(require("../img/Agent/Agent_2.png"));
const Agent_3_png_1 = __importDefault(require("../img/Agent/Agent_3.png"));
const Agent_4_png_1 = __importDefault(require("../img/Agent/Agent_4.png"));
const Agent_1_png_2 = __importDefault(require("../img/Agent/Agent_1.png"));
const agentlist_1_png_1 = __importDefault(require("../img/Agent/agentlist_1.png"));
const agentlist_2_png_1 = __importDefault(require("../img/Agent/agentlist_2.png"));
const agentlist_3_png_1 = __importDefault(require("../img/Agent/agentlist_3.png"));
const agent_list_4_png_1 = __importDefault(require("../img/Agent/agent_list_4.png"));
exports.AgentData = {
    topAgent: [
        {
            image: Agent_1_png_1.default,
            name: "Benny Chagur",
            degree: "Top Agent",
            id: "1",
        },
        {
            image: Agent_2_png_1.default,
            name: "Chynita Heree",
            degree: "Top Agent",
            id: "2",
        },
        {
            image: Agent_3_png_1.default,
            name: "David Yers",
            degree: "Top Agent",
            id: "3",
        },
        {
            image: Agent_4_png_1.default,
            name: "Hayder Jahid",
            degree: "Top Agent",
            id: "4",
        },
        {
            image: Agent_1_png_2.default,
            name: "Benny Chagur",
            degree: "Top Agent",
            id: "5",
        },
    ],
    agentList: [
        {
            profileImage: agentlist_1_png_1.default,
            name: "Karen",
            lastName: "Eilla",
            surname: "Boyette",
            email: "kareneboyette@armyspy.com",
            location: "Manchester",
            phone: "+502-324-4194",
            properties: 15,
            Id: (0, uuid_1.v4)(),
            facebook: "https://www.facebook.com/",
            twitter: "http://twitter.com/",
            instagram: "https://www.instagram.com/",
            agentDetails: {
                age: 26,
                city: "New York City",
                state: "New York",
                country: "USA",
                postCode: "1001",
                agentDescription: "Talent customers tend to earn a basic salary in the range of £15,000 to £35,000 per annum. However, talented customers also earn a commission for finding their client's work. Typically, agents receive around 10% of what the client is paid.",
                agency: "All American Real Estate",
                agentLicense: "3124 9764 9700 234",
                taxNumber: "TX 87D0 678H PQ45",
                serviceArea: "Chicago, Los Angeles, New York, Miami beach",
                agentStatus: [
                    {
                        id: 1,
                        title: "Total Listings",
                        number: 1050,
                        part: [60, 40],
                        colors: ["#475BE8", "#F2F6FC"],
                    },
                    {
                        id: 2,
                        title: "Properties Sold",
                        number: 650,
                        part: [50, 50],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                    {
                        id: 3,
                        title: "Properties Rent",
                        number: 400,
                        part: [70, 30],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                ],
            },
        },
        {
            profileImage: agentlist_2_png_1.default,
            name: "Walter",
            lastName: "Devid",
            surname: "Moye",
            email: "walterdevidmoye@armyspy.com",
            location: "Chicago, Canada",
            phone: "+457-324-4147",
            properties: 15,
            Id: (0, uuid_1.v4)(),
            facebook: "https://www.facebook.com/",
            twitter: "http://twitter.com/",
            instagram: "https://www.instagram.com/",
            agentDetails: {
                age: 26,
                city: "New York City",
                state: "New York",
                country: "USA",
                postCode: "1001",
                agentDescription: "Talent customers tend to earn a basic salary in the range of £15,000 to £35,000 per annum. However, talented customers also earn a commission for finding their client's work. Typically, agents receive around 10% of what the client is paid.",
                agency: "All American Real Estate",
                agentLicense: "3124 9764 9700 234",
                taxNumber: "TX 87D0 678H PQ45",
                serviceArea: "Chicago, Los Angeles, New York, Miami beach",
                agentStatus: [
                    {
                        id: 1,
                        title: "Total Listings",
                        number: 1050,
                        part: [60, 40],
                        colors: ["#475BE8", "#F2F6FC"],
                    },
                    {
                        id: 2,
                        title: "Properties Sold",
                        number: 650,
                        part: [50, 50],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                    {
                        id: 3,
                        title: "Properties Rent",
                        number: 400,
                        part: [70, 30],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                ],
            },
        },
        {
            profileImage: agentlist_3_png_1.default,
            name: "David",
            lastName: "Smith",
            surname: "Raddy",
            email: "kareneboyette@armyspy.com",
            location: "Manchester",
            phone: "+584-324-7835",
            properties: 15,
            Id: (0, uuid_1.v4)(),
            facebook: "https://www.facebook.com/",
            twitter: "http://twitter.com/",
            instagram: "https://www.instagram.com/",
            agentDetails: {
                age: 26,
                city: "New York City",
                state: "New York",
                country: "USA",
                postCode: "1001",
                agentDescription: "Talent customers tend to earn a basic salary in the range of £15,000 to £35,000 per annum. However, talented customers also earn a commission for finding their client's work. Typically, agents receive around 10% of what the client is paid.",
                agency: "All American Real Estate",
                agentLicense: "3124 9764 9700 234",
                taxNumber: "TX 87D0 678H PQ45",
                serviceArea: "Chicago, Los Angeles, New York, Miami beach",
                agentStatus: [
                    {
                        id: 1,
                        title: "Total Listings",
                        number: 1050,
                        part: [60, 40],
                        colors: ["#475BE8", "#F2F6FC"],
                    },
                    {
                        id: 2,
                        title: "Properties Sold",
                        number: 650,
                        part: [50, 50],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                    {
                        id: 3,
                        title: "Properties Rent",
                        number: 400,
                        part: [70, 30],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                ],
            },
        },
        {
            profileImage: agent_list_4_png_1.default,
            name: "Jhon",
            lastName: "Haron",
            surname: "Bably",
            email: "kareneboyette@armyspy.com",
            location: "Chicago, Canada",
            phone: "+502-324-4194",
            properties: 15,
            Id: (0, uuid_1.v4)(),
            facebook: "https://www.facebook.com/",
            twitter: "http://twitter.com/",
            instagram: "https://www.instagram.com/",
            agentDetails: {
                age: 26,
                city: "New York City",
                state: "New York",
                country: "USA",
                postCode: "1001",
                agentDescription: "Talent customers tend to earn a basic salary in the range of £15,000 to £35,000 per annum. However, talented customers also earn a commission for finding their client's work. Typically, agents receive around 10% of what the client is paid.",
                agency: "All American Real Estate",
                agentLicense: "3124 9764 9700 234",
                taxNumber: "TX 87D0 678H PQ45",
                serviceArea: "Chicago, Los Angeles, New York, Miami beach",
                agentStatus: [
                    {
                        id: 1,
                        title: "Total Listings",
                        number: 1050,
                        part: [60, 40],
                        colors: ["#475BE8", "#F2F6FC"],
                    },
                    {
                        id: 2,
                        title: "Properties Sold",
                        number: 650,
                        part: [50, 50],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                    {
                        id: 3,
                        title: "Properties Rent",
                        number: 400,
                        part: [70, 30],
                        colors: ["#E3A008", "#F2F6FC"],
                    },
                ],
            },
        },
    ],
};
