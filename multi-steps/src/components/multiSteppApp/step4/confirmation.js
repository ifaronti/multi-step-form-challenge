import { Link } from "react-router-dom"


export default function Confirmation(){
    const confirmationPage = 
            <main className={' w-[100%] h-[100%] items-center justify-center flex flex-col'}>
                <header className={'mb-5'}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-thank-you.svg`} alt="" />
                </header>
                <h1 className={'text-center text-[2.2rem] mb-3 text-[#02295a] font-Ubuntu-Bold'}>
                    Thank You!
                </h1>
                <p className={'text-center font-Ubuntu-Regular w-[70%] text-[#A0A1A6]'}>
                    Thanks for confirming your subscription!
                    We hope you have fun using our platform.
                    If you ever need support, please feel free
                    to email us at support@loregaming.com.
                </p>
                <Link className="absolute rounded-lg text-white w-24 flex justify-center items-center text-center h-10 bg-orange-400 bottom-20" to='/'>Test Again</Link>
            </main>

    return confirmationPage
}