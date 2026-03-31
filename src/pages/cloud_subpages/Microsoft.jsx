export default function Microsoft(){
    return(
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    Microsoft 365 & Azure Cloud Solutions
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    Authorized Microsoft Cloud Solution Provider. Microsoft 365 Business Standard, Business Premium, and Enterprise plans with migration support. Azure cloud infrastructure — IaaS, PaaS, and hybrid deployments. 9+ years serving 1,200+ businesses.
                </h1>
                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white font-bold bg-orange-400 hover:bg-orange-600 flex items-center justify-center gap-2 mb-2">
                        Contact Us Now
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-black border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        View All Solutions
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-300 p-20" >
                <h1 className="font-bold text-5xl">
                    Trusted Microsoft Cloud Partner
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    The world's leading productivity and cloud platform. Serving customers since 2016.
                </h1>

                <div className="flex  items-center justify-center text-center gap-20 mt-10 mb-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">500M+</p>
                        <p className="text-sm text-black">Microsoft 365 Users</p>
                    </div>
                    <div className="flex flex-col"> 
                        <p className="flex font-bold text-4xl">60+</p>
                        <p className="text-sm text-black">Azure Regions</p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" flex font-bold text-4xl">99.99%</p>
                        <p className="text-sm text-black">Uptime SLA</p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" flex font-bold text-4xl">24/7</p>
                        <p className="text-sm text-black">Expert Support</p>
                    </div>
                </div>
            </section>
        </>
    )
}