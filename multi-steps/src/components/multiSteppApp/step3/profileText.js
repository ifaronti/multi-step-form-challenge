import { useSelector } from "react-redux"

export default function LabelContentTextProfile(){
     const yearly = useSelector(state => state.yearly.value)
    return(
    <section className="flex px-5 w-[100%] items-center justify-between">
        <article className="ml-12">
            <h2 className="text-[#02295a]">Customizable Profile</h2>
            <p className="text-sm text-[#b2b2b2]">Custom theme on your profile</p>
        </article>
        <span className="text-sm text-[#473dff] ">{yearly ? '+$20/yr' : '+$2/mo'}</span>
    </section>
    )
}