import { useEffect } from "react"
import { Link } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { changePageNumber } from "../../features/pageNumberSlice"
import { navigateTo } from "../../features/navigateSlice"


export default function Confirmation(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(changePageNumber(4))
        dispatch(navigateTo({forward:'/', back:'/'}))
        // eslint-disable-next-line
    },[])

    const confirmationPage = 
            <main className='h-full w-full justify-center mb-28 items-center mt-8  lg:-mt-1 relative lg:-ml-[7rem] flex flex-col'>
                <header className={'mb-5'}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-thank-you.svg`} alt="" />
                </header>
                <h1 className='text-[2.2rem] mb-3 text-[#02295a] font-Ubuntu-Bold'>
                    Thank You!
                </h1>
                <p className='text-center w-[70] font-Ubuntu-Regular text-[#A0A1A6]'>
                    Thanks for confirming your subscription!
                    We hope you have fun using our platform.
                    If you ever need support, please feel free
                    to email us at support@loregaming.com.
                </p>
            </main>

    return confirmationPage
}