import LabelContentTextOnline from "./onlineText"
import LabelContentTextStorage from "./storageText"
import LabelContentTextProfile from "./profileText"

export default function AddonsInput({handleChange, yearly}){

    const checkBoxes = 
        <form className="relative w-full flex flex-col  sm:block">    
            <div className="lg:h-[80px] h-[70px] lg:w-[460px] max-w-[460px] w-[90%] lg:mx-0 mx-auto relative flex lg:mb-4 mb-3 items-center border-solid-[1px]">
                <input 
                    type="checkbox" 
                    value={yearly ? 10 : 1} 
                    onChange={handleChange} 
                    className="rounded-lg absolute lg:ml-[1.7rem] ml-5 peer/online scale-150" id= 'online' name='onlineService'
                />

                <label htmlFor='online' className='h-[100%] w-[100%] flex cursor-pointer rounded-xl items-center border-solid border-[1px] hover:border-[#4703b5] peer-checked/online:bg-[#f0f6ff] peer-checked/online:border-[#4703b5]'>
                    <LabelContentTextOnline/>
                </label>
            </div>

            <div className="lg:h-[80px] h-[70px] lg:w-[460px] max-w-[460px] lg:mx-0 mx-auto w-[90%] relative flex lg:mb-4 mb-3 items-center border-solid-[1px]">
                <input 
                    type="checkbox" 
                    value={yearly ? 20 : 2} 
                    onChange={handleChange} 
                    className="rounded-lg absolute lg:ml-[1.7rem] ml-5 peer/storage scale-150" id='storage' name='storage'
                />

                <label htmlFor='storage' className='h-[100%] w-[100%] flex cursor-pointer rounded-xl items-center border-solid border-[1px] hover:border-[#4703b5] peer-checked/storage:bg-[#f0f6ff] peer-checked/storage:border-[#4703b5]'>
                    <LabelContentTextStorage/>
                </label>
            </div>

            <div className="lg:h-[80px] h-[70px] lg:w-[460px] max-w-[460px] w-[90%] lg:mx-0 mx-auto relative flex lg:mb-4 mb-3 items-center border-solid-[1px]">
                <input 
                    type="checkbox" 
                    value={yearly ? 20 : 2} 
                    onChange={handleChange} 
                    className="rounded-lg absolute lg:ml-[1.7rem] ml-5 peer/profile scale-150" id='profile' name='profileTheme'
                />

                <label htmlFor='profile' className='h-[100%] w-[100%] flex cursor-pointer rounded-xl items-center border-solid border-[1px] hover:border-[#4703b5] peer-checked/profile:bg-[#f0f6ff] peer-checked/profile:border-[#4703b5]'>
                    <LabelContentTextProfile/>
                </label>
            </div>
        </form>

        return checkBoxes
}