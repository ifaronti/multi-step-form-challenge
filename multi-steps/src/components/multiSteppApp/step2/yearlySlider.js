import './step2.css'

export default function Slider({onChange}){
    return(       
        <div className="bg-[#fafbff] shadow-sm h-12 z-10 rounded-md ml-0 w-[29.2rem] justify-center items-center self-center flex">
            <label htmlFor="checkbox" className="flex items-center gap-6">
                Monthly
                <div className="switch">
                    <input type="checkbox" onChange={onChange} id="checkbox" />
                    <div className="slider round"></div>
                </div>
                Yearly
            </label>
        </div>
    )
}