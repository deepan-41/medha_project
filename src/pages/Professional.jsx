import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import shield from "../assets/encrypted.png";
import rightArrow from "../assets/rightarrow.png";
import cloud from "../assets/cloud.png";
import tick from "../assets/checkmark.png";
import dataServer from "../assets/data-server.png";


export default function Professional(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    Professional Services & IT Solutions
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-9/13">
                    15-minute response time. Windows, Linux, Exchange, SQL experts. Trusted by 1,200+ businesses worldwide for critical infrastructure support.
                </h1>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-green-600  flex items-center justify-center gap-2 mb-2">
                        Get Started
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:border-green-700 hover:text-green-600 bg-white flex items-center justify-center gap-2 mb-2">
                        View Solutions
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-100 pt-25 pb-20">
                <h1 className="font-bold text-5xl w-full">
                    Why Choose Our Professional Services
                </h1>
                <h1 className="text-xl mt-5">
                    Trusted by 1,200+ businesses worldwide for critical infrastructure management
                </h1>

                <div className="flex  items-center justify-center text-center gap-40 mt-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">1,200+</p>
                        <p className="text-sm text-gray-400">Businesses Worldwide</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">99.99%</p>
                        <p className="text-sm text-gray-400">Uptime SLA</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">15 min</p>
                        <p className="text-sm text-gray-400">Response Time</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center py-20">
                <h1 className="font-bold text-4xl">
                    Our Service Categories
                </h1>
                <p className="text-xl mt-5 mb-8 text-gray-800 ">
                    Server support, IT services, migrations, and consulting for businesses worldwide
                </p>
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-green-600">
                        <div className="flex gap-5">
                            <img src={dataServer} alt="protection" className="h-10 w-10" />
                            <div>
                                <h1>Server Support</h1>
                                <p>Expert support for Windows, Linux and specialized plaforms</p>
                            </div>
                        </div>
                            
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Professional Server Support</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Windows Server Support</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Linux Server Support</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Exchange Server Support</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>VMware Server Support</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Microsoft IIS Srver Support</Link>
                        </div>
                        <Link to="/cloud-hosting/hosting-solutions"
                        className="flex text-green-600 items-center border-gray-300  border-t p-3 mt-5">
                            View All Services 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-amber-400">
                        <div className="flex gap-5">
                            <img src={dataServer} alt="protection" className="h-10 w-10" />
                            <div>
                                <h1>IT Services</h1>
                                <p>Strategic consulting and operational IT support</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>IT Consulting</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>IT Helpdesk Services</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Digital Workspace</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm mt-3 mb-20">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Network Operations Center</Link>
                        </div>
                        <Link to="/cloud-hosting/hosting-solutions"
                        className="flex text-orange-400 items-center border-gray-300  border-t p-3 mt-5">
                            View All Services 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>
                    
                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-blue-600">
                        <div className="flex gap-5">
                            <img src={cloud} alt="protection" className="h-10 w-10" />
                            <div>
                                <h1>Migration Services</h1>
                                <p>Zero-downtime cloud migration strategies</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Cloud Migrations Overview</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Migrations Calculator</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Microsoft 365 Migrations</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Azure Migration</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>AWS Migration</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Google Cloud Migration</Link>
                        </div>
                        <Link to="/cloud-hosting/hosting-solutions"
                        className="flex text-blue-600 items-center border-gray-300  border-t p-3 mt-5">
                            View All Services 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-violet-400">
                        <div className="flex gap-5">
                            <img src={dataServer} alt="protection" className="h-10 w-10" />
                            <div>
                                <h1>Platform Migrations</h1>
                                <p>Email and collaboration platform migratons</p>
                            </div>
                        </div>
                   
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Migrate GoDaddy Office 365</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Migrate IMAP</Link>
                        </div>
                        <div className="flex gap-2 items-center text-sm mt-3 mb-29">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <Link>Google Workspace to M365</Link>
                        </div>
                        <Link to="/cloud-hosting/hosting-solutions"
                        className="flex text-violet-400 items-center border-gray-300  border-t p-3 mt-5">
                            View All Services 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex flex-col bg-gray-200 items-center py-30">
                <h1 className="font-bold text-5xl  justify-center">
                    Ready to Get Expert IT Support?
                </h1>
                <h1 className="text-xl w-160 m-5 justify-center">
                    Get 15-minute response times from certified engineers. Windows, Linux, Exchange, SQL Server support available 24/7.
                </h1>

                <div className="flex  items-center justify-center text-center gap-40 mt-5">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">15-Min Response</p>
                        <p className="text-sm text-gray-400 mt-3">Critical issue support</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">99.99% Uptime</p>
                        <p className="text-sm text-gray-400 mt-3">Guaranteed SLA</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">,200+ Clients</p>
                        <p className="text-sm text-gray-400 mt-3">Worldwide trust</p>
                    </div>
                </div>
                <div className="flex mt-10 gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-green-700 flex items-center justify-center gap-2 mb-2">
                        Contact Us Now
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:text-green-700 hover:border-green-700 bg-white flex items-center justify-center gap-2 mb-2">
                        Start Live Chat
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}