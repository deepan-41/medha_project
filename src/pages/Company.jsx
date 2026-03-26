import Footer from "../components/Footer"
import rightArrow from "../assets/rightarrow.png";

export default function Company(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-6xl">
                    Company Information & Resources
                </h1>
                <h1 className="text-2xl mt-5 mb-8 text-gray-600 w-9/12">
                   Learn about our company, explore career opportunities, access support documentation, and download resources.
                </h1>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-blue-900 hover:bg-blue-500 flex items-center justify-center gap-2 mb-2">
                        About Medha Cloud
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:border-blue-900 bg-white flex items-center justify-center gap-2 mb-2">
                        Contact Us
                    </button>
                </div>
                <div className="flex  items-center justify-center text-center gap-40 mt-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-5xl">9+</p>
                        <p className="text-xl text-gray-400">
                             Years in Business
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-5xl">1,200+</p>
                        <p className="text-xl text-gray-400"> Active Customers</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-5xl">32+</p>
                        <p className="text-xl text-gray-400">MSP Partners</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-5xl">99.9%</p>
                        <p className="text-xl text-gray-400">Uptime SLA</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-900 text-white flex flex-col items-center py-30">
                <h1 className="font-bold text-5xl">Ready to Get Started?</h1>
                <h1 className="font-bold text-2xl my-10">Talk to an engineer. Get a quote. Deploy in weeks, not months.</h1>
                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-blue-900 font-bold bg-white hover:bg-gray-400 flex items-center justify-center gap-2 mb-2">
                        Contact Us
                        <img src={rightArrow} alt="arrow" className="h-5 w-5" />
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-hite border-2 border-gray-300  bg-blue-900 hover:bg-white hover:text-blue-9 00 flex items-center justify-center gap-2 mb-2">
                        Read Our Story
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}