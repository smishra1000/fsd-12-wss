// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCVY8-1jNptNDEdKtlOxLcuHsrJraZ5DXM",
//     authDomain: "ionic-phone-auth-f04bd.firebaseapp.com",
//     projectId: "ionic-phone-auth-f04bd",
//     storageBucket: "ionic-phone-auth-f04bd.appspot.com",
//     messagingSenderId: "113093271271",
//     appId: "1:113093271271:web:64afcf4ff45050bcf00c42",
//     measurementId: "G-2P2NWN80KL"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;