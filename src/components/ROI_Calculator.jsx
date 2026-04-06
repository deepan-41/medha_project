import { useEffect, useState } from "react"
import user from"../assets/user.png"
import  graph from "../assets/increase.png"
import calcus from "../assets/calculator.png"

export default function Calculator(){
        const [tab,setTab] = useState("engineer");
    return(
        <div className="flex flex-col items-center px-15 py-25 bg-gray-100">
        <div className="flex items-center justify-center">
            <img src= {calcus} alt="calculator" className="h-10 w-10"/>
            <h1 className="font-bold text-4xl">ROI Calculator</h1>
        </div>
        <p className="text-xl my-5">Calculate your potential savings with white label support services</p>
        <div className="flex p-1 bg-gray-300 mb-10 rounded-lg">
            <button 
                onClick={()=> setTab("engineer")}
                className= {`flex px-5 py-2 rounded-lg items-center ${tab === "engineer" ? "bg-white" : null}`}>
                <img src={user} alt="user" className="h-5 w-5"/>
                <h1>Per Engineer</h1>
            </button>
            <button 
                onClick={()=> setTab("device")}
                className= {`flex px-5 py-2  rounded-lg items-center ${tab === "engineer" ? null : "bg-white"}`}>
                <img src={user} alt="device"  className="h-5 w-5"/>
                <h1>Per Device</h1>
            </button>
        </div>
        {tab === "engineer" ? <EngineerROI/> : <DeviceROI />}
    </div>
    )}

const DeviceROI = () => {
    const [levelOne, useLevelOne ] = useState(0);
    const [levelTwo, useLevelTwo ] = useState(0);
    const [levelThree, useLevelThree ] = useState(0);
    const [monthlyCost, useMonthlyCost] = useState(0)
    const [ourCost, useOurCost] = useState(0)
    const [monthlySavings, useMonthlySavings]  = useState(0)
    const [roi,useRoi] =useState(0);

    const l1MonthlyCost = 5850;
    const l2MonthlyCost = 8400;
    const l3MonthlyCost = 10650;
    const l1OurCost = 1600;
    const l2OurCost = 2500;
    const l3OurCost = 2700;

    const getColor = (value) => value > 0 ? "text-green-600" : "text-red-600";
    useEffect(()=>{
        useMonthlyCost(
            levelOne * l1MonthlyCost +
            levelTwo * l2MonthlyCost +
            levelThree * l3MonthlyCost
        )
    },[levelOne, levelTwo, levelThree])

    useEffect(()=> {
        useOurCost(
            levelOne * l1OurCost +
            levelTwo * l2OurCost +
            levelThree * l3OurCost
        )
    },[levelOne, levelTwo, levelThree])

    useEffect(()=> {
        useMonthlySavings(
            monthlyCost - ourCost
        )
    },[monthlyCost,ourCost])

    useEffect(()=> {
        useRoi(
            Math.round(monthlySavings/monthlyCost * 100)
        )
    },[monthlyCost,monthlySavings])

    return(
        <div className="flex gap-10">
            <div className="bg-gray-200 p-5 rounded-xl w-130">
                <h1 className="font-bold text-xl mb-5">Your Current Setup</h1>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Workstations / Endpoints</label>
                    <input 
                        type="number"
                        value= {levelOne}
                        onChange={(e) => {
                            useLevelOne(Number(e.target.value))
                        }}
                        className="border py-3.5 px-auto rounded-md my-2 "/>
                    <p className="text-xs mb-5">$22/mo each • Min: 15 units or $330/mo</p>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Servers</label>
                    <input 
                        type="number"
                        value= {levelTwo}
                        onChange={(e) => 
                            useLevelTwo(Number(e.target.value))
                        }
                        className="border py-3.5 px-auto rounded-md my-2" />
                    <p className="text-xs mb-5">$75/mo each • Min: 3 units or $225/mo</p>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Network Devices (Firewalls, Switches)</label>
                    <input 
                        type="number"
                        value= {levelThree}
                        onChange={(e) => 
                            useLevelThree(Number(e.target.value))
                        }
                        className="border py-3.5 px-auto rounded-md my-2" />
                    <p className="text-xs mb-5">$45/mo each • Min: 2 units or $90/mo</p>
                </div>
                <div className="bg-gray-300 p-3 rounded-2xl">
                    <p className="text-shadow-xs">Industry standard: 1 tech per 80 devices @ $5,000/mo</p>
                    <p className="text-shadow-xs">You need 1 tech(s) for 1 devices</p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center flex-col bg-gray-200 p-5 rounded-xl w-130">
                    <div className="flex items-center mt-3">
                        <img src= {graph} alt="ROI" className="h-5 w-5" />
                        <p className="font-semibold text-md  text-blue-700">Your ROI</p>
                    </div>
                    <h1 className="font-bold text-6xl my-3">{roi ? roi : 0 }%</h1>
                    <p className="text-sm">Cost savings vs. in-house hiring</p>
                </div>
                <div className="flex flex-col bg-gray-200 p-5 rounded-xl w-130">
                    <span className="flex flex-col">
                        <h1 className="text-xs font-semibold">CURRENT MONTHLY COST</h1>
                        <p className="font-bold text-2xl my-2">${monthlyCost}</p>
                        <p className="text-sm mb-2">Hiring in-house</p>
                    </span>
                    <span className="flex flex-col border-t border-black mt-2">
                        <h1 className="text-xs font-semibold mt-3.5 text-blue-900 ">WITH MEDHA CLOUD</h1>
                        <p className="font-bold text-2xl my-2 text-blue-900">${ourCost}</p>
                        <p className="text-sm mb-2">2 engineer(s)</p>
                    </span>
                    <span className="flex flex-col border-t border-black mt-2">
                        <h1 className= {`text-xs font-semibold mt-3.5 ${getColor(monthlySavings)}`}>MONTHLY SAVINGS</h1>
                        <p className= {`font-bold text-2xl my-2 ${getColor(monthlySavings)}`}>${monthlySavings}</p>
                        <p className="text-sm mb-2">Every month</p>
                    </span>
                    <span className="flex flex-col border-t border-black mt-2">
                        <h1 className={`text-xs font-semibold mt-3.5 ${getColor(monthlySavings)}`}>ANNUAL SAVINGS</h1>
                        <p className={`font-bold text-2xl my-2 ${getColor(monthlySavings)}`}>${monthlySavings * 12}</p>
                        <p className="text-sm mb-2">First year total</p>
                    </span>
                </div>
            </div>
        </div>
    )
    
}

const EngineerROI = () => {
    const [levelOne, useLevelOne ] = useState(0);
    const [levelTwo, useLevelTwo ] = useState(0);
    const [levelThree, useLevelThree ] = useState(0);
    const [monthlyCost, useMonthlyCost] = useState(0)
    const [ourCost, useOurCost] = useState(0)
    const [monthlySavings, useMonthlySavings]  = useState(0)
    const [roi,useRoi] =useState(0);

    const l1MonthlyCost = 5850;
    const l2MonthlyCost = 8400;
    const l3MonthlyCost = 10650;
    const l1OurCost = 1600;
    const l2OurCost = 2500;
    const l3OurCost = 2700;

    const getColor = (value) => value > 0 ? "text-green-600" : "text-red-600";
    useEffect(()=>{
        useMonthlyCost(
            levelOne * l1MonthlyCost +
            levelTwo * l2MonthlyCost +
            levelThree * l3MonthlyCost
        )
    },[levelOne, levelTwo, levelThree])

    useEffect(()=> {
        useOurCost(
            levelOne * l1OurCost +
            levelTwo * l2OurCost +
            levelThree * l3OurCost
        )
    },[levelOne, levelTwo, levelThree])

    useEffect(()=> {
        useMonthlySavings(
            monthlyCost - ourCost
        )
    },[monthlyCost,ourCost])

    useEffect(()=> {
        useRoi(
            Math.round(monthlySavings/monthlyCost * 100)
        )
    },[monthlyCost,monthlySavings])

    return(
        <div className="flex gap-10">
            <div className="bg-gray-200 p-5 rounded-xl w-130">
                <h1 className="font-bold text-xl mb-5">Your Current Setup</h1>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Level 1 Engineers (Helpdesk)</label>
                    <input 
                        type="number"
                        min="0"
                        value= {levelOne}
                        onChange={(e) => {
                            useLevelOne(Number(e.target.value))
                        }}
                        className="border py-3.5 px-auto rounded-md my-2 "/>
                    <p className="text-xs mb-5">White label: $1,600/mo • Market: $3,800/mo</p>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Level 2 Engineers (Advanced)</label>
                    <input 
                        type="number"
                        min="0"
                        value= {levelTwo}
                        onChange={(e) => 
                            useLevelTwo(Number(e.target.value))
                        }
                        className="border py-3.5 px-auto rounded-md my-2" />
                    <p className="text-xs mb-5">White label: $2,500/mo • Market: $5,500/mo</p>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Level 3 / NOC Engineers</label>
                    <input 
                        type="number"
                        min="0"
                        value= {levelThree}
                        onChange={(e) => 
                            useLevelThree(Number(e.target.value))
                        }
                        className="border py-3.5 px-auto rounded-md my-2" />
                    <p className="text-xs mb-5">White label: $2,700/mo • Market: $7,000/mo</p>
                </div> 
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center flex-col bg-gray-200 p-5 rounded-xl w-130">
                    <div className="flex items-center mt-3">
                        <img src= {graph} alt="ROI" className="h-5 w-5" />
                        <p className="font-semibold text-md  text-blue-700">Your ROI</p>
                    </div>
                    <h1 className="font-bold text-6xl my-3">{roi ? roi : 0 }%</h1>
                    <p className="text-sm">Consider adjusting inputs</p>
                </div>
                <div className="flex flex-col bg-gray-200 p-5 rounded-xl w-130">
                    <span className="flex flex-col">
                        <h1 className="text-xs font-semibold">CURRENT MONTHLY COST</h1>
                        <p className="font-bold text-2xl my-2">${monthlyCost}</p>
                        <p className="text-sm mb-2">Hiring in-house</p>
                    </span>
                    <span className="flex flex-col border-t border-black mt-2">
                        <h1 className="text-xs font-semibold mt-3.5 text-blue-900 ">WITH MEDHA CLOUD</h1>
                        <p className="font-bold text-2xl my-2 text-blue-900">${ourCost}</p>
                        <p className="text-sm mb-2">2 engineer(s)</p>
                    </span>
                    <span className="flex flex-col border-t border-black mt-2">
                        <h1 className= {`text-xs font-semibold mt-3.5 ${getColor(monthlySavings)}`}>MONTHLY SAVINGS</h1>
                        <p className= {`font-bold text-2xl my-2 ${getColor(monthlySavings)}`}>${monthlySavings}</p>
                        <p className="text-sm mb-2">Every month</p>
                    </span>
                    <span className="flex flex-col border-t border-black mt-2">
                        <h1 className={`text-xs font-semibold mt-3.5 ${getColor(monthlySavings)}`}>ANNUAL SAVINGS</h1>
                        <p className={`font-bold text-2xl my-2 ${getColor(monthlySavings)}`}>${monthlySavings * 12}</p>
                        <p className="text-sm mb-2">First year total</p>
                    </span>
                </div>
            </div>
        </div>
    )
    
}