import { useEffect, useState , useRef } from "react";
import  { Link, useLocation } from "react-router-dom"
import WhiteLabelHover from "./hoverComponents/WhiteLabel";
import CloudHover from "./hoverComponents/CloudHover";
import ProfessionalServiceHover from "./hoverComponents/Professional";
import CompanyHover from "./hoverComponents/Company"
import companyLogo from "../assets/medha_cloud.svg";
import menuIcon from "../assets/menu.png"

export default function Header(){
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
        <header className="sticky top-0 z-60 bg-white overflow-x-clip shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center justify-between h-16 overflow-visible px-3 ">
                    <Link 
                        to= "/"
                        className=""
                    >
                        <img src={companyLogo} alt="MEDHA CLOUD"  className="h-12 rounded-xl"/>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-2">
                        <Link 
                            to="white-label-msp-services"
                            className="px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-1 whitespace-nowrap relative cursor-pointer text-gray-800 hover:text-blue-400 hover:bg-blue-50/50 z-10 rounded-xl"
                            onMouseEnter={() => mouseEnter("WhiteLabel")}
                            onMouseLeave={mouseLeave}
                        >
                            White Label MSP Services
                        </Link>
                        <Link 
                            to= "cloud-hosting"
                            className="px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-1 whitespace-nowrap relative cursor-pointer text-gray-800 hover:text-blue-400 hover:bg-blue-50/50 z-10 rounded-xl"
                            onMouseEnter={() => mouseEnter("Cloud")}
                            onMouseLeave={mouseLeave}
                        >
                            Cloud
                        </Link>
                        <Link 
                            to= "professional-services"
                            className="px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-1 whitespace-nowrap relative cursor-pointer text-gray-800 hover:text-blue-400 hover:bg-blue-50/50 z-10 rounded-xl"
                            onMouseEnter={() => mouseEnter("Professional")}
                            onMouseLeave={mouseLeave}
                        >
                            Professional Services
                        </Link>
                        <Link 
                            to= "company"
                            className="px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-1 whitespace-nowrap relative cursor-pointer text-gray-800 hover:text-blue-400 hover:bg-blue-50/50 z-10 rounded-xl"
                            onMouseEnter={() => mouseEnter("Company")}
                            onMouseLeave={mouseLeave}
                        >
                            Company
                        </Link>
                    </nav>
                    <nav className="flex  sm:hidden items-center gap-2">
                        <img src={menuIcon} alt="menu" className="h-5 w-5" />
                    </nav>
                </div>
            </div>
        </header>
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
        </>
    )
}