import Info from "./personalInfo"
import SideBar from "./nav"
import Plans from "./step2/plans"
import Addons from "./addons"
import Checkout from "./checkout"

export default function AppGlobal(){


    return(
        <div className="w-100% flex min-h-screen bg-[#f0f6ff] home">
            <div className="my-auto relative mx-auto flex w-[945px] h-[600px] rounded-xl bg-white">
                <SideBar/>
                {/* <Info/> */}
                {/* <Plans/> */}
                {/* <Addons/> */}
                <Checkout/>
            </div>
        </div>
    )

}