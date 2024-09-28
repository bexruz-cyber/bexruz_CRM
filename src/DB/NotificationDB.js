"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationData = void 0;
const payment_png_1 = __importDefault(require("../img/notification/payment.png"));
const updates_png_1 = __importDefault(require("../img/notification/updates.png"));
const booking_png_1 = __importDefault(require("../img/notification/booking.png"));
exports.NotificationData = [
    {
        id: 1,
        img: payment_png_1.default,
        title: "Payment Success",
        description: "Your success an order payment from star sun appartment in the amount of $320",
        time: "10 minutes ago",
    },
    {
        id: 2,
        img: updates_png_1.default,
        title: "Update Apps",
        description: "The Apps application has made updates to improve services",
        time: "1  Jan",
    },
    {
        id: 3,
        img: booking_png_1.default,
        title: "Booking Success",
        description: "You completed the order from star sun hotel and Appartment",
        time: "16 Sep",
    },
    {
        id: 4,
        img: payment_png_1.default,
        title: "Payment Success",
        description: "Your success an order payment from star sun appartment in the amount of $320",
        time: "10 minutes ago",
    },
    {
        id: 5,
        img: updates_png_1.default,
        title: "Update Apps",
        description: "The Apps application has made updates to improve services",
        time: "1  Jan",
    },
];
