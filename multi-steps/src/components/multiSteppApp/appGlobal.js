import Info from "./personalInfo/personalInfo"
import SideBar from "./nav/nav"
import Plans from "./step2/plans"
import Addons from "./step3/addons"
import Checkout from "./step4/checkout"
import { Routes, Route } from "react-router"
import Confirmation from "./step4/confirmation"

export default function AppGlobal(){

    const width = window.innerWidth

    return(
        <div className="w-100% flex min-h-screen bg-[#f0f6ff] home">
            <div className={`my-auto relative mx-auto ${width <= 800 ? 'flex-col' : 'flex-row'} flex ${width <= 800 ? 'w-[90%]' : 'w-[940px]'} h-[600px] rounded-xl bg-white`}>
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Info/>}/>
                    <Route path="/plans" element={<Plans/>}/>
                    <Route path="/addons" element={<Addons/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/confirm" element={<Confirmation/>}/>
                </Routes>
            </div>
        </div>
    )
}