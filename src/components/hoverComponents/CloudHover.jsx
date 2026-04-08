import lighting from "../../assets/lighting.png";
import building from "../../assets/building.png"
import speaker from "../../assets/headset.png"
import sheild from  "../../assets/encrypted.png"
import user from "../../assets/user.png"
import { Link } from "react-router-dom";

export default function CloudHover({onMouseEnter,onMouseLeave}){
    return(
        <>
            <section className="flex p-5 shadow-2xl rounded-b-2xl z-10 justify-between"
                onMouseEnter={() =>onMouseEnter("Cloud")}
                onMouseLeave={onMouseLeave}
            >
                <div className="grid grid-cols-2 gap-10 mt-5">
                    <div className="flex gap-3 mr-60">
                        <div className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={building} alt="building" className="h-5  w-5"/>
                        </div>
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/partner-program"
                                className="text-md font-bold"
                            >
                                Hosting Solutions
                            </Link>
                            <p className="text-sm text-gray-700">
                                Scalable hosting infrastructure
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={speaker} alt="speaker" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/managed-it-services"
                                className="text-md font-bold"
                            >
                                Speciality Hosting
                            </Link>
                            <p className="text-sm text-gray-700">
                                Industry-specific compliance hosting
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={sheild} alt="protection" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/noc-soc-cloud"
                                className="text-md font-bold"
                            >
                                Microsoft Soultions
                            </Link>
                            <p className="text-sm text-gray-700">
                                Microsoft 365 & Azure for India and USA
                            </p>
                            <Link 
                            to="/white-label-msp-services/partner-program"
                            className="text-base text-gray-700 mt-5"
                            >
                                Microsoft 365 India
                            </Link>
                            <Link className="text-base text-gray-700 mt-3">
                                Microsoft 365 USA
                            </Link>
                            <Link className="text-base text-gray-700 mt-3">
                                Azure Cloud Services
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={user} alt="support" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/staff-augmentation"
                                className="text-md font-bold"
                            >
                                Secruity & Compliance
                            </Link>
                            <p className="text-sm text-gray-700">
                                SSL certificates and compliance
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-3/12  h-90 rounded-r-3xl shadow-2xl bg-orange-500 text-white  flex  flex-col items-center justify-center">
                    
                    <div className="bg-gray-50 h-15 w-15 rounded-2xl flex items-center justify-center">
                        <img src={lighting} alt="lighting" className="h-10 w-10"/>
                    </div>
                    <h1 className="text-xl font-semibold my-5">
                        Cloud Solutions
                    </h1>
                    <p className="text-sm w-8/12 mb-5">
                        Infrastructure guide for scalable cloud solutions
                    </p>
                    <button className="bg-white px-15 py-2.5 rounded-xl font-bold text-black">
                        Get Guide
                    </button>
                </div>
            </section>
        </>
    )
}