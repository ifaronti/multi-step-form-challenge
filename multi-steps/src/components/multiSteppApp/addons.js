import { useState } from "react"


export default function Addons(){
    const [yearly, setYearly] = useState(false)
    const [price, setPrice] = useState(0)


    function handleChange(e){
        setPrice(prevPrice => {
           return e.target.checked ? 
            prevPrice + Number(e.target.value) : 
            prevPrice - Number(e.target.value)
        })
    }

    const labelContentTextOnline = 
        <section className="flex px-5 w-[100%] items-center justify-between">
            <article className="ml-12">
                <h2 className="text-[#02295a]">Online service</h2>
                <p className="text-sm text-[#b2b2b2]">Access to multiplayer games</p>
            </article>
            <span className="text-sm text-[#473dff] ">+$1/mo</span>
        </section>
        
    const labelContentTextStorage = 
        <section className="flex px-5 w-[100%] items-center justify-between">
            <article className="ml-12">
                <h2 className="text-[#02295a]">Larger storage</h2>
                <p className="text-sm text-[#b2b2b2]">Extra 1TB of cloud save</p>
            </article>
            <span className="text-sm text-[#473dff] ">+$2/mo</span>
        </section>

    const labelContentTextProfile = 
        <section className="flex px-5 w-[100%] items-center justify-between">
            <article className="ml-12">
                <h2 className="text-[#02295a]">Customizable Profile</h2>
                <p className="text-sm text-[#b2b2b2]">Custom theme on your profile</p>
            </article>
            <span className="text-sm text-[#473dff] ">+$2/mo</span>
        </section>

    const headerText = 
            <section className="relative mb-9">
                <h1 className="text-[#02295a] mb-2 text-4xl font-Ubuntu-Bold">Pick add-ons</h1>
                <p className="text-[#b2b2b2] font-Ubuntu-Regular my-0 mx-auto">Add-ons help enhance your gaming experience.</p>
            </section>

    const checkBoxes = 
        <form className="relative">
            <div className="h-[80px] w-[460px] relative flex mb-4 items-center border-solid-[1px]">
                <input 
                        type="checkbox"
                        value={yearly ? 10 : 1}
                        onChange={handleChange}
                        className="rounded-lg absolute ml-[1.7rem] peer/online scale-150"
                        id="online"
                />
                <label htmlFor="online" className=" h-[100%] w-[100%] flex cursor-pointer rounded-xl items-center border-solid border-[1px] hover:border-[#4703b5] peer-checked/online:bg-[#f0f6ff] peer-checked/online:border-[#4703b5]">
                    {labelContentTextOnline}
                </label>
            </div>
            <div className="h-[80px] w-[460px] relative flex mb-4 items-center border-solid-[1px]">
                <input 
                        type="checkbox"
                        value={yearly ? 20 : 2}
                        onChange={handleChange}
                        className="rounded-lg absolute ml-[1.7rem] peer/storage scale-150"
                        id="storage"
                />
                <label htmlFor="storage" className=" h-[100%] w-[100%] flex cursor-pointer rounded-xl items-center border-solid border-[1px] hover:border-[#4703b5] peer-checked/storage:bg-[#f0f6ff] peer-checked/storage:border-[#4703b5]">
                    {labelContentTextStorage}
                </label>
            </div>
            <div className="h-[80px] w-[460px] relative mb-4 flex items-center border-solid-[1px]">
                <input 
                        type="checkbox"
                        value={yearly ? 20 : 2}
                        onChange={handleChange}
                        className="rounded-lg absolute ml-[1.7rem] peer/profile scale-150"
                        id="profile"
                />
                <label htmlFor="profile" className="h-[100%] w-[100%] flex cursor-pointer rounded-xl items-center border-solid border-[1px] hover:border-[#4703b5] peer-checked/profile:bg-[#f0f6ff] peer-checked/profile:border-[#4703b5]">
                    {labelContentTextProfile}
                </label>
            </div>

        </form>
        console.log(price)

        return(
            <div className="mx-auto my-14">
                {headerText}
                {checkBoxes}
            </div>
        )
}