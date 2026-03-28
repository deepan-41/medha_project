export default function HostingSolutions(){
    return(
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    VPS & Dedicated Server Hosting
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    Managed cloud hosting with NVMe SSD storage — VPS from $6/month, bare metal dedicated servers from $49/month, colocation, and private cloud. 99.99% uptime SLA with 24/7 support. Deploy in minutes from India or USA data centers.
                </h1>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white font-bold bg-orange-400 hover:bg-orange-600 flex items-center justify-center gap-2 mb-2">
                        View All Solutions
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-black border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        Schedule Consultation
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-300 p-20" >
                <h1 className="font-bold text-5xl">
                    Built for Reliability
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    99.99% uptime guarantee. 24/7 expert support. Serving businesses since 2016.
                </h1>

                <div className="flex  items-center justify-center text-center gap-20 mt-10 mb-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">1,200+</p>
                        <p className="text-sm text-black">Happy Customers</p>
                    </div>
                    <div className="flex flex-col"> 
                        <p className="flex font-bold text-4xl">99.99%</p>
                        <p className="text-sm text-black">Guaranteed Uptime SLA</p>
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