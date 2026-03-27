import ScrollToTop from "../utility/ScrollToTop";

import companyLogo from "../assets/medha_cloud.svg";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";



export default function NavbarLayout() {
   return(
    <>  
        <ScrollToTop />
        <div className="flex items-center justify-between px-1 py-2 shadow-md bg-white sticky top-0">
            <Link to= "/">
                <img src={companyLogo} alt="MEDHA CLOUD"  className="h-12"/>
            </Link>
            <div className="flex gap-8 text-gray-700 font-medium">
                <Link to="white-label-msp-services"
                    className="hover:text-blue-600 transition">
                    White Label MSP Services
                </Link>
                <Link to= "cloud-hosting"
                className="hover:text-blue-600 transition">
                    Cloud
                </Link>
                <Link to= "professional-services"
                className="hover:text-blue-600 transition">
                    Professional Services
                </Link>
                <Link to= "company"
                className="hover:text-blue-600 transition">
                    Company
                </Link>
            </div>
        </div>

        <Outlet/>
        <Footer />
    </>
   ) 
} 