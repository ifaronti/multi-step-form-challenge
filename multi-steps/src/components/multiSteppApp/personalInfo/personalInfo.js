import {useEffect, useState} from 'react'
import { phoneRegex, emailRegex } from './regExp'
import Headers from '../headers'
import {useDispatch} from 'react-redux'
import InfoForm from './infoForm'
import { changeConfirm } from '../../features/confirmSlice'
import { navigateTo } from '../../features/navigateSlice'
import { changePageNumber } from '../../features/pageNumberSlice'

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
    // if inputs' values are all valid, it'll change
    // redux var confirm and also update the navigation
    // object var in redux store.
    function handleSubmit(){
        if(info.name === ''){
             setNameError(true)
             dispatch(changeConfirm(false))
             return
         }
        if(!emailRegex.test(info.email)){
             setEmailError(true)
             dispatch(changeConfirm(false))
             return
        }
        if(!phoneRegex.test(info.phone)){
            setPhoneError(true)
            dispatch(changeConfirm(false))
            return
        }
        dispatch(changeConfirm(true))
        dispatch(navigateTo({forward:'/plans', back:''}))
    }

    // changes redux store var pageNumber to 1
    // whenever this component loads for sidebar
    // styling.
    useEffect(()=>{
        dispatch(changePageNumber(1)) 
    },[dispatch])

    //calls the handleSubmit function as infos changes
    useEffect(()=>{
        handleSubmit()
        // eslint-disable-next-line
    }, [info])

    return (
        <main className='lg:w-full relative lg:h-full lg:px-0 px-6 lg:my-14 lg:mr-[6rem]'>
            <div className='lg:ml-7 mt-6 lg:mt-[unset]'>
                <Headers h1={h1} p={p}/>
            
                <InfoForm
                    phoneError={phoneError}
                    emailError={emailError}
                    nameError={nameError}
                    info={info}
                    onChange={handleChange}
                />
            </div>
        </main>
    )
}