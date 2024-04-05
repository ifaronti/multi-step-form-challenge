import { useSelector } from "react-redux"

export default function SideBar(){
    const page = useSelector(state=> state.page.value)

    const width = window.innerWidth

    const sideItems =
            <div className="relative mt-9 lg:flex-col xl:flex-col 2xl:flex-col gap-1 flex-row 2xl:gap-8 flex xl:gap-8 lg:gap-8 pl-8">
                <div className="flex items-center lg:gap-3 xl:gap-3 2xl:gap-3 gap-0">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 1 ? 'bg-[#bfe2fd] text-black' : 'bg-none text-white'} text-center pt-[5px] w-8 h-8 border-solid border-[1px]`}>1</div>
                    <div className="invisible lg:visible xl:visible 2xl:visible">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 1</p>
                        <p className="text-white font-Ubuntu-Medium">YOUR INFO</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 2 ? 'bg-[#bfe2fd] text-black' : 'bg-none text-white'} text-center pt-[5px] w-8 h-8 border-solid border-[1px]`}>2</div>
                    <div className="invisible lg:visible xl:visible 2xl:visible">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 2</p>
                        <p className="text-white font-Ubuntu-Medium">SELECT PLAN</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 3 ? 'bg-[#bfe2fd] text-balck' : 'bg-none text-white'} text-center pt-[5px] w-8 h-8 border-solid border-[1px]`}>3</div>
                    <div className="invisible lg:visible xl:visible 2xl:visible">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 3</p>
                        <p className="text-white font-Ubuntu-Medium">ADD-ONS</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 4 ? 'bg-[#bfe2fd] text-black' : 'bg-none text-white'} text-center pt-[5px] w-8 h-8 border-solid border-[1px]`}>4</div>
                    <div className="invisible lg:visible xl:visible 2xl:visible">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 4</p>
                        <p className="text-white font-Ubuntu-Medium">SUMMARY</p>
                    </div>
                </div>
            </div>

    return(
        <nav className="mx-4 pr-4 min-w-[275px] mt-4 relative">
            <img className="absolute" src={`${process.env.PUBLIC_URL}/assets/images/${width <= 800 ? 'bg-sidebar-mobile.svg' : 'bg-sidebar-desktop.svg'}`} alt="" />
            {sideItems}
        </nav>
    )
}