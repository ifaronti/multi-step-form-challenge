import { useSelector, useDispatch } from "react-redux"
import CheckDetails from "./checkOutDetails"
import Header from "../headers"
import { useEffect } from "react"
import { changePageNumber } from "../../features/pageNumberSlice"
import { navigateTo } from "../../features/navigateSlice"

export default function Checkout(){
    const plan = useSelector(state => state.plan.value)
    const yearly = useSelector(state => state.yearly.value)
    const addons = useSelector(state => state.addons.value)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(changePageNumber(4))
        dispatch(navigateTo({forward:'/confirm', back:'/addons'}))
        // eslint-disable-next-line
    },[])

    // Header text props values
    const h1 = 'Finishing up'
    const p = 'Double-check everything looks OK before confirming'

    // calculates the total costs at checkout by combining values from redux store's
    // plan and addons var
    const pickedTotal = 
           [...Object.values(addons), Object.values(plan)].reduce((a, b)=> Number(a) + Number(b), 0)

    // The display section for picked
    const total = 
        <section className="flex w-full mt-6 md:px-6 px-12 items-center justify-between">
            <p className="f font-Ubuntu-Regular font-thin text-sm text-[#a4a7b9]">Total ({yearly ? 'per year' : 'per month'})</p>
            <p className="text-[#473dff] md:text-xl text-lg  font-Ubuntu-Bold">{`+$${pickedTotal}/${yearly ? 'yr': 'mo'}`}</p>
        </section>

    return(
        <main className="mx-20 mb-8 relative mt-14">

            <Header h1={h1} p={p}/>

            <CheckDetails/>

            {total}
        </main>
    )
}