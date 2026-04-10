import ScrollToTop from "../utility/ScrollToTop";
import Header from "./Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
;

export default function NavbarLayout() {
   return(
    <>  
        <ScrollToTop />
        <Header />
        <Outlet/>
        <Footer />
    </>
   ) 
} 