import './step2.css'
import {useSelector} from 'react-redux'

export default function Slider({onChange}){
    const yearly = useSelector(state=> state.yearly.value)
    return(       
        <div className="bg-[#fafbff] shadow-sm h-12 rounded-md ml-0 lg:w-[29.2rem] z-20 w-[90%] justify-center items-center self-center flex">
            <label htmlFor="checkbox" className="flex items-center gap-6">
                <span className={`${yearly ? 'text-[#b2b2b2]' : 'text-[#02295a]'}`}>Monthly</span>
                <div className="switch">
                    <input type="checkbox" onChange={onChange} id="checkbox" />
                    <div className="slider round"></div>
                </div>
                <span className={`${yearly ? 'text-[#02295a]' : 'text-[#b2b2b2]'}`}>Yearly</span>
            </label>
        </div>
    )
}