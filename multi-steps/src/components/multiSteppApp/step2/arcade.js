export default function Arcade({yearly}){
 return  ( 
        <div className="mx-[1rem] mt-2 relative h-full flex items-center gap-4 lg:gap-0 lg:block lg:my-5 text-[#02295a]">
            <img src={`
                    ${process.env.PUBLIC_URL}
                    /assets/images/icon-arcade.svg`
                } 
                alt="arcade-logo"
                className="lg:mb-10 mb-5"
            />
            <div className="lg:block relative flex flex-col">
                <h2>Arcade</h2>
                <p className="font-Ubuntu-Regular text-sm text-[#b2b2b2]">{yearly ? '$90/yr' : '$9/mo'}</p>
                <p className={`${yearly ? 'visible' : 'invisible' } text-[#02295a] mt-1 text-sm font-Ubuntu-Regular`}>2 months free</p>
            </div>
        </div>
    )
}