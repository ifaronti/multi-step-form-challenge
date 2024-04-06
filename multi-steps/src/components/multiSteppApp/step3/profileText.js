import { useSelector } from "react-redux"

export default function LabelContentTextProfile(){
     const yearly = useSelector(state => state.yearly.value)

    return(
    <section className="flex px-5 w-[100%] items-center justify-between">
        <article className="md:ml-12 ml-8">
            <h2 className="md:text-[16px] font-Ubuntu-Medium text-[14px] text-[#02295a]">Customizable Profile</h2>
            <p className="md:text-sm text-[12px] font-Ubuntu-Regular text-[#b2b2b2]">Custom theme on your profile</p>
        </article>
        <span className="md:text-sm text-[11px] font-Ubuntu-Regular text-[#473dff] ">{yearly ? '+$20/yr' : '+$2/mo'}</span>
    </section>
    )
}