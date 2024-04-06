 import { useSelector } from "react-redux"
 
 export default function LabelContentTextStorage(){
    const yearly = useSelector(state => state.yearly.value)
    return(
    <section className="flex px-5 w-[100%] items-center justify-between">
        <article className="md:ml-12 ml-8">
            <h2 className="text-[#02295a] font-Ubuntu-Medium md:text-[16px] text-[14px]">Larger storage</h2>
            <p className="md:text-sm text-[12px] font-Ubuntu-Regular text-[#b2b2b2]">Extra 1TB of cloud save</p>
        </article>
        <span className="md:text-sm text-[11px] font-Ubuntu-Regular text-[#473dff] ">{yearly ? '+$20/yr' : '+$2/mo'}</span>
    </section>
    )
}