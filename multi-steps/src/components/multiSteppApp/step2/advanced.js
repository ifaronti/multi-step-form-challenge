
export default function Advanced({yearly}){
    return (
        <div className="mx-[1rem] mt-3 flex lg:block gap-4 lg:gap-0 lg:my-5 text-[#02295a]">
            <img src={`
                    ${process.env.PUBLIC_URL}
                    /assets/images/icon-advanced.svg`
                } 
                alt="advanced-logo"
                className="lg:mb-10 mb-5"
            />
            <div className="lg:block relative flex flex-col">
                <h2>Advanced</h2>
                <p className="font-Ubuntu-Regular text-sm text-[#b2b2b2]">{yearly ? '$120/yr' : '$12/mo'}</p>
                <p className={`${yearly ? 'visible' : 'invisible' } text-[#02295a] mt-1 text-sm font-Ubuntu-Regular`}>2 months free</p>
            </div>
        </div>
    )
}