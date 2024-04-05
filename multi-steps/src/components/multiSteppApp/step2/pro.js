export default function Pro({yearly}){
    return(
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
    )
}