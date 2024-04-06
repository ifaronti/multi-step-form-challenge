import { useSelector } from "react-redux"

export default function SideBar(){
    const page = useSelector(state=> state.page.value)

    const width = window.innerWidth

    const sideItems =
            <div className="relative mt-9 lg:mt-9 justify-center w-[100%] lg:w-[all:unset] lg:flex-col gap-4 flex-row flex lg:gap-8 lg:pl-8">
                <div className="flex items-center lg:gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 1 ? 'bg-[#bfe2fd] text-black' : 'bg-none text-white'} flex items-center justify-center w-[2rem] h-[2rem] border-solid border-[1px]`}>1</div>
                    <div className="hidden lg:block">
                        <p className="lg:-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 1</p>
                        <p className="text-white font-Ubuntu-Medium">YOUR INFO</p>
                    </div>
                </div>
                <div className="flex items-center lg:gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 2 ? 'bg-[#bfe2fd] text-black' : 'bg-none text-white'} flex items-center justify-center w-[2rem] h-[2rem] border-solid border-[1px]`}>2</div>
                    <div className="hidden lg:block">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 2</p>
                        <p className="text-white font-Ubuntu-Medium">SELECT PLAN</p>
                    </div>
                </div>
                <div className="flex items-center lg:gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 3 ? 'bg-[#bfe2fd] text-balck' : 'bg-none text-white'} flex items-center justify-center w-[2rem] h-[2rem] border-solid border-[1px]`}>3</div>
                    <div className="hidden lg:block">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 3</p>
                        <p className="text-white font-Ubuntu-Medium">ADD-ONS</p>
                    </div>
                </div>
                <div className="flex items-center lg:gap-3">
                    <div className={`rounded-[100%] text-sm font-Ubuntu-Medium ${page === 4 ? 'bg-[#bfe2fd] text-black' : 'bg-none text-white'} flex items-center justify-center w-[2rem] h-[2rem] border-solid border-[1px]`}>4</div>
                    <div className="hidden lg:block">
                        <p className="-mb-1 text-[#9699ab] text-[12.5px] font-Ubuntu-Regular">STEP 4</p>
                        <p className="text-white font-Ubuntu-Medium">SUMMARY</p>
                    </div>
                </div>
            </div>

    return(
        <nav className="lg:mx-4 max-h-[172px] lg:h-[570px] lg:pr-4 lg:min-w-[275px] w-[100%] lg:mt-4 relative">
            <img className="absolute sm:h-[10.8rem] md:h-[10.8rem] lg:h-[570px] min-w-full lg:min-w-[275px]" src={`${process.env.PUBLIC_URL}/assets/images/${width <= 800 ? 'bg-sidebar-mobile.jpg' : 'bg-sidebar-desktop.svg'}`} alt="" />
            {sideItems}
        </nav>
    )
}