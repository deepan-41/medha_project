import badge from "../../assets/medal.png"

export default function NocSocCloud(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    NOC, SOC & Cloud Services for MSPs
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-150">
                 NOC as a service, managed SOC, and cloud services — all white-labeled under your brand. Our outsourced NOC and MSP NOC services are 5X cheaper than onshore teams. Starting at $1,600/month.
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
                    NOC as a Service — White Label for MSPs
                </h1>
                <h1 className="text-xl m-10">
                    Managed NOC services, outsourced SOC monitoring, and cloud management—delivered 24/7 under your brand from $1,600/mo
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
                        <h1 className="font-bold text-xl my-5">Certified Security Experts</h1>
                        <p className="text-l w-70 mb-3">
                            CISSP, CEH, CCNA certified engineers with 5+ years experience. No hiring costs.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-900">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        <h1 className="font-bold text-xl my-5">Scale Without Infrastructure Investment</h1>
                        <p className="text-l w-70 mb-3">
                           From 10 to 10,000 endpoints. Scale up or down monthly with no capital expense.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-900">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        <h1 className="font-bold text-xl my-5">100% Your Brand</h1>
                        <p className="text-l w-70 mb-3">
                            Reports, dashboards, alerts—your logo only. We stay invisible.
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
                        <h1 className="font-bold text-xl my-5">Trusted by 32 MSPs Worldwide</h1>
                        <p className="text-l w-70 mb-3">
                            99.99% uptime SLA. Start in 48 hours. 9+ years supporting MSP operations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}