import lossGraph from "../../assets/graph.png"
import selected from "../../assets/checkmark.png"
export default function PartnerProgram(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    White Label MSP Partner Program
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-150">
                  32 MSPs use our white label services to add 24/7 coverage, NOC/SOC teams, and helpdesk support—under their brand. 5X cheaper • 48-hour start • Month-to-month contracts.
                </h1>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-blue-900 hover:bg-blue-500 flex items-center justify-center gap-2 mb-2">
                        Apply Now
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:border-blue-900 bg-white flex items-center justify-center gap-2 mb-2">
                        View Pricing 
                    </button>
                </div>
            </section>

            <section className="bg-gray-100 p-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl ">4 Problems We Fix for MSPs</h1>
                <p className="text-lg mt-5 mb-15">Scale your managed service provider business profitably. Offer 24/7 coverage. Win enterprise deals. Eliminate recruitment overhead.</p>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex  gap-5 p-8 rounded-md bg-white">
                    <img src={lossGraph} alt="loss" className="h-10 w-10"/>
                        <div >
                            <h1 className="font-bold text-xl">Can't Scale Profitably</h1>
                            <p className="text-lg my-3">Add revenue without hiring full-time staff</p>
                            <div className="flex items-center gap-2">
                                <img src= {selected} alt="seleted" className="h-5 w-5"/>
                                <p className="text-blue-800">5X cheaper than onshore NOCs</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-5 p-8 rounded-md bg-white">
                    <img src={lossGraph} alt="loss" className="h-10 w-10"/>
                        <div >
                            <h1 className="font-bold text-xl">Can't Offer 24/7 Support</h1>
                            <p className="text-lg my-3">Round-the-clock coverage under your brand</p>
                            <div className="flex items-center gap-2">
                                <img src= {selected} alt="seleted" className="h-5 w-5"/>
                                <p className="text-blue-800">Win enterprise deals requiring 24/7 SLA</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-5 p-8 rounded-md bg-white">
                    <img src={lossGraph} alt="loss" className="h-10 w-10"/>
                        <div >
                            <h1 className="font-bold text-xl">Losing Deals to Competitors</h1>
                            <p className="text-lg my-3">Expand service portfolio overnight</p>
                            <div className="flex items-center gap-2">
                                <img src= {selected} alt="seleted" className="h-5 w-5"/>
                                <p className="text-blue-800">Compete with national MSPs on service breadth</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-5 p-8 rounded-md bg-white">
                    <img src={lossGraph} alt="loss" className="h-10 w-10"/>
                        <div >
                            <h1 className="font-bold text-xl">Staff Turnover & Training</h1>
                            <p className="text-lg my-3">Pre-trained, certified engineers ready to deploy</p>
                            <div className="flex items-center gap-2">
                                <img src= {selected} alt="seleted" className="h-5 w-5"/>
                                <p className="text-blue-800">Eliminate hiring, training, and retention costs</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    Ready to Become a Partner?
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-150">
                  Join 32 MSPs worldwide delivering white label services under their own brand. Start in 48 hours.
                </h1>

                <div className="flex  items-center justify-center text-center gap-40 my-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">48 Hours</p>
                        <p className="text-sm text-gray-400">Instant onboarding</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">5X Cheaper</p>
                        <p className="text-sm text-gray-400">Than US-based NOCs</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">5X Cheaper</p>
                        <p className="text-sm text-gray-400">SLA guarantee</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-blue-900 hover:bg-blue-500 flex items-center justify-center gap-2 mb-2">
                        Apply Now
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:border-blue-900 bg-white flex items-center justify-center gap-2 mb-2">
                        Call: +1 (646) 775-2855
                    </button>
                </div>
                <p className="text-sm flex m-5">
                    Questions? Email 
                    <a href="mailto:sales@medhacloud.com"
                    className="text-blue-800">
                        sales@medhacloud.com
                    </a>
                    or call India: 
                    <a href="tel:+91 93536 44646 "
                    className="text-blue-800">
                        +91 93536 44646
                    </a>
                </p>

            </section>
        </>
    )
}