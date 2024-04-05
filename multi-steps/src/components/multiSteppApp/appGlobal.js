import Info from "./personalInfo/personalInfo"
import SideBar from "./nav/nav"
import Plans from "./step2/plans"
import Addons from "./step3/addons"
import Checkout from "./step4/checkout"
import { Routes, Route } from "react-router"
import Confirmation from "./step4/confirmation"

export default function AppGlobal(){

    return(
        <div className="w-100% flex min-h-screen bg-[#f0f6ff]">
            <div className={`my-auto relative mx-auto flex-col lg:flex-row flex w-[90%] lg:w-[940px] lg:h-[600px] h-48 rounded-xl bg-white`}>
                <SideBar/>
                <div className={`relative rounded-xl bg-white`}>
                    <Routes>
                        <Route path="/" element={<Info/>}/>
                        <Route path="/plans" element={<Plans/>}/>
                        <Route path="/addons" element={<Addons/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/confirm" element={<Confirmation/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}