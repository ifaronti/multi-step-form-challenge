import Info from "./personalInfo/personalInfo"
import SideBar from "./nav/nav"
import Plans from "./step2/plans"
import Addons from "./step3/addons"
import Checkout from "./step4/checkout"
import { Routes, Route } from "react-router"
import Confirmation from "./step4/confirmation"

export default function AppGlobal(){

    return(
        <div className="w-full relative flex min-h-screen bg-[#f0f6ff]">
            <div className={`lg:my-auto lg:relative lg:mx-auto flex-col lg:flex-row flex w-full lg:w-[940px] lg:h-[600px] h-full rounded-xl lg:bg-white`}>
                <SideBar/>
                <div className={`relative w-[92%] mx-auto mt-8 lg:mt-[unset] lg:mx-[all:unset] lg:w-full rounded-xl bg-white`}>
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