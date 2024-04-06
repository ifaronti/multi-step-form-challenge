import Advanced from './advanced'
import Arcade from './arcade'
import Pro from './pro'

export default function RadioBtns({yearly, handleChange}){
    //Radio buttons with styled clickable labels.

    const radioForm =
            <form className="my-auto lg:w-fit w-full lg:flex flex-col lg:mx-0 mx-5 lg:flex-row mb-6 lg:mb-8 mt-6 flex lg:mr-4 h-fit relative">
                <input className="invisible peer/arcade" type="radio" onChange={handleChange} value={yearly ? 90 : 9} name='plans' id='arcade'/>

                <label htmlFor='arcade' className={`lg:min-w-36 mr-1 w-[90%] relative cursor-pointer peer-checked/arcade:bg-[#f0f6ff] peer-checked/arcade:border-[#4703b5] h-[78px] ${yearly ? 'lg:h-[185px]': 'lg:h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div className="w-[100%] absolute h-[100%]">
                        {<Arcade yearly={yearly}/>}
                    </div>
                </label>

                <input className="invisible peer/advanced" type="radio" onChange={handleChange}  value={yearly ? 120 : 12} name='plans' id='advanced'/>

                <label htmlFor='advanced' className={`lg:min-w-36 mr-1 w-[90%] max-w- relative cursor-pointer peer-checked/advanced:bg-[#f0f6ff] peer-checked/advanced:border-[#4703b5] h-[78px] ${yearly ? 'lg:h-[185px]': 'lg:h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div className="w-[100%] absolute h-[100%]">
                        {<Advanced yearly={yearly}/>}
                    </div>
                </label>

                <input className="invisible peer/pro" type="radio" onChange={handleChange} value={yearly ? 150 : 15} name='plans' id='pro'/>
                
                <label htmlFor='pro' className={`lg:min-w-36 mr-1 w-[90%] relative cursor-pointer peer-checked/pro:bg-[#f0f6ff] peer-checked/pro:border-[#4703b5] h-[78px] ${yearly ? 'lg:h-[185px]': 'lg:h-40'} rounded-xl border-solid border-[1px] hover:border-[#4703b5]`} >
                    <div className="w-[100%] absolute h-[100%]">
                        {<Pro yearly={yearly}/>}
                    </div>
                </label>
            </form>

    return radioForm
}