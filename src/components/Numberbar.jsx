import call from "../assets/call.png";
import chat from "../assets/chat.png"

export default function Numberbar() {
   return(
    <nav className="bg-gray-800 p-3 text-white items-center border-b border-gray-700 shadow-md hidden md:block">
        <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-6">
                    <div className="flex hover:text-orange-400 transition gap-2 font-semibold">
                        <span className="bg-gray-300 h-6 w-6 rounded flex items-center justify-center">
                            <img src={call} alt="call" className="h-4 w-4"/>
                        </span>
                        <a href="tel:+16467752855">+16467752855(US)</a>
                    </div>
                    <span className="text-gray-600">•</span>
                    <div className="flex hover:text-orange-400 transition gap-2 font-semibold">
                        <span className="bg-gray-300 h-6 w-6 rounded flex items-center justify-center">
                            <img src={call} alt="call" className="h-4 w-4"/>
                        </span>
                        <a href="tel:+919353644646">+919353644646(India)</a>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4">
                    <p className="hover:text-orange-400 transition">Client Login</p>
            
                    <button className="flex bg-orange-500 px-3 py-1 rounded items-center justify-center gap-2">
                        <img src= {chat} alt="chat"  className="h-4 w-4" />
                        <span>Live Chat</span>
                    </button> 
                </div>
            </div>
    </nav>
   ) 
}

