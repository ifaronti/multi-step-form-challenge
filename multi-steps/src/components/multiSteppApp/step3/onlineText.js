import { useSelector } from "react-redux"


 export default function LabelContentTextOnline(){
    const yearly = useSelector(state => state.yearly.value)
    return(
    <section className="flex px-5 w-[100%] items-center justify-between">
        <article className="md:ml-12 ml-8">
            <h2 className="text-[#02295a] md:text-[16px] font-Ubuntu-Medium text-[14px]">Online service</h2>
            <p className="md:text-sm text-[12px] text-[#b2b2b2] font-Ubuntu-Regular">Access to multiplayer games</p>
        </article>
        <span className="md:text-sm text-[11px] font-Ubuntu-Regular text-[#473dff] ">{yearly ? '+$10/yr' : '+$1/mo'}</span>
    </section>
    )
} 

