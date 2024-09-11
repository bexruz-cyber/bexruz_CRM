"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.db = exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyCewEI0fJzilunLocO1daEKLSPMEDbjhgM",
    authDomain: "reactchat-dae5e.firebaseapp.com",
    projectId: "reactchat-dae5e",
    storageBucket: "reactchat-dae5e.appspot.com",
    messagingSenderId: "141336218854",
    appId: "1:141336218854:web:3af94b5315ade8162d3f27"
};
// Firebase dasturini ishga tushiring
const app = (0, app_1.initializeApp)(firebaseConfig);
// Auth ob'ektini oling
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
exports.storage = (0, storage_1.getStorage)(app);
