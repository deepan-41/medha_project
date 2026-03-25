import squareChat from "../assets/conversation.png";
import rightArrow from "../assets/rightarrow.png"
import {MigrationCard, RMMCard, LiveSupportCard} from "../components/Dashboard";
import Footer from "../components/Footer";

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
                    <h1 className="text-xl">9 years in business fixing IT problems for MSPs, hospitals, banks, manufacturers and many industries</h1>
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

            <setion className="flex flex-col bg-gray-200 items-center py-30">
                <p className="text-sm mb-5">Trusted by 1,200+ businesses worldwide</p>
                <h1 className="font-bold text-5xl w-135 justify-center">
                    Talk to Engineers Who Fix Your IT Problems
                </h1>
                <h1 className="text-xl w-160 m-20">No sales scripts. Just certified engineers who fix server crashes, failed migrations, and compliance issues every day.</h1>
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
            </setion>
            <Footer />
        </>
    )
}