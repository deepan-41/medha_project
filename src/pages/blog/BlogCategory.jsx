import sree from "../../assets/sreenivasa-reddy-award.png"
import microsoftBlog from "../../assets/microsoft_blog.jpg"
import { Link } from "react-router-dom"

export default function CategoryPage(){
    return(
        <>
        <div className="flex flex-col md:flex-row">
            <div className="p-10 lg:w-9/12"> 
            <h1 className="text-4xl font-extrabold" >Microsoft 365 Statistics 2026: Market Share, Adoption & Pricing Data</h1>
            <div>
                <div className="flex items-center gap-5 my-5">
                    <span>
                        <p className="font-bold text-sm">Sreenivasa Reddy G</p>
                        <p className="text-xs">Founder & CEO</p>
                    </span>
                    <p className=" text-sm">Mar 14,2026</p>
                    <p className="text-sm">14 Min read</p>
                </div>
                <img src={microsoftBlog} alt="microsoft blog"
                className="rounded-xl my-15"
                />
                <p className="text-xl">
                    Microsoft 365 has approximately 446 million paid seats globally and commands roughly 58% market 
                    share in enterprise productivity software. This page compiles the most important Microsoft 365 
                    statistics for 2026 — market share, pricing, adoption rates, revenue, and how it compares to 
                    Google Workspace across different segments.
                </p>
            </div>
                <section>
                    <h1 className="text-3xl font-extrabold mt-10 mb-5">Microsoft 365 vs Google Workspace Market Share</h1>
                    <p className="text-xl">Market share numbers depend heavily on how you measure: by total domains, 
                        by paid enterprise seats, or by revenue. Google Workspace leads in total domain count 
                        (driven by small businesses and education). Microsoft 365 dominates in enterprise seats and 
                        revenue.
                    </p>
                    <table className="w-full border boder-gray-200 my-10 rounded-2xl">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-3 border-r">METRIC</th>
                                <th className="p-3 border-r">MICROSOFT 365</th>
                                <th className="p-3 ">GOOGLE WORKSPACE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-3 border-r">Overall market share (by domains)</td>
                                <td className="p-3 border-r">45.46%</td>
                                <td className="p-3">50.34%</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Enterprise market share (1,000+ employees)</td>
                                <td className="p-3 border-r">~58%</td>
                                <td className="p-3">~32%</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Fortune 500 usage</td>
                                <td className="p-3 border-r">75%</td>
                                <td className="p-3">42%</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Total paid seats (global)</td>
                                <td className="p-3 border-r">~446 million</td>
                                <td className="p-3">~10 million paid business</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Education + free tiers</td>
                                <td className="p-3 border-r">Large but undisclosed</td>
                                <td className="p-3">3+ billion (Gmail, free tier)</td>
                            </tr>
                        </tbody>  
                    </table>
                    <div className="flex gap-5 mb-5">
                        <div className="bg-gray-100 px-3 py-8  flex flex-col items-center gap-5 rounded w-6/12">
                            <h1 className="text-3xl font-bold text-blue-700">446M</h1>
                            <p className="text-sm">Microsoft 365 paid seats globally</p>
                        </div>
                        <div className="bg-gray-100 px-3 py-8  flex flex-col items-center gap-5 rounded w-6/12">
                            <h1 className="text-3xl font-bold text-blue-700">75%</h1>
                            <p className="text-sm flex">Fortune 500 companies on M365</p>
                        </div>
                    </div>
                    <div className="text-xl font-semibold flex flex-col gap-5">
                        <p>1. Microsoft 365 has approximately 446 million paid seats globally.</p>
                        <p>2. Google Workspace holds 50.34% overall market share when measured by total domains (includes small/micro businesses).</p>
                        <p>3. Microsoft 365 holds 45.46% overall market share by domains but ~58% of the enterprise segment.</p>
                        <p>4. 75% of Fortune 500 companies use Microsoft 365 as their primary productivity suite.</p>
                        <p>5. Google Workspace is used by 42% of Fortune 500 companies (many run both).</p>
                    </div>
                </section>
                <section className="my-10">
                    <h1 className="text-4xl font-extrabold ">Enterprise Adoption & Seat Count</h1>
                    <div className="flex gap-5 my-10">
                        <div className="py-8 w-4/12 bg-gray-100 flex  flex-col items-center rounded-xl gap-3">
                            <h1 className="text-4xl font-bold text-violet-600">320M+</h1>
                            <p className="text-sm">Teams monthly active users</p>
                        </div>
                        <div className="py-8 w-4/12 bg-gray-100 flex  flex-col items-center rounded-xl gap-3">
                            <h1 className="text-4xl font-bold text-blue-600">200M+</h1>
                            <p className="text-sm">SharePoint Online users</p>
                        </div>
                        <div className="py-8 w-4/12 bg-gray-100 flex  flex-col items-center rounded-xl gap-3">
                            <h1 className="text-4xl font-bold text-orange-600">400B+</h1>
                            <p className="text-sm">Emails processed monthly</p>
                        </div>
                    </div>
                    <div className="text-xl font-semibold flex flex-col gap-5">
                        <p>1. Microsoft 365 commercial seat count grew 12% year-over-year in 2025.</p>
                        <p>2. 64% of organizations run dual-stack environments, using both Microsoft 365 and Google Workspace.</p>
                        <p>3. Teams has 320+ million monthly active users.</p>
                        <p>4. SharePoint Online is used by 200+ million users across M365 tenants.</p>
                        <p>5. Exchange Online processes 400+ billion emails per month. With that volume comes risk — our email security statistics show 91% of cyberattacks still start with email.</p>
                        <p>6. 92% of M365 enterprise customers use at least three M365 workloads (Exchange, Teams, SharePoint, OneDrive).</p>
                        <p>7. M365 Copilot (AI assistant) is licensed by over 2 million organizations as of Q1 2026.</p>
                    </div>
                </section>
                <section>
                    <h1 className="text-4xl font-extrabold">Microsoft 365 Pricing Comparison</h1>
                    <table className="w-full border boder-gray-200 my-10 rounded-2xl">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-3 border-r">PLAN</th>
                                <th className="p-3 border-r">PRICE (PER USER/MONTH)</th>
                                <th className="p-3 ">KEY INCLUSIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-3 border-r">Business Basic</td>
                                <td className="p-3 border-r">$6.00</td>
                                <td className="p-3">Web/mobile Office apps, 1TB OneDrive, Teams, Exchange</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Business Standard</td>
                                <td className="p-3 border-r">$12.50</td>
                                <td className="p-3">Desktop apps, webinars, Loop, Clipchamp</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Business Premium</td>
                                <td className="p-3 border-r">$22.00</td>
                                <td className="p-3">Intune, Defender, Azure AD P1, Purview</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Enterprise E3</td>
                                <td className="p-3 border-r">$36.00</td>
                                <td className="p-3">Advanced compliance, eDiscovery, unlimited archive</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Enterprise E5</td>
                                <td className="p-3 border-r">$57.00</td>
                                <td className="p-3">Defender P2, Phone System, Power BI Pro</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3 border-r">Copilot Add-on</td>
                                <td className="p-3 border-r">$30.00</td>
                                <td className="p-3">AI assistant across all M365 apps</td>
                            </tr>
                        </tbody>  
                    </table>
                    <div className="text-xl font-semibold flex flex-col gap-5">
                        <p>1. Microsoft 365 Business Basic starts at $6.00/user/month.</p>
                        <p>2. Business Standard costs $12.50/user/month and includes desktop Office apps.</p>
                        <p>3. Business Premium at $22.00/user/month adds Intune MDM, Defender, and Azure AD P1.</p>
                        <p>4. Enterprise E3 costs $36.00/user/month.</p>
                        <p>5. Enterprise E5 with full security and compliance: $57.00/user/month.</p>
                        <p>6. M365 Copilot adds $30.00/user/month on top of any qualifying plan.</p>
                    </div>
                    <h1 className="text-2xl my-10">
                        Need help choosing the right Microsoft 365 plan or want volume licensing discounts? See  
                        <Link 
                            to="/cloud-hosting/microsoft"
                            className="text-blue-500"
                        >
                            Medha Cloud's Microsoft 365 licensing and deployment services
                        </Link>
                        .
                    </h1>
                </section>
            </div>

            <div className="flex flex-col gap-5 sticky top-24 self-start z-[-1]" >
                <div className="w-60  max-h-90 border rounded-2xl">
                    <h1 className="font-semibold p-3 mb-2 bg-gray-100 rounded-t-2xl">Contents</h1>
                    <div className="max-h-60  overflow-y-auto">
                        <ul className="space-y-2 text-sm text-gray-800 mx-5 ">
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Table of Contents</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Microsoft 365 vs Google Workspace Market Share</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Enterprise Adoption & Seat Count</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Microsoft 365 Pricing Comparison</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Google Workspace Pricing Comparison</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Microsoft 365 Revenue</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">Enterprise SaaS Spending</li>
                            <li className="p-2 hover:bg-gray-100 rounded-lg">AI Features & Copilot Adoption</li>
                        </ul>
                    </div>
                </div>
                <div className="border p-3.5 rounded-2xl">
                    <h2>AUTHOR</h2>
                    <div className="flex gap-5 mt-3.5">
                        <img src={sree} alt="Sreenivasa Reddy G" className="h-10 w-10 rounded-full"/>
                        <span>
                            <p>Sreenivasa Reddy G</p>
                            <p>Founder & CEO</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}