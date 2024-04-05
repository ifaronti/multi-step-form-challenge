export default function Arcade({yearly}){
 return  ( 
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
    )
}