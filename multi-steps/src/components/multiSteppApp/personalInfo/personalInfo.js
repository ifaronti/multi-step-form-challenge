import {useState} from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
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
        <main className='w-full relative lg:h-full lg:my-14 lg:mx-[5rem]'>
            <Headers h1={h1} p={p}/>
            <section className='relative'>
                <InfoForm
                    phoneError={phoneError}
                    emailError={emailError}
                    nameError={nameError}
                    info={info}
                    onChange={handleChange}
                />
            </section>
            <div className='w-full absolute bottom-16 -right-20'>
                <NavBtns/>
            </div>
        </main>
    )
}