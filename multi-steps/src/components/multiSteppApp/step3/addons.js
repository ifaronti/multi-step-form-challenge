import { useState } from "react"
import Header from "../headers"
import {useDispatch, useSelector} from "react-redux"
import { updateAddons } from "../../features/addonsSlice"
import NavBtns from "../nav/navLinks"
import { useNavigate } from "react-router-dom"
import { changePageNumber } from "../../features/pageNumberSlice"
import AddonsInput from "./addonsInput"


export default function Addons(){
    const yearly = useSelector(state => state.yearly.value)
    const [addonsObj, setAddonsObj] = useState({})
    const dispatch = useDispatch()
    const goTo = useNavigate()

    // Updates the addonObj var incase an addon is selected.
    // The addonsObj is then used to update redux store var addons
    // in the handleSubmit function.
    function handleChange(e){
        setAddonsObj(prevObj =>{
            if(e.target.checked){
                return {...prevObj, [e.target.name]:e.target.value}
            }
        })
    }

    // The checkboxed used needs no validation has they are optional but 
    // this function changes the redux store state var page number and
    // also updates addons redux store state var if any addon is selected.
    function handleSubmit(e){
        e.preventDefault()
        goTo('/checkout')
        dispatch(changePageNumber(4))
        dispatch(updateAddons(addonsObj))
    }
    
    // Header component text.
    const h1 = 'Pick add-ons'
    const p = 'Add-ons help enhance your gaming experience.'

    return(
        <main className="ml-[3.7rem] mx-auto relative h-[100%]">

            <div className="mt-14 ml-4"><Header h1={h1} p={p}/></div>

            <AddonsInput yearly={yearly} handleChange={handleChange}/>
            
            <div className=" w-[478px] ml-3">
                <NavBtns back={'/plans'} forward={handleSubmit}/>
            </div>
        </main>
    )
}