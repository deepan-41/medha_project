import { Link } from "react-router-dom";
import rightArrow from "../assets/rightarrow.png"

export default function Blog(){
    const blogsSection = [
        {   id : "microsoft-365", 
            title: "Microsoft 365", 
            articlesNum :325, 
            desc: "Master Microsoft 365 -- from licensing and plan selection to exchange Online administration and Teams depolyment. Guides from certified Microsoft...", 
            subDesc:"Microsoft 365 Plans & Pricing", 
            headerCol: "bg-orange-500"},
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

            <section className="px-10 py-15">
                <h1 className=" text-3xl font-bold flex justify-center">Browse by Category</h1>
                <p className="text-lg flex justify-center">Explore our service-aligned blog categories — each one connected to expert services and solutions.</p>
                <div className="flex gap-3 my-10">
                    {blogsSection.map(blog => 
                    <div className="text-white shadow-2xl  rounded-2xl hover:border border-black  lg:w-3/13">
                        <div className={`${blog.headerCol} p-3.5 rounded-t-2xl`}>
                            <h1 className="font-bold">{blog.title}</h1>
                            <p>{blog.articlesNum} articles</p>
                        </div>
                        <div className="text-black p-3.5 w-10/12">
                            <p className="line-clamp-2  text-sm w-11/12">{blog.desc}</p>
                            <div className="flex items-center">
                                <Link to={blog.id}
                                    className="flex items-center my-3.5">
                                    
                                        <span className="text-blue-800 w-full">Browse Articles</span>
                                        <img src={rightArrow} alt="arrow" className="h-5 w-5" />
                                </Link>
                                <span className="text-xs">{blog.subDesc}</span>
                            </div>   
                        </div>   
                    </div>)}
                </div>
            </section> 
        </>
    )
}