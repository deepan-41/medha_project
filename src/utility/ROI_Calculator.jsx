import { useEffect, useState } from "react"
import user from"../assets/user.png"
import  graph from "../assets/increase.png"
import calcus from "../assets/calculator.png"

export default function Calculator(){
    const [levelOne, useLevelOne ] = useState(0);
    const [levelTwo, useLevelTwo ] = useState(0);
    const [levelThree, useLevelThree ] = useState(0);
    const [monthlyCost, useMonthlyCost] = useState(0)
    const [ourCost, useOurCost] = useState(0)
    const [monthlySavings, useMonthlySavings]  = useState(0)
    const l1MonthlyCost = 5850;
    const l2MonthlyCost = 8400;
    const l3MonthlyCost = 10650;
    const l1OurCost = 1600;
    const l2OurCost = 2500;
    const l3OurCost = 2700;

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

    return(
        <div className="flex flex-col items-center px-15 py-25 bg-gray-100">
        <div className="flex items-center justify-center">
            <img src= {calcus} alt="calculator" className="h-10 w-10"/>
            <h1 className="font-bold text-4xl">ROI Calculator</h1>
        </div>
        <p className="text-xl">Calculate your potential savings with white label support services</p>
        <div className="flex p-1 bg-gray-300">
            <div className="flex px-5 py-2 bg-white rounded-l items-center">
                <img src={user} alt="user" className="h-5 w-5"/>
                <h1>Per Engineer</h1>
            </div>
            <div className="flex px-5 py-2 bg-white rounded-l items-center">
                <img src={user} alt="device"  className="h-5 w-5"/>
                <h1>Per Device</h1>
            </div>
        </div>

        <div className="flex">
            <div>
                <h1 className="font-bold text-xl">Your Current Setup</h1>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Level 1 Engineers (Helpdesk)</label>
                    <input 
                        type="number"
                        value= {levelOne}
                        onChange={(e) => {
                            useLevelOne(Number(e.target.value))
                        }}
                        className="border py-3 px-auto rounded-sm"/>
                    <p className="text-xs">White label: $1,600/mo • Market: $3,800/mo</p>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Level 2 Engineers (Advanced)</label>
                    <input 
                        type="number"
                        value= {levelTwo}
                        onChange={(e) => 
                            useLevelTwo(e.target.value)
                        }
                        className="border py-3 px-auto rounded-sm" />
                    <p className="text-xs">White label: $2,500/mo • Market: $5,500/mo</p>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold">Level 3 / NOC Engineers</label>
                    <input 
                        type="number"
                        value= {levelThree}
                        onChange={(e) => 
                            useLevelThree(e.target.value)
                        }
                        className="border py-3 px-auto rounded-sm" />
                    <p className="text-xs">White label: $2,700/mo • Market: $7,000/mo</p>
                </div> 
            </div>
            <div>
                <div>
                    <div>
                        <img src= {graph} alt="ROI" className="h-8 w-8" />
                        <p>Your ROI</p>
                    </div>
                    <h1>73%</h1>
                    <p>Cost savings vs. in-house hiring</p>
                </div>
                <div>
                    <span className="flex flex-col">
                        <h1>Current Monthly Cost</h1>
                        <p>${monthlyCost}</p>
                        <p>Hiring in-house</p>
                    </span>
                    <span className="flex flex-col">
                        <h1>With Medha Cloud</h1>
                        <p>${ourCost}</p>
                        <p>2 engineer(s)</p>
                    </span>
                    <span className="flex flex-col">
                        <h1>Monthly Savings</h1>
                        <p>${monthlySavings}</p>
                        <p>Every month</p>
                    </span>
                    <span className="flex flex-col">
                        <h1>Annual Savings</h1>
                        <p>${monthlySavings * 12}</p>
                        <p>First year total</p>
                    </span>
                </div>
            </div>
        </div> 
    </div>
    )
    
}