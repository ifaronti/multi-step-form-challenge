import { useSelector } from "react-redux"


 export default function LabelContentTextOnline(){
    const yearly = useSelector(state => state.yearly.value)
    return(
    <section className="flex px-5 w-[100%] items-center justify-between">
        <article className="ml-12">
            <h2 className="text-[#02295a]">Online service</h2>
            <p className="text-sm text-[#b2b2b2]">Access to multiplayer games</p>
        </article>
        <span className="text-sm text-[#473dff] ">{yearly ? '+$10/yr' : '+$1/mo'}</span>
    </section>
    )
} 

