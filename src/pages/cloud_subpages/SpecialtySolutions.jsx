export default function SpecialtySolutions(){
    return(
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    Application & Database Cloud Hosting
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    Managed hosting for web applications, SQL/NoSQL databases, ERP systems (SAP S/4HANA, Odoo), HIPAA healthcare workloads, and PCI-DSS e-commerce platforms. Starting from $29/month with 24/7 expert support and 99.99% uptime SLA.
                </h1>
                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white font-bold bg-orange-400 hover:bg-orange-600 flex items-center justify-center gap-2 mb-2">
                        Browse Hosting Solutions
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-black border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        Contact Sales Team
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-300 p-20" >
                <h1 className="font-bold text-5xl">
                    Trusted by Businesses Worldwide
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    Your reliable specialty hosting partner. 9+ years of expertise since 2016.
                </h1>

                <div className="flex  items-center justify-center text-center gap-20 mt-10 mb-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">1,200+</p>
                        <p className="text-sm text-black">Businesses Worldwide</p>
                    </div>
                    <div className="flex flex-col"> 
                        <p className="flex font-bold text-4xl">9+</p>
                        <p className="text-sm text-black">Years of Expertise</p>
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