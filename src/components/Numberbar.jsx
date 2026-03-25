import call from "../assets/call.png";
import chat from "../assets/chat.png"

export default function Numberbar() {
   return(
    <nav className="flex bg-gray-800 p-3 text-white items-center justify-between ">
        <div className="flex hover:text-orange-400 transition gap-2">
            <span className="bg-gray-300 h-6 w-6 rounded flex items-center justify-center">
                <img src={call} alt="call" className="h-4 w-4"/>
            </span>
            <a href="tel:+16467752855">+16467752855(US)</a>
        </div>

        <div className="flex hover:text-orange-400 transition gap-2">
            <span className="bg-gray-300 h-6 w-6 rounded flex items-center justify-center">
                <img src={call} alt="call" className="h-4 w-4"/>
            </span>
            <a href="tel:+919353644646">+919353644646(India)</a>
        </div>

        <p className="hover:text-orange-400 transition">Client Login</p>
        
        <button className="flex bg-orange-500 px-3 py-1 rounded items-center justify-center gap-2">
            <img src= {chat} alt="chat"  className="h-4 w-4" />
            <span>Live Chat</span>
        </button>  
    </nav>
   ) 
}

