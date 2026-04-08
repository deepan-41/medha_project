import ScrollToTop from "../utility/ScrollToTop";

import companyLogo from "../assets/medha_cloud.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState , useRef } from "react";

import WhiteLabelHover from "./hoverComponents/WhiteLabel";
import CloudHover from "./hoverComponents/CloudHover";
import ProfessionalServiceHover from "./hoverComponents/Professional";
import CompanyHover from "./hoverComponents/Company";

export default function NavbarLayout() {
    const { pathname } = useLocation()

    const [activeMenu, setActiveMenu] = useState(null);

    const isHoveringRef = useRef(false);
    const timeoutRef = useRef(null)

    const mouseEnter = (menu) => {
            clearTimeout(timeoutRef.current);
            setActiveMenu(menu)
        }
    const mouseLeave = () => {
        isHoveringRef.current = false
        timeoutRef.current = setTimeout(() => {
            if (!isHoveringRef.current){
            setActiveMenu(null);
            }
        },150);
    }

    useEffect(() => {
        clearTimeout(timeoutRef.current);
        setActiveMenu(null);
    },[pathname])

   return(
    <>  
        <ScrollToTop />
        <div className="flex items-center justify-between px-3 py-2 shadow-md bg-white sticky top-0">
            <Link to= "/">
                <img src={companyLogo} alt="MEDHA CLOUD"  className="h-12"/>
            </Link>
            <div className="flex gap-8 text-gray-700 font-medium">
                <Link 
                    to="white-label-msp-services"
                    className="hidden hover:text-blue-600 transition  sm:block"
                    onMouseEnter={() => mouseEnter("WhiteLabel")}
                    onMouseLeave={mouseLeave}
                >
                    White Label MSP Services
                </Link>
                <Link 
                    to= "cloud-hosting"
                    className="hidden hover:text-blue-600 transition sm:block"
                    onMouseEnter={() => mouseEnter("Cloud")}
                    onMouseLeave={mouseLeave}
                >
                    Cloud
                </Link>
                <Link 
                    to= "professional-services"
                    className="hidden hover:text-blue-600 transition sm:block"
                    onMouseEnter={() => mouseEnter("Professional")}
                    onMouseLeave={mouseLeave}
                >
                    Professional Services
                </Link>
                <Link 
                    to= "company"
                    className="hidden hover:text-blue-600 transition sm:block"
                    onMouseEnter={() => mouseEnter("Company")}
                    onMouseLeave={mouseLeave}
                >
                    Company
                </Link>
            </div>
        </div>
        {activeMenu === "WhiteLabel" && <WhiteLabelHover 
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave} /> }
        {activeMenu === "Cloud" && <CloudHover
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave} /> }
        {activeMenu === "Professional" && <ProfessionalServiceHover 
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave} /> }
        {activeMenu === "Company" && <CompanyHover 
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave} /> }
        <Outlet/>
        <Footer />
    </>
   ) 
} 