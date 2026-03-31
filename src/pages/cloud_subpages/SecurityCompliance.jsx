export default function SpecialtySolutions(){
    return(
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    HIPAA & PCI Compliant Cloud Hosting
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    HIPAA compliant hosting with BAA included and SOC 2 Type II certification. PCI-DSS Level 1 infrastructure for healthcare and e-commerce. SSL certificates from RapidSSL, GeoTrust, DigiCert starting at $16/year with AES-256 encryption and up to $2M warranty.
                </h1>
                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white font-bold bg-orange-400 hover:bg-orange-600 flex items-center justify-center gap-2 mb-2">
                        Browse SSL Certificates
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-black border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        Talk to Compliance Expert
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-300 p-20" >
                <h1 className="font-bold text-5xl">
                    Enterprise-Grade Protection
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    SSL certificates from world-leading Certificate Authorities. Serving customers since 2016.
                </h1>

                <div className="flex  items-center justify-center text-center gap-20 mt-10 mb-10">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">256-bit</p>
                        <p className="text-sm text-black">Encryption</p>
                    </div>
                    <div className="flex flex-col"> 
                        <p className="flex font-bold text-4xl">$2M</p>
                        <p className="text-sm text-black">Max Warranty</p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" flex font-bold text-4xl">99.9%</p>
                        <p className="text-sm text-black">Browser Trust</p>
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