import rightArrow from "../assets/rightarrow.png";
import badge from "../assets/medal.png"
import tick from "../assets/checkmark.png"
import call from "../assets/call.png"
import time from "../assets/time.png"
import location from "../assets/navigation.png"

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

            <section className="px-20 pt-30 pb-20 flex flex-col items-center justify-center bg-gray-300">
                <h1 className="text-4xl font-bold">
                    Certifications & Compliance
                </h1>
                <h1 className="text-xl m-10">
                    Industry-recognized certifications and compliance standards that protect your data and guarantee quality service.
                </h1>
                <div className="grid grid-cols-3 gap-10">
                    <div className="p-8 rounded 2 bg-white">
                        <div className="p-3 w-3/12 bg-indigo-100 rounded">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        </div>
                        <h1 className="font-bold text-xl my-5">
                            ISO 9001:2015
                        </h1>
                        <p className="text-l w-70 mb-3">
                            Quality Management System 
                            certification for consistent service
                            delivery and continuous improvement.
                        </p>
                        <div className="flex gap-3 items-center">
                            <img src={tick} alt="tick" className="h-5 w-5" />
                            <span className="text-blue-800 text-sm font-bold">Certified Since 2016</span>
                        </div>
                    </div>

                    <div className="p-8 rounded 2 bg-white">
                        <div className="p-3 w-3/12 bg-indigo-100 rounded">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        </div>
                        <h1 className="font-bold text-xl my-5">SOC 2 Compliant</h1>
                        <p className="text-l w-70 mb-3">
                            Security, availability, and confidentiality controls audited by independent third parties.
                        </p>
                        <div className="flex gap-3 items-center">
                            <img src={tick} alt="tick" className="h-5 w-5" />
                            <span className="text-blue-800 text-sm font-bold">
                                Annual Audits
                            </span>
                        </div>
                    </div>

                    <div className="p-8 rounded 2 bg-white">
                        <div className="p-3 w-3/12 bg-indigo-100 rounded">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        </div>
                        <h1 className="font-bold text-xl my-5">HIPAA Certified</h1>
                        <p className="text-l w-70 mb-3">
                            Healthcare data protection standards for hosting medical applications and patient information.
                        </p>
                        <div className="flex gap-3 items-center">
                            <img src={tick} alt="tick" className="h-5 w-5" />
                            <span className="text-blue-800 text-sm font-bold">
                                Healthcare Ready
                            </span>
                        </div>
                    </div>

                    <div className="p-8 rounded 2 bg-white">
                        <div className="p-3 w-3/12 bg-indigo-100 rounded">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        </div>
                        <h1 className="font-bold text-xl my-5">PCI-DSS</h1>
                        <p className="text-l w-70 mb-3">
                           Payment Card Industry Data Security Standard for secure payment processing and data handling.
                        </p>
                        <div className="flex gap-3 items-center">
                            <img src={tick} alt="tick" className="h-5 w-5" />
                            <span className="text-blue-800 text-sm font-bold">Payment Secure</span>
                        </div>
                    </div>

                    <div className="p-8 rounded 2 bg-white">
                        <div className="p-3 w-3/12 bg-indigo-100 rounded">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        </div>
                        <h1 className="font-bold text-xl my-5">
                            99.9% Uptime SLA
                        </h1>
                        <p className="text-l w-70 mb-3">
                            Guaranteed uptime backed by service level agreements with financial penalties for downtime.
                        </p>
                        <div className="flex gap-3 items-center">
                            <img src={tick} alt="tick" className="h-5 w-5" />
                            <span className="text-blue-800 text-sm font-bold">
                                Money-Back Guarantee
                            </span>
                        </div>
                    </div>

                    <div className="p-8 rounded 2 bg-white">
                        <div className="p-3 w-3/12 bg-indigo-100 rounded">
                            <img src={badge} alt="badge" className="h-8 w-8 " />
                        </div>
                        <h1 className="font-bold text-xl my-5">
                            Engineer Certifications
                        </h1>
                        <p className="text-l w-70 mb-3">
                            CompTIA, Microsoft MCSA, Cisco CCNA certified engineers on staff for expert technical support.
                        </p>
                        <div className="flex gap-3 items-center">
                            <img src={tick} alt="tick" className="h-5 w-5" />
                            <span className="text-blue-800 text-sm font-bold">
                                Industry Certified
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-30 px-10 flex flex-col items-center">
                <h1 className="font-bold text-4xl ">
                    Global Operations
                </h1>
                <p className="text-xl mt-5 mb-15">
                    Two offices, one mission: deliver reliable cloud infrastructure and support to businesses worldwide.
                </p>
                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-blue-50 rounded p-10">
                        <div className="flex gap-3">
                            <div className="p-3  bg-blue-900 rounded">
                            <img src={location} alt="location" className="h-8 w-8 " />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl">USA Office</span>
                                <span>MedhaCloud Inc.</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-5 mb-2">
                            <img src={location} alt="location" className="h-5 w-5 " />
                            <span>Address</span>
                        </div>
                        <p className="ml-5">30 N Gould St Ste R <br/>
                            Sheridan, WY 82801 <br/>
                            United States
                        </p>
                        <div className="flex items-center gap-2 mt-5 mb-2">
                            <img src={call} alt="call" className="h-5 w-5 " />
                            <span>Phone</span>
                        </div>
                        <a href="tel:+16467752855" className="ml-5 text-blue-800">+16467752855</a>
                        <div className="flex items-center gap-2 mt-5 mb-2">
                            <img src={time} alt="time" className="h-5 w-5 " />
                            <span>Business Hours</span>
                        </div>
                        <p className="ml-5">Mon-Fri 9am-6pm EST</p>
                    </div>
                    <div className="bg-orange-50 rounded p-10">
                        <div className="flex gap-3">
                            <div className="p-3  bg-blue-900 rounded">
                            <img src={location} alt="location" className="h-8 w-8 " />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl">India Headquarters</span>
                                <span>Medhacloud Solutions Private Limited</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-5 mb-2">
                            <img src={location} alt="location" className="h-5 w-5 " />
                            <span>Address</span>
                        </div>
                        <p className="ml-5">#74, 7th Cross, Krishna Garden<br/>
                            Bangalore 560083<br/>
                            India
                        </p>
                        <div className="flex items-center gap-2 mt-5 mb-2">
                            <img src={call} alt="call" className="h-5 w-5 " />
                            <span>Phone</span>
                        </div>
                        <a href="tel:+91 93536 44646" className="ml-5 text-orange-400">
                            +91 93536 44646
                        </a>
                        <div className="flex items-center gap-2 mt-5 mb-2">
                            <img src={time} alt="time" className="h-5 w-5 " />
                            <span>Business Hours</span>
                        </div>
                        <p className="ml-5">Mon-Fri 9am-6pm EST</p>
                    </div>
                </div>
                <p className="my-10 text-lg">
                    For general inquiries, email us at:
                </p>
                <a href="mailto:sales@medhacloud.com" className="text-blue-900 font-bold text-2xl">
                    sales@medhacloud.com
                </a>
            </section>

            <section className="bg-blue-900 text-white flex flex-col items-center py-30">
                <h1 className="font-bold text-5xl">
                    Ready to Get Started?
                </h1>
                <h1 className="font-bold text-2xl my-10">
                    Talk to an engineer. Get a quote. Deploy in weeks, not months.
                </h1>
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
        </>
    )
}