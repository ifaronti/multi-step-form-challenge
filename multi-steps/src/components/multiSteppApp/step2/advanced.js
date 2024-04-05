
export default function Advanced({yearly}){
    return (
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
    )
}