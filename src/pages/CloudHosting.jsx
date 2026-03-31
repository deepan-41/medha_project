import { Link } from "react-router-dom";

import shield from "../assets/encrypted.png";
import rightArrow from "../assets/rightarrow.png";
import cloud from "../assets/cloud.png";
import tick from "../assets/checkmark.png";
import dataServer from "../assets/data-server.png";

export default function CloudHosting(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-30" >
                <h1 className="font-bold text-5xl">
                    Cloud Hosting Services: 99.99% Uptime SLA & 24/7 Expert Support
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    2025 cloud hosting services with 99.99% uptime SLA. VPS from $6/month to enterprise cloud hosting. Microsoft 365, Azure cloud hosting,
                     and managed infrastructure. Trusted by 1,200+ businesses worldwide.
                </h1>

                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white font-bold bg-orange-400 hover:bg-orange-600 flex items-center justify-center gap-2 mb-2">
                        Contact us now
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-black border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        View All Solutions
                    </button>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-center bg-gray-300 p-30" >
                <h1 className="font-bold text-5xl">
                    Enterprise Cloud Infrastructure: Global Data Centers
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    Trusted cloud hosting infrastructure serving 1,200+ businesses worldwide with mission-critical cloud hosting services since 2016.
                </h1>

                <div className="flex  items-center justify-center text-center gap-20 mt-10 mb-20">
                    <div className="flex flex-col">
                        <p className="font-bold text-4xl">1,200+</p>
                        <p className="text-sm text-black">Happy Customers</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="flex font-bold text-4xl">99.99%</p>
                        <p className="text-sm text-black">Uptime SLA</p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" flex font-bold text-4xl">24/7</p>
                        <p className="text-sm text-black">Expert Support</p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" flex font-bold text-4xl">ISO 9001</p>
                        <p className="text-sm text-black">Certified</p>
                    </div>
                </div>
            </section>
            
            <section className="flex flex-col items-center py-20">
                <h1 className="font-bold text-4xl">
                    Managed Cloud Hosting Solutions: VPS to Enterprise
                </h1>
                <p className="text-xl mt-5 mb-8 text-gray-800 ">
                    Comprehensive solutions for every hosting and cloud infrastructure need
                </p>
                <div className="grid grid-cols-2 gap-5">
                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-amber-400">
                        <img src={cloud} alt="protection" className="h-5 w-5" />
                        <h1 className="font-bold text-xl mt-8 mb-2 w-10/12">
                            Infrastructure Hosting: VPS Dedicated, and Colocation
                        </h1>
                        <p className="text-sm mb-5">
                            VPS, Dedicated Servers, Colocation, Private Cloud, Public Cloud hosting
                        </p>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Cloud hosting VPS from $6/Month</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Dedicated cloud hosting infrastrure</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Colocation services</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Private and public hsting solutions</span>
                        </div>
                        <Link to="/cloud-hosting/hosting-solutions"
                        className="flex text-orange-300 items-center mt-5">
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-amber-400">
                        <img src={dataServer} alt="protection" className="h-5 w-5" />
                        <h1 className="font-bold text-xl mt-8 mb-2 w-10/12">
                            Compliance Hosting: HIPAA, PCI-DSS, and ERP Solutions
                        </h1>
                        <p className="text-sm mb-5">
                            Managed Appkication, Database, ERP, HIPAA, PCI-DSS, SAP hosting
                        </p>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Managed cloud hosting applictions</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Database cloud hosting and Optimization</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>ERP and SAP cloud hosting</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>HIPAA and PCI-DSS compliant cloud Hosting</span>
                        </div>
                        <Link to='/cloud-hosting/specialty-hosting'
                        className="flex text-orange-300 items-center mt-5">
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>
                    
                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-amber-400">
                        <img src={shield} alt="protection" className="h-5 w-5" />
                        <h1 className="font-bold text-xl mt-8 mb-2 w-10/12">
                            Microsoft Cloud Platform: 365 and Azure Infrastructure
                        </h1>
                        <p className="text-sm mb-5">
                            Microsoft 365 productivity tools and Azure cloud infrastructure
                        </p>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Mircosoft 365 cloud hosting administration</span> 
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Azure cloud hosting infrastructure</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Hybrid cloud hosting solutions</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Microsoft licensing support</span>
                        </div>
                        <Link to="/cloud-hosting/microsoft"
                        className="flex text-orange-300 items-center mt-5">
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>

                    <div className="border-gray-300 border-2 rounded-2xl p-8 hover:border-amber-400">
                        <img src={shield} alt="protection" className="h-5 w-5" />
                        <h1 className="font-bold text-xl mt-8 mb-2 w-10/12">
                            Security Standards: SSl,ISO 9001 and SLA Guarantees
                        </h1>
                        <p className="text-sm mb-5">
                            SSL Certificates, ISO 9001, Sla and Compliance services
                        </p>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>SSL certificate management</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>ISO 9001 Certified operations</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>99.99% uptime SLA</span>
                        </div>
                        <div className="flex gap-2 items-center text-sm my-3">
                            <img src={tick} alt="tick" className="h-4 w-4" />
                            <span>Compliance consulting</span>
                        </div>
                        <Link to="/cloud-hosting/hosting-solutions"
                        className="flex text-orange-300 items-center mt-5">
                            Learn more 
                            <img src={rightArrow} alt="arrow" className='h-5 w-5' />
                        </Link>
                    </div>
                </div>
            </section>
            {/* last section */}
            <section className="flex flex-col items-center justify-center text-center bg-gray-300 p-30" >
                <h1 className="font-bold text-5xl">
                    Instant Cloud Deployment: VPS from $6/Month
                </h1>
                <h1 className="text-xl mt-5 mb-8 text-gray-800 w-8/12">
                    Get instant cloud hosting deployment, 99.99% uptime SLA, and 24/7 cloud infrastructure support. VPS from $6/month to enterprise infrastructure.
                </h1>

                <div className="flex  items-center justify-center text-center gap-20 mt-10 mb-20">
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Instant Deploy (2025)</p>
                        <p className="text-sm text-black"> Minutes to launch</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="flex font-bold text-2xl">99.99% Uptime</p>
                        <p className="text-sm text-black">2025 Certified SLA</p>
                    </div>
                    <div className="flex flex-col">
                        <p className=" flex font-bold text-2xl">24/7 Support</p>
                        <p className="text-sm text-black">Always available</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="px-8 py-3 rounded-md text-white font-bold bg-orange-400 hover:bg-orange-600 flex items-center justify-center gap-2 mb-2">
                        Contact us now
                    </button> 
                    <button className="px-8 py-3 rounded-md font-bold text-black border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 bg-white flex items-center justify-center gap-2 mb-2">
                        View All Solutions
                    </button>
                </div>
            </section>
        </>
    )
}