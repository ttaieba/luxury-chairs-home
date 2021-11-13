//  athentications initializations
import firebaseConfig from "./Firebase.config"
import { initializeApp } from "firebase/app";


const initializeAthentication = () => {
    initializeApp(firebaseConfig);

}

export default initializeAthentication;

