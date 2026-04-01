import badge from "../../assets/medal.png"
import Calculator from "../../components/ROI_Calculator";
export default function ManagedItServices(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    White Label Managed IT Services for MSPs
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-150">
                  White label managed IT services — add helpdesk, NOC, and endpoint security in 48 hours. Our white label IT services are 5X cheaper than onshore NOCs. Clients never see us. Starting at $1,600/mo.
                </h1>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-blue-900 hover:bg-blue-500 flex items-center justify-center gap-2 mb-2">
                        View All Services
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:border-blue-900 bg-white flex items-center justify-center gap-2 mb-2">
                        Start Free Trial
                    </button>
                </div>
            </section>

            <section className="px-20 pt-30 pb-20 flex flex-col items-center justify-center bg-white">
                            <h1 className="text-4xl font-bold">
                                CFull White Label Managed IT Service Stack
                            </h1>
                            <h1 className="text-xl m-10">
                                Outsourced helpdesk, NOC monitoring, firewall management, and Microsoft 365 administration — delivered under your brand by certified engineers
                            </h1>
                            <div className="grid grid-cols-3 gap-5">
                                <div className="p-5 rounded-2xl bg-white  border-2 border-gray-200 hover:border-blue-900">
                                    <img src={badge} alt="badge" className="h-8 w-8 " />
                                    <h1 className="font-bold text-xl my-5">
                                        Go Live in 48 Hours
                                    </h1>
                                    <p className="text-l w-70 ">
                                        Start Monday. Bill clients Friday. No hiring. No training.
                                    </p>
                                </div>
            
                                <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-900">
                                        <img src={badge} alt="badge" className="h-8 w-8 " />
                                    <h1 className="font-bold text-xl my-5">MCSE, CCNA, CompTIA Certified</h1>
                                    <p className="text-l w-70 mb-3">
                                        Bangalore engineers with 5+ years MSP experience. No hiring costs.
                                    </p>
                                </div>
            
                                <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-900">
                                        <img src={badge} alt="badge" className="h-8 w-8 " />
                                    <h1 className="font-bold text-xl my-5">10 to 10,000 Endpoints—No Extra Setup</h1>
                                    <p className="text-l w-70 mb-3">
                                        Scale up or down monthly. No infrastructure investment needed.
                                    </p>
                                </div>
            
                                <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-900">
                                        <img src={badge} alt="badge" className="h-8 w-8 " />
                                    <h1 className="font-bold text-xl my-5">100% Your Brand</h1>
                                    <p className="text-l w-70 mb-3">
                                        Tickets, portals, reports—your logo only. We stay invisible
                                    </p>
                                </div>
            
                                <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-900">
                                        <img src={badge} alt="badge" className="h-8 w-8 " />
                                    <h1 className="font-bold text-xl my-5">24/7 Across All Time Zones</h1>
                                    <p className="text-l w-70 mb-3">
                                        3 AM or 3 PM—same quality support. No night shifts to staff.
                                    </p>
                                </div>
            
                                <div className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-900">
                                        <img src={badge} alt="badge" className="h-8 w-8 " />
                                    <h1 className="font-bold text-xl my-5">32 MSP Partners Worldwide Run 24/7 Through Us</h1>
                                    <p className="text-l w-70 mb-3">
                                        99.99% uptime SLA. Start in 48 hours. 9+ years supporting MSP operations.
                                    </p>
                                </div>
                            </div>
            </section>
            <Calculator />
        </>
    )
}