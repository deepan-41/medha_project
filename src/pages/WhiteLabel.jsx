export default function WhiteLabel(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-4xl w-90 sm:w-full sm:text-5xl">
                    White Label Managed Services for MSPs
                </h1>
                <p className="text-xl font-semibold mt-5 mb-8 text-gray-600 w-90 sm:max-w-3xl text-center">
                    White label MSP services — we answer tickets, monitor servers, and handle incidents under your brand.
                     Our MSP helpdesk, MSP NOC services, and service desk outsourcing let you scale without hiring.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-8 py-3 rounded-md text-white bg-blue-900 hover:bg-blue-500 flex items-center justify-center gap-2 mb-2">
                        Start Free Trial
                    </button> 
                    <button className="px-8 py-3 rounded-md text-black border-2 border-gray-300 hover:border-blue-900 bg-white flex items-center justify-center gap-2 mb-2">
                        View Pricing 
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-100 pt-25 pb-20">
                <h2 className="font-bold text-3xl w-90 sm:w-full sm:text-3xl">
                    Outsourced NOC, SOC & Helpdesk — Trusted by MSPs Worldwide
                </h2>
                <p className="text-xl mt-5 mb-8 text-gray-800 w-90 sm:max-w-3xl sm:text-lg">
                    MSPs worldwide use our managed NOC and 24/7 NOC services from Bangalore—5X cheaper than onshore, invisible to their clients
                </p>

                <div className="grid grid-cols-2 sm:flex  items-center justify-center text-center gap-40 mt-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">32</p>
                        <p className="text-sm text-gray-400">
                             Active MSP Partners
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">99.99%</p>
                        <p className="text-sm text-gray-400"> SLA Uptime</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">24/7</p>
                        <p className="text-sm text-gray-400">Support Coverage</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">4.9/5</p>
                        <p className="text-sm text-gray-400">Partner Satisfaction</p>
                    </div>
                </div>
            </section>
        </>
    )
}