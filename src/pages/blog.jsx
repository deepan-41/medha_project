import { Link } from "react-router-dom";

export default function Blog(){
    const blogs = [
        { id : 1, title: "Microsoft 365 Statistics 2026: Market Share, Adoption & Pricing Data", desc: "Comprehensive Microsoft 365 statistics for 2026: 446M paid seats, market share vs Google Workspace, enterprise adopation rates, pricing"}
    ]
    return(
        <>
            <section className="bg-blue-800 px-10 py-20 text-white">
                <nav className="flex gap-3">
                    <Link to="/">Home</Link>
                    /
                    <Link to="/blog">Blog</Link>
                </nav>
                
                <h1 className="text-5xl font-bold mt-5">Medha Cloud Blog</h1>
                <p className="text-2xl w-10/13 font-light my-5">
                    Expert insights on cloud computing, Microsoft 365, Azure, cybersecurity, and managed IT services. Guides and tutorials from certified IT professionals.
                </p>
                <div className="flex text-sm gap-5">
                    <p>706+ Articles</p>
                    <p>14 Categories</p>
                    <p>Updated Weekly</p>
                </div>
            </section>

            <section>
                <h1>Browse by Category</h1>
                <p>Explore our service-aligned blog categories — each one connected to expert services and solutions.</p>
            </section>
            <Link to="microsoft-365">micro</Link>
        </>
    )
}