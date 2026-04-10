import { Link } from "react-router-dom";
import {MigrationCard, RMMCard, LiveSupportCard} from "../components/Dashboard";

import squareChat from "../assets/conversation.png";
import rightArrow from "../assets/rightarrow.png";
import badge from "../assets/medal.png";
import shield from "../assets/encrypted.png";
import speaker from "../assets/headset.png";
import user from "../assets/user.png";


export default function Home(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center mt-30 ">
                <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                    White Label MSP, Cloud Hosting
                    <span className="block bg-clip-text  mt-2 text-blue-800">& 24/7 Server Support</span>
                </h1> 
                <p className="text-2xl  mb-8 text-gray-500 max-w-2xl">
                        Can't afford 6 more techs? Server crashed? Migration failed? We answer in 15 minutes.
                </p>

                <button className="px-8 py-3 rounded-md text-white bg-orange-400 flex items-center justify-center gap-2 mb-2">
                    <img src={squareChat} alt="chat" className="h-4 w-4"/>
                    <span> Chat with us</span>
                    <img src={rightArrow} alt="arrow" className="h-4 w-4"/>
                </button>
                <p className="text-base text-gray-400">Usually responds in under 2 minutes</p>
            </section>
            
            <section  className="pt-15 pb-25">
                <div className="sm:flex gap-5  px-10  pb-20">
                    <RMMCard />
                    <MigrationCard />
                    <LiveSupportCard />
                </div>
                <div className="flex flex-col  items-center">
                    <p className="text-base">
                        9 years in business fixing IT problems for MSPs, hospitals, banks, manufacturers and many industries
                    </p>
                    <div className="grid grid-cols-2 sm:flex  items-center justify-center text-center gap-10 sm:gap-40 mt-10">
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">9+</p>
                            <p className="text-sm text-gray-400"> years in business</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">1.2K+</p>
                            <p className="text-sm text-gray-400"> Business served</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">5K+</p>
                            <p className="text-sm text-gray-400">Servers managed</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">1+ PB</p>
                            <p className="text-sm text-gray-400">Data migrated</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">99.99%</p>
                            <p className="text-sm text-gray-400">Uptime SLA</p>
                        </div>  
                    </div>
                </div>
            </section>

            <section className="flex flex-col bg-gray-50 px-10 py-30">
                <p className="text-blue-900 text-sm font-semibold">For MSP Partners</p>
                <h2 className="font-bold text-4xl my-5">White Label MSP Services</h2>
                <p className="text-xl text-gray-500 max-w-9/13">
                    Stop losing clients to bigger MSPs. Add 24/7 NOC/SOC coverage in 4 weeks — your logo, your pricing, our certified team.
                </p>
                <Link to="/white-label-msp-services" 
                className="flex text-blue-900 items-center my-5">
                    Learn more 
                    <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                </Link>

                {/* collection of box div */}
                <div className="sm:flex gap-5">
                    <div className="group border-2 border-gray-300 py-5 pl-7 pr-13 rounded-2xl w-min transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
                        <img src={badge} alt="badge" className='h-5 w-5 mb-3'/>
                        <h3 className="text-xl w-max">Getting Started</h3>
                        <p className="text-sm  text-gray-600 w-50 my-3">
                            Pricing takes 5 minutes. Onboarding takes 2 weeks. No contracts.
                        </p>

                        <Link to="/white-label-msp-services/partner-program"
                        className="flex text-blue-900 items-center opacity-0 group-hover:opacity-100 transition duration-300"  >
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="group border-2 border-gray-300 py-5 pl-7 pr-13 rounded-2xl w-min transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
                        <img src= {speaker} alt="speaker" className='h-5 w-5 mb-3'/>
                        <h3 className="text-xl w-max">
                            Managed IT Services
                        </h3>
                        <p className="text-sm  text-gray-600 w-50 my-3">
                            Helpdesk, monitoring and patching. Under your logo. Blled to you.
                        </p>

                        <Link to="/white-label-msp-services/managed-it-services"
                        className="flex text-blue-900 items-center opacity-0 group-hover:opacity-100 transition duration-300"  >
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="group border-2 border-gray-300 py-5 pl-7 pr-13 rounded-2xl w-min transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
                        <img src={shield} alt="shield" className='h-5 w-5 mb-3'/>
                        <h3 className="text-xl w-max">
                            NOC & SOC Services
                        </h3>
                        <p className="text-sm  text-gray-600 w-50 my-3">
                            We watch clients' networks 24/7. Threats get stopped. You get the credit.
                        </p>

                        <Link to="/white-label-msp-services/noc-soc-cloud"
                        className="flex text-blue-900 items-center opacity-0 group-hover:opacity-100 transition duration-300"  >
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="group border-2 border-gray-300 py-5 pl-7 pr-13 rounded-2xl w-min transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
                        <img src={user} alt="user" className='h-5 w-5 mb-3'/>
                        <h3 className="text-xl w-max"
                        >Staff Augmention
                        </h3>
                        <p className="text-sm  text-gray-600 w-50 my-3">
                            Need a Windows admn for 10 hours? Hire ours. Imvoice your client. We handle payroll.
                        </p>

                        <Link to="/white-label-msp-services/staff-augmentation"
                        className="flex text-blue-900 items-center opacity-0 group-hover:opacity-100 transition duration-300"  >
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex flex-col bg-gray-100 items-center text-center py-30">
                <p className="text-sm mb-5">Trusted by 1,200+ businesses worldwide</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-12 text-center max-w-xl mb-6">
                    Talk to Engineers Who Fix Your IT Problems
                </h2>
                <h1 className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    No sales scripts. Just certified engineers who fix server crashes, failed migrations, and compliance issues every day.
                </h1>
                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-orange-400 hover:bg-orange-500 flex items-center justify-center gap-2 mb-2">
                        Talk to Our Team
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        Start Live Chat
                    </button>
                </div>
                    <div className="sm:flex  items-center justify-center text-center gap-40 mt-10">
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">24Hrs</p>
                            <p className="text-sm text-gray-400"> Setup Time</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">99.99%</p>
                            <p className="text-sm text-gray-400"> Uptime SLA</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-4xl">15min</p>
                            <p className="text-sm text-gray-400">Response Time</p>
                        </div>
                    </div>
                    <div className=" border-t  bg-white  w-8/12 m-10"></div>
                    <p className="text-sm text-gray-500">Or reach us directly</p>
                    <div className="flex flex-col md:flex-row gap-10 mt-5">
                        <a href="tel:+16467752855">+16467752855(US)</a>
                        <a href="tel:+919353644646">+919353644646(India)</a>
                        <a href="mailto:sales@medhacloud.com">sales@medhacloud.com</a>
                        <span></span>
                    </div>
            </section>
        </>
    )
}