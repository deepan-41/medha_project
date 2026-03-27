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
                <h3 className="font-bold text-5xl">White Label MSP, Cloud Hosting</h3> 
                <h3 className="font-bold text-5xl text-blue-800">& 24/7 Server Support</h3>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-150">
                        Can't afford 6 more techs? Server crashed? Migration failed? We answer in 15 minutes.
                </h1>

                <button className="px-8 py-3 rounded-md text-white bg-orange-400 flex items-center justify-center gap-2 mb-2">
                    <img src={squareChat} alt="chat" className="h-4 w-4"/>
                    <span> Chat with us</span>
                    <img src={rightArrow} alt="arrow" className="h-4 w-4"/>
                </button>
                <p className="text-sm text-gray-400">Usually responds in under 2 minutes</p>
            </section>
            
            <section  className="pt-15 pb-25">
                <div className="flex  px-10  pb-20 gap-5">
                    <RMMCard />
                    <MigrationCard />
                    <LiveSupportCard />
                </div>
                <div className="flex flex-col  items-center">
                    <h1 className="text-xl">
                        9 years in business fixing IT problems for MSPs, hospitals, banks, manufacturers and many industries
                    </h1>
                    <div className="flex  items-center justify-center text-center gap-40 mt-10">
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
                <h1 className="font-bold text-4xl my-5">White Label MSP Services</h1>
                <h1 className="text-xl text-gray-500 w-9/13">
                    Stop losing clients to bigger MSPs. Add 24/7 NOC/SOC coverage in 4 weeks — your logo, your pricing, our certified team.
                </h1>
                <Link to="/white-label-msp-services" 
                className="flex text-blue-900 items-center my-5">
                    Learn more 
                    <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                </Link>

                {/* collection of box div */}
                <div className="flex gap-5">
                    <div className="group border-2 border-gray-300 py-5 pl-7 pr-13 rounded-2xl w-min transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
                        <img src={badge} alt="badge" className='h-5 w-5 mb-3'/>
                        <h1 className="text-xl w-max">Getting Started</h1>
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
                        <h1 className="text-xl w-max">
                            Managed IT Services
                        </h1>
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
                        <h1 className="text-xl w-max">
                            NOC & SOC Services
                        </h1>
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
                        <h1 className="text-xl w-max"
                        >Staff Augmention
                        </h1>
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

            <section className="flex flex-col bg-gray-100 items-center py-30">
                <p className="text-sm mb-5">Trusted by 1,200+ businesses worldwide</p>
                <h1 className="font-bold text-5xl w-135 justify-center">
                    Talk to Engineers Who Fix Your IT Problems
                </h1>
                <h1 className="text-xl w-160 m-20">
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
                    <div className="flex  items-center justify-center text-center gap-40 mt-10">
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
                    <div className="flex gap-10 mt-5">
                        <a href="tel:+16467752855">+16467752855(US)</a>
                        <a href="tel:+919353644646">+919353644646(India)</a>
                        <a href="mailto:sales@medhacloud.com">sales@medhacloud.com</a>
                        <span></span>
                    </div>
            </section>
        </>
    )
}