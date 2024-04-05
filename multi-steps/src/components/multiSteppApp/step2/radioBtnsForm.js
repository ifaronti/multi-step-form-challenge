import Advanced from './advanced'
import Arcade from './arcade'
import Pro from './pro'

export default function RadioBtns({yearly, handleChange}){
    //Radio buttons with styled clickable labels.

    const radioForm =
            <form className="my-auto w-fit mb-8 mx-auto mt-6 flex mr-4 h-fit relative">
                <input className="invisible peer/arcade" type="radio" onChange={handleChange} value={yearly ? 90 : 9} name='plans' id='arcade'/>

                <label htmlFor='arcade' className={`w-36 mr-1 relative cursor-pointer peer-checked/arcade:bg-[#f0f6ff] peer-checked/arcade:border-[#4703b5] ${yearly ? 'h-[185px]': 'h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div className="w-[100%] absolute h-[100%]">
                        {<Arcade yearly={yearly}/>}
                    </div>
                </label>

                <input className="invisible peer/advanced" type="radio" onChange={handleChange}  value={yearly ? 120 : 12} name='plans' id='advanced'/>

                <label htmlFor='advanced' className={`w-36 mr-1 relative cursor-pointer peer-checked/advanced:bg-[#f0f6ff] peer-checked/advanced:border-[#4703b5] ${yearly ? 'h-[185px]': 'h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div className="w-[100%] absolute h-[100%]">
                        {<Advanced yearly={yearly}/>}
                    </div>
                </label>

                <input className="invisible peer/pro" type="radio" onChange={handleChange} value={yearly ? 150 : 15} name='plans' id='pro'/>
                
                <label htmlFor='pro' className={`w-36 mr-1 relative cursor-pointer peer-checked/pro:bg-[#f0f6ff] peer-checked/pro:border-[#4703b5] ${yearly ? 'h-[185px]': 'h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div className="w-[100%] absolute h-[100%]">
                        {<Pro yearly={yearly}/>}
                    </div>
                </label>
            </form>

    return radioForm
}