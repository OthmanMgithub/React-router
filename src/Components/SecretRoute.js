import { useState } from "react";
import {Outlet , Navigate} from "react-router-dom"
import Navbar from './Navbar';

const SecretRoute = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(
        () => localStorage.getItem("isLoggedIn") === "true"
    );
    <Navbar isLoggedIn={isLoggedIn}/>

    return isLoggedIn ? <Outlet /> : <Navigate to= "/login" replace />;
}

export default SecretRoute ;