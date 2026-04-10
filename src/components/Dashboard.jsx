import { Link } from "react-router-dom";

import serverData from "../assets/data-server.png";
import mail from "../assets/message.png"
import cloud from "../assets/cloud.png"
import user from "../assets/user.png"
import time from "../assets/time.png"

const RMMCard = () => {
  return (
    <Link to="/white-label-msp-services">
        <div className="group relative w-full max-w-sm overflow-hidden -z-1 rounded-xl border border-gray-800   transition-all duration-300 hover:border-gray-600 hover:shadow-2xl mb-5">
      
        <div className='bg-black p-6'>
          <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-200">
            RMM and PSA Dashboard
          </h3>
          <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-1 text-xs font-bold text-green-500">
            image
          </span>
        </div>
        <div className=" border-t  text-gray-500 "></div>

          <div className="space-y-4 text-white transition-all duration-300 font-light text-xs mt-4">
            <div className='flex'>
              <span>EndPoints Health</span>
              <span className='text-green-500'>847/850</span>
            </div>
            <div className='flex'>
              <span>Patch compilance</span>
              <span className='text-blue-700'>98.2%</span>
            </div>
            <div className='flex'>
              <span>Open Tickets</span>
              <span className='text-amber-300'>23 active</span>
            </div>
          </div>

          <div className="mt-7 flex justify-between border-t  pt-2 text-xs  text-gray-500 mb-2" >
            <span>Logged in:ouregineer@yourbrand.com</span>
            <span className="text-green-500">24/7</span>
          </div>
        </div>

        <div className='bg-white p-5'>
          <div className='flex items-center gap-3'>
              <img src={user} alt="cloud" className='h-4 w-4' />
              <span>White label MSP</span>
          </div>
          <p>You can't afford 6 more techs.We'll be your 24/7 team. Your clients never Know.</p>
        </div>
  
      </div>
    </Link>
    
  );
};

const MigrationCard = () => {
  return (
    <Link to="/cloud-hosting">
      <div className="group relative w-full max-w-sm overflow-hidden rounded-xl -z-1 border border-gray-800   transition-all duration-300 hover:border-gray-600 hover:shadow-2xl mb-5">
        <div className='bg-black p-6'>
          <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-200">Migration Dashboard</h3>
          <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-1 text-xs font-bold text-green-500">
            Live
          </span>
        </div>
        <div className=" border-t  text-gray-500 "></div>

          <div className="space-y-4 transition-all duration-300 mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-normal">Exchange → M365</span>
              <span className="font-bold text-green-400">94%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-gray-800">
              <div 
                className="h-full rounded-full bg-green-400 transition-all duration-1000" 
                style={{ width: '94%' }}
              >
              </div>

            </div>
            <div className="space-y-2  font-light text-xs">
              <div className="flex items-center gap-2  text-gray-300">
                <img src={mail} alt="mail"  className='h-3 w-3'/>
                <span>1,247 mailboxes migrated</span>
              </div>
              <div className="flex items-center gap-2  text-gray-300">
                <img src={serverData} alt="storage" className='h-3 w-3' />
                <span>847 GB transferred</span>
              </div>
            </div>
          </div>

          <div className="mt-2 flex justify-between border-t  pt-2 text-xs  text-gray-500 mb-2" >
            <span>Zero downtime</span>
            <span className="text-green-500">0 errors</span>
          </div>
        </div>

        <div className='bg-white p-5'>
          <div className='flex items-center gap-3'>
              <img src={cloud} alt="cloud" className='h-4 w-4' />
              <span>Cloud</span>
          </div>
          <p>Need Microsoft 365 set up today? Done.HIPAA complaint? we handle the paperwork.</p>
        </div>
  
      </div>
    </Link>
    
  );
};

const LiveSupportCard = () => {
  return (
    <Link to="/professional-services">
      <div className="group relative w-full max-w-sm overflow-hidden rounded-xl -z-1 border border-gray-800   transition-all duration-300 hover:border-gray-600 hover:shadow-2xl mb-5">
        <div className='bg-black p-6'>
          <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-200">
            Live Support Queue
          </h3>
          <span className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-1 text-xs font-bold text-green-500">
            15m avg response
          </span>
        </div>
        <div className=" border-t  text-gray-500 "></div>

          <div className="space-y- transition-all duration-300 font-light  mt-4">
            <div>
              <span className='text-red-500'>CRITICAL</span>
              <span>2m ago</span>
            </div>
            <p className='text-xs text-white'>
              SQL Server down - 150 users affected
            </p>
            <div className='text-xs'>
              <img  src={time} alt="time" className='h-3 w-3'/>
              <span className='text-green-500'>Engineer assigned</span>
            </div>
          </div>

          <div className="mt-6 flex justify-between border-t  pt-2 text-xs  text-gray-500 mb-2" >
            <div className='flex flex-col'>
              <span className='text-green-500'>99.8%</span>
              <span>SLA compliance</span>
            </div>
          </div>
        </div>

        <div className='bg-white p-5'>
          <div className='flex items-center gap-3'>
              <img src={user} alt="cloud" className='h-4 w-4' />
              <span>Professional Services</span>
          </div>
          <p>Windows crashed. Exchange won't start. SQL is down. We fix it in 15 minutes.</p>
        </div>
  
      </div>
    </Link>
  );
};

export {
  MigrationCard,
  RMMCard,
  LiveSupportCard
}