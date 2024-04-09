import Slider from './yearlySlider'
import Header from "../headers";
import { useSelector, useDispatch } from "react-redux";
import { changeYearly } from "../../features/yearlySlice";
import { updatePlan } from "../../features/planValueSlice";
import {useState, useEffect } from 'react';
import { changePageNumber } from '../../features/pageNumberSlice'
import RadioBtns from './radioBtnsForm';
import { changeConfirm } from '../../features/confirmSlice';
import { navigateTo } from '../../features/navigateSlice';

export default function Plans(){
    const yearly = useSelector(state => state.yearly.value)
    const [selected, setSelected] = useState(null)
    const [showError, setShowError] = useState(false)
    const [monthlyValue, setMonthlyValue] = useState({})

    const dispatch = useDispatch()
    
    // updates selected and monthlyValue state variable used to check if an
    // option has been selected in handleSubmit function.

    function handleChange(e){
        const {value, id} = e.target
        const picked = {[id]: value}
        setSelected(picked)
        setShowError(false)
        setMonthlyValue(picked)
        
    }

    useEffect(()=>{
        dispatch(changePageNumber(2))
        dispatch(changeConfirm(false))
    // eslint-disable-next-line
    },[])

    function handleSlider(e){
        const {checked} = e.target
        const newKeys = Object?.keys(selected)
        const newValue = Number(Object.values(selected)) * 10
        if(checked){
            dispatch(changeYearly(true))
            setSelected({[newKeys]:newValue})
        }
        else{
             dispatch(changeYearly(false))
             setSelected(monthlyValue)
        }
    }

    // Ensures a plan has been selected before moving to step 3.
    // This also updates the redux store's navigation and plan objects 

    function handleSubmit(){
        if(!selected){
            setShowError(true)
            dispatch(changeConfirm(false))
            dispatch(navigateTo({forward:'', back:'/'}))
        }
        else{
            dispatch(updatePlan(selected))
            dispatch(changeConfirm(true))
            dispatch(navigateTo({forward:'/addons', back:'/'}))
        }
    }

    useEffect(()=>{
        handleSubmit()
      // eslint-disable-next-line
    },[selected, showError])

    // error msg displayed when no plan is selected
    const errorMsg = 
        <p 
            className={`text-red-500 mx-auto mt-3 
            ${showError ? 'visible' : 'invisible'}`}
            >One plan must be selected
        </p>

    // Header component texts.
    const h1 = 'Select your plan'
    const p = 'You have the option of monthly or yearly billing'

    return(
        <main className="h-[100%] lg:mr-[4.5rem] lg:mb-[unset] mb-8 flex-col flex relative">

            <div className="lg:ml-3 ml-5 lg:mt-12 mt-8 -mb-7"><Header h1={h1} p={p}/></div>

            <RadioBtns yearly={yearly} handleChange={handleChange}/>
            
            <Slider onChange={handleSlider}/>
            {errorMsg}
        </main>
    )
}