import NavBtns from "../nav/navLinks"
import { useSelector } from "react-redux"
import CheckDetails from "./checkOutDetails"
import Header from "../headers"
import { useNavigate } from "react-router"

export default function Checkout(){
    const plan = useSelector(state => state.plan.value)
    const yearly = useSelector(state => state.yearly.value)
    const addons = useSelector(state => state.addons.value)
    const goTo = useNavigate()

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

    // Confirms purchases by navigating to final page
    function confirm(e){
        e.preventDefault()
        goTo("/confirm")
    }

    return(
        <main className="lg:mx-20 mb-8 relative mt-14">

            <Header h1={h1} p={p}/>

            <CheckDetails/>

            {total}

            <div className="w-[473px]">
                <NavBtns forward={confirm} linkText='Confirm' back={'/addons'} background='bg-[#473dff]'/>
            </div>
        </main>
    )
}