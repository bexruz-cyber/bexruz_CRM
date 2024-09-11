"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserStore = void 0;
const firestore_1 = require("firebase/firestore");
const zustand_1 = require("zustand");
const firebase_1 = require("./firebase");
exports.useUserStore = (0, zustand_1.create)((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: (uid) => __awaiter(void 0, void 0, void 0, function* () {
        set({ isLoading: true }); // Ma'lumot yuklanmoqda flagini o'zgartirish
        if (!uid) {
            set({ currentUser: null, isLoading: false });
            return;
        }
        try {
            const docRef = (0, firestore_1.doc)(firebase_1.db, "users", uid);
            const docSnap = yield (0, firestore_1.getDoc)(docRef);
            if (docSnap.exists()) {
                set({ currentUser: docSnap.data(), isLoading: false });
            }
            else {
                set({ currentUser: null, isLoading: false });
            }
        }
        catch (error) {
            console.log(error);
            set({ currentUser: null, isLoading: false });
        }
    }),
}));
