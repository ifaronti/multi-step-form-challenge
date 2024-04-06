import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function CheckDetails(){
    const plan = useSelector(state => state.plan.value)
    const yearly = useSelector(state => state.yearly.value)
    const addons = useSelector(state => state.addons.value)
    const goTo = useNavigate()

    function reload(){
        goTo('/')
        window.location.reload()
    }

    const checkoutDetails = 
        <div className="md:w-[450px] w-[86%] lg:mx-0 mx-auto px-6 py-4 h-48 bg-[#F8F9FE] rounded-lg">

            <article className="flex justify-between items-center">
                <section>
                    <h2 className="font-Ubuntu-Medium md:text-[16px] text-[14px] mb-1 text-[#02295a]">{Object.keys(plan)} {yearly ? '(Yeary)': '(Monthly)'}</h2>

                    <Link onClick={reload} className="text-[#B6B6C0] md:text-[16px] text-[14px] cursor-pointer hover:text-[#473dff] font-Ubuntu-Regular underline decoration-2">Change</Link>
                </section>

                <span className="font-Ubuntu-Bold md:text-[16px] text-[14px] text-[#02295a]">{`$${Object.values(plan)}/${yearly ? 'yr' : 'mo'}`}</span>

            </article>

            <hr className="mt-4 mb-4"/>

            { addons.onlineService && <section className="flex items-center mb-3 text-sm justify-between">

                <p className="text-[#B6B6C0] font-Ubuntu-Regular  font-thin">Online service</p>

                <p className="text-[#02295a] font-Ubuntu-Regular">{`+$${addons.onlineService}/${yearly ? 'yr' : 'mo'}`}</p>
            </section>}

            {addons.storage && <section className="flex items-center mb-3 text-sm justify-between">

                <p className="text-[#B6B6C0] font-Ubuntu-Regular font-thin">Larger storage</p>

                <p className="text-[#02295a] font-Ubuntu-Regular font-thin">{`+$${addons.storage}/${yearly ? 'yr' : 'mo'}`}</p>
            </section>}

            {addons.profileTheme && <section className="flex items-center text-sm justify-between">

                <p className="text-[#B6B6C0] font-Ubuntu-Regular font-thin">Custom Profile</p>

                <p className="text-[#02295a] font-Ubuntu-Regular font-thin">{`+$${addons.profileTheme}/${yearly ? 'yr' : 'mo'}`}</p>
            </section>}
        </div>

        return checkoutDetails
}