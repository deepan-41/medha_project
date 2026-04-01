import  {Link } from "react-router-dom"

export default function MicroSoftBlog(){
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
        </>
    )
}