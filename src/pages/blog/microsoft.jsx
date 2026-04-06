import  {Link } from "react-router-dom"
import rightArrow from "../../assets/rightarrow.png"

export default function MicroSoftBlog(){
    const microsoftBlog = [
        {
            id: "microsoft-365-statistics-2026",
            title: "Microsoft 365 Statistics 2026: Market Share, Adoption & Pricing Data",
            desc: "Comprehensive Micosoft 365 statistis for 2026: 446M paid seats, market share vs Google workspace, enterprise adopation rates, prcing tiers, SaaS spending trends, and revenue data.",
            date : "Mar 14 2026",
            read : 14,
            author: "Medha Cloud",
            slug : "statistics-2026"
        }
    ]
    return(
        <>
            <section className="bg-orange-500 px-10 py-20 text-white">
                <nav className="flex gap-3">
                    <Link to="/">Home</Link>
                    /
                    <Link to="/blog">Blog</Link> 
                    /
                    <Link to="/blog/microsoft-365">
                        Microsoft-365
                    </Link>
                </nav>
                
                <h1 className="text-5xl font-bold mt-5">Microsoft 365 Blog: Licensing, Administration & Expert Guides</h1>
                <p className="text-2xl w-10/13 font-light my-5">
                    Master Microsoft 365 — from licensing and plan selection to Exchange Online administration and Teams deployment. Guides from certified Microsoft professionals.
                </p>
                <div className="flex text-sm gap-5">
                    <p>325 Articles</p>
                    <p>11 Expert Authors</p>
                    <p>Updated Weekly</p>
                </div>
                <div className="p-3 border-[0.5px] w-fit bg-orange-450 rounded-xl gap-3 mt-8">
                    <span>Related Service:</span>   
                    <Link to="cloud-hosting/microsoft">
                          Microsoft 365 Plans & Pricing
                    </Link>
                </div>
            </section>
            <section className="bg-gray-300 p-10 ">
                <div className="flex flex-col gap-5 w-9/13">
                    <p>
                    Our Microsoft 365 blog covers everything from licensing decisions and plan comparisons to 
                    Exchange Online administration, SharePoint deployment, and Teams optimization. With 477+ 
                    articles, this is one of the most comprehensive M365 resources on the web.
                    </p>
                    <p>
                        Whether you're comparing Microsoft 365 Business vs Enterprise plans, planning a migration to 
                        Microsoft 365, or troubleshooting Exchange Online mail flow rules, our certified Microsoft 
                        professionals have written step-by-step guides for every scenario.
                    </p>
                    <p>
                        Key topics include Microsoft 365 licensing and plan selection 
                        (Business Basic, Standard, Premium, E3, E5), Exchange Online administration and mail flow 
                        configuration, SharePoint Online site management and permissions, Microsoft Teams deployment 
                        and governance, OneDrive for Business storage management, and Microsoft Copilot integration
                        guides.
                    </p>
                    <p>
                        Use our free M365 License Comparison tool to find the right plan for your organization, 
                        or read our comprehensive Microsoft 365 Licensing Guide — a 14-chapter deep dive into every plan,
                        add-on, and pricing tier available in 2026.
                    </p>
                </div> 
            </section>
            <section className="p-10">
                <div className="flex flex-col gap-5">
                    {microsoftBlog.map(blog => 
                        <Link to={`/blog/microsoft-365/${blog.slug}`}>
                            <div className="group p-3.5 shadow-2xl border border-gray-400 rounded-2xl hover:border-blue-700 lg:w-8/12">
                                <div className="flex gap-8">
                                    <span>{blog.date}</span>
                                    <span>{blog.read} min read</span>
                                    <span>{blog.author}</span>
                                </div>
                                <h1 className="font-bold text-lg group-hover:text-blue-700">{blog.title}</h1>
                                <p className="my-3">{blog.desc}</p>
                                <div className="flex items-center align-middle gap-2 text-blue-700">
                                    Read Article
                                    <img src={rightArrow}  alt="arrow" className="h5 w-5" />
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </section>
        </>
    )
}