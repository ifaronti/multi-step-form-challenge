import Slider from './yearlySlider'
import Header from "../headers";
import { useSelector, useDispatch } from "react-redux";
import { changeYearly } from "../../features/yearlySlice";
import { updatePlan } from "../../features/planValueSlice";
import { useNavigate } from 'react-router-dom';
import {useState } from 'react';
import { changePageNumber } from '../../features/pageNumberSlice';
import NavBtns from '../nav/navLinks';
import RadioBtns from './radioBtnsForm';

export default function Plans(){
    const yearly = useSelector(state => state.yearly.value)
    const [price, setPrice] = useState(0)
    const [selected, setSelected] = useState({})
    const [showError, setShowError] = useState(false)

    const dispatch = useDispatch()
    const goTo = useNavigate()
    

    // updates the plan variable in redux store updates price state variable
    // used to check if an option has been selected in handleSubmit function.

    function handleChange(e){
        const {value, id} = e.target
        const picked = {[id]: value}
        setSelected(picked)
        setPrice(value)
        setShowError(false)
    }

    function handleSlider(e){
        const {checked} = e.target
        if(checked){
            return dispatch(changeYearly(true))
        }
        if(!checked){
            return dispatch(changeYearly(false))
        }
    }

    // Ensures a plan has been selected before moving to step 3. This also
    // changes the page number redux state var for the sideBar styling change.

    function handleSubmit(e){
        e.preventDefault()
        if(price === 0){
            setShowError(true)
        }
        else{
            dispatch(changePageNumber(3))
            dispatch(updatePlan(selected))
            goTo('/addons')
        }
    }

    // error msg displayed when no plan is selected
    const errorMsg = 
        <p 
            className={`text-red-500 mx-auto mt-2 
            ${showError ? 'visible' : 'invisible'}`}
            >One plan must be selected
        </p>

    // Header component texts.
    const h1 = 'Select your plan'
    const p = 'You have the option of monthly or yearly billing'

    return(
        <main className="mx-auto ml-[3.7rem] my-auto h-[100%] flex-col flex relative w-fit">

            <div className="ml-3 mt-14 -mb-5"><Header h1={h1} p={p}/></div>

            <RadioBtns yearly={yearly} handleChange={handleChange}/>

            <Slider onChange={handleSlider}/>
            {errorMsg}

            <div className='ml-3'>
                <NavBtns back={'/'} forward={handleSubmit}/>
            </div>
        </main>
    )
}