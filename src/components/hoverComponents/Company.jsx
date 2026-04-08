import lighting from "../../assets/lighting.png";
import building from "../../assets/building.png"
import speaker from "../../assets/headset.png"
import sheild from  "../../assets/encrypted.png"
import user from "../../assets/user.png"
import { Link } from "react-router-dom";

export default function CompanyHover({onMouseEnter,onMouseLeave}){
    return(
        <>
            <section 
                className="flex p-5 shadow-2xl rounded-b-2xl z-10 justify-between"
                onMouseEnter={() => onMouseEnter("Company")}
                onMouseLeave={onMouseLeave}
            >
                <div className="grid grid-cols-2 gap-10 mt-5">
                    <div className="flex gap-3">
                        <div className="bg-blue-800 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={building} alt="building" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/partner-program"
                                className="text-md font-bold">
                                    About US
                            </Link>
                            <p className="text-sm text-gray-700">
                                Our mission, team, and careers
                            </p>
                            <Link 
                                to="/white-label-msp-services/partner-program"
                                className="text-base text-gray-700 mt-5">
                                    About Medha Cloud
                            </Link>
                            <Link className="text-base text-gray-700 mt-3">
                                Carrer & Jobs
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-blue-800 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={speaker} alt="speaker" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/managed-it-services"
                                className="text-md font-bold">
                                    Resources
                            </Link>
                            <p className="text-sm text-gray-700">
                                Downloads and documentation
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-blue-800 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={sheild} alt="protection" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/noc-soc-cloud"
                                className="text-md font-bold">
                                    Support
                            </Link>
                            <p className="text-sm text-gray-700">
                                Get help and technical support
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-blue-800 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={user} alt="support" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/staff-augmentation"
                                className="text-md font-bold">
                                    Blog
                            </Link>
                            <p className="text-sm text-gray-700">
                                Latest insights and industry news
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-blue-800 h-10 w-10 flex items-center justify-center rounded-2xl" >
                            <img src={user} alt="support" className="h-5  w-5"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <Link 
                                to="/white-label-msp-services/staff-augmentation"
                                className="text-md font-bold">
                                    Contact
                            </Link>
                            <p className="text-sm text-gray-700">
                                Get in touch with our team
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-3/12  h-90 rounded-r-3xl shadow-2xl bg-blue-800 text-white  flex  flex-col items-center justify-center">
                    
                    <div className="bg-gray-50 h-15 w-15 rounded-2xl flex items-center justify-center">
                        <img src={lighting} alt="lighting" className="h-10 w-10"/>
                    </div>
                    <h1 className="text-xl font-semibold my-5">
                        MSP Services Guide
                    </h1>
                    <p className="text-sm w-8/12 mb-5">
                        Complete checklist for white label managed services
                    </p>
                    <button className="bg-white px-15 py-2.5 rounded-xl font-bold text-black">
                        Download Guide
                    </button>
                </div>
            </section>
        </>
    )
}