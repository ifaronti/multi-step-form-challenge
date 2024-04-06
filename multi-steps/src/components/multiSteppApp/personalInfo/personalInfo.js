import {useState} from 'react'
import { useNavigate } from 'react-router'
import { phoneRegex, emailRegex } from './regExp'
import Headers from '../headers'
import { changePageNumber } from '../../features/pageNumberSlice'
import {useDispatch } from 'react-redux'
import InfoForm from './infoForm'
import NavBtns from '../nav/navLinks'

export default function Info(){
    const [info, setInfo] = useState({
        name:'',
        email:'',
        phone:''
    })

    // Input error variables
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)

    const dispatch = useDispatch()
    const goTo = useNavigate()

    const h1 = 'Personal info'
    const p = 'Please provide your name, email address and phone number'

    // handles inputs' value changes as entered
    function handleChange(event){
        const {name, value} = event.target
        setInfo(prevInfo => {
            return {
                ...prevInfo,
                [name]: value
            }
        })
        setEmailError(false)
        setPhoneError(false)
        setNameError(false)
    }

    // Checks inputs' validity before moving to step 2.
    // It also changes page number for redux store update.
    function handleSubmit(event){
        event.preventDefault()
        if(info.name === ''){
            return setNameError(true)
         }
        if(!emailRegex.test(info.email)){
            return setEmailError(true)
        }
        if(!phoneRegex.test(info.phone)){
            return setPhoneError(true)
        }
        dispatch(changePageNumber(2))
        goTo('/plans')
    }

    return (
        <main className='lg:w-full relative lg:h-full lg:my-14 mx-auto lg:mr-[6.5rem]'>
            <div className='ml-7 mt-6 lg:mt-[unset]'>
                <Headers h1={h1} p={p}/>
            
                <InfoForm
                    phoneError={phoneError}
                    emailError={emailError}
                    nameError={nameError}
                    info={info}
                    onChange={handleChange}
                />
            </div>
            <div className='w-[100%] lg:h-[unset] lg:bg-none bg-white h-[75px] lg:ml-[59.5%] mt-20 lg:mt-[unset] absolute lg:bottom-14'>
                <NavBtns forward={handleSubmit}/>
            </div>
        </main>
    )
}