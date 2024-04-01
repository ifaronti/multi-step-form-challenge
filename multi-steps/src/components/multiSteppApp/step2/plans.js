import React, { useState } from "react";
import './step2.css'

export default function Plans(){
    const [price, setPrice] = useState(0)
    const [yearly, setYearly] = useState(false)

    function handleChange(e){
        const {value} = e.target
        setPrice(value)
        e.target.classList.toggle('picked')
    }

    const headerText = 
            <section className="relative ml-3">
                <h1 className="text-[#02295a] mb-2 text-4xl font-Ubuntu-Bold">Select your plan</h1>
                <p className="text-[#b2b2b2] font-Ubuntu-Regular my-0 mx-auto">You have the option of monthly or yearly billing</p>
            </section>

    const arcadeContent = 
        <div className="mx-[1rem] my-5 text-[#02295a]">
            <img src={`
                    ${process.env.PUBLIC_URL}
                    /assets/images/icon-arcade.svg`
                } 
                alt="arcade-logo"
                className="mb-10"
            />
        
            <h2>Arcade</h2>
            <p className="font-Ubuntu-Regular text-sm text-[#b2b2b2]">{yearly ? '$90/yr' : '$9/mo'}</p>
            <p className={`${yearly ? 'visible' : 'invisible' } text-[#02295a] mt-1 text-sm font-Ubuntu-Regular`}>2 months free</p>
        </div>

    const advancedContent = 
        <div className="mx-[1rem] my-5 text-[#02295a]">
            <img src={`
                    ${process.env.PUBLIC_URL}
                    /assets/images/icon-advanced.svg`
                } 
                alt="advanced-logo"
                className="mb mb-10"
            />

            <h2>Advanced</h2>
            <p className="font-Ubuntu-Regular text-sm text-[#b2b2b2]">{yearly ? '$120/yr' : '$12/mo'}</p>
            <p className={`${yearly ? 'visible' : 'invisible' } text-[#02295a] mt-1 text-sm font-Ubuntu-Regular`}>2 months free</p>
        </div>

    const proContent = 
        <div className="mx-[1rem] my-5 text-[#02295a]">
            <img src={`
                    ${process.env.PUBLIC_URL}
                    /assets/images/icon-pro.svg`
                } 
                alt="pro-logo"
                className="mb-10"
            />

            <h2 className="font-Ubuntu-Medium">Pro</h2>
            <p className="font-Ubuntu-Regular text-sm text-[#b2b2b2]">{yearly ? '$150/yr' : '$15/mo'}</p>
            <p className={`${yearly ? 'visible' : 'invisible' } text-[#02295a] mt-1 text-sm font-Ubuntu-Regular`}>2 months free</p>
        </div>

    const radioForm = 
            <div className="my-auto w-fit mx-auto mt-6 flex mr-4 h-fit relative">
                <input 
                    className="invisible peer/arcade" 
                    type="radio" 
                    onChange={handleChange} 
                    value={yearly ? 90 : 9} 
                    name="plan" 
                    id="arcade" 
                />
                <label htmlFor="arcade" className={`w-36 mr-1 relative cursor-pointer peer-checked/arcade:bg-[#f0f6ff] peer-checked/arcade:border-[#4703b5] ${yearly ? 'h-[185px]': 'h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`}>
                    <div 
                        className="w-[100%] absolute h-[100%]">
                            {arcadeContent}
                    </div>
                </label>

                <input 
                    className="invisible peer/advanced" 
                    type="radio" 
                    onChange={handleChange} 
                    value={yearly ? 120 : 12} 
                    name="plan" 
                    id="advanced" 
                />
                <label htmlFor="advanced" className={`w-36 mr-1 relative cursor-pointer peer-checked/advanced:bg-[#f0f6ff] peer-checked/advanced:border-[#4703b5] ${yearly ? 'h-[185px]': 'h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`}>
                    <div 
                        className="w-[100%] absolute h-[100%]">
                        {advancedContent}
                    </div>
                </label>
                
                <input 
                    className="invisible peer/pro" 
                    type="radio" 
                    onChange={handleChange} 
                    value={yearly ? 150 : 15} 
                    name="plan" 
                    id="pro" />
                <label htmlFor="pro" className={`w-36 mr-1 relative cursor-pointer peer-checked/pro:bg-[#f0f6ff] peer-checked/pro:border-[#4703b5] ${yearly ? 'h-[185px]': 'h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div 
                        className="w-[100%] absolute h-[100%]">
                        {proContent}
                    </div>
                </label>
                
            </div>

    const yearlyCheckBox =        
        <div className="bg-[#fafbff] shadow-sm h-12 z-10 rounded-md ml-0 w-[29.2rem] justify-center items-center self-center flex">
            <label htmlFor="checkbox" className="flex items-center gap-6">
                Monthly
                <div className="switch" for="checkbox">
                    <input type="checkbox" onChange={()=>setYearly(!yearly)} id="checkbox" />
                    <div class="slider round"></div>
                </div>
                Yearly
            </label>
        </div>

    
    return(
        <div className="mx-auto my-auto mt-14 flex-col flex gap-6 w-fit">
            {headerText}
            {radioForm}
            {yearlyCheckBox}
        </div>
    )
}