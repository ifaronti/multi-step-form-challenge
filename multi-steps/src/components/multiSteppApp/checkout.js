import { Link } from "react-router-dom"


export default function Checkout(){

    const checkoutText=            
        <section className="relative mb-9">
            <h1 className="text-[#02295a] mb-2 text-4xl font-Ubuntu-Bold">Finishing up</h1>
            <p className="text-[#AFB0B5] font-Ubuntu-Regular my-0 mx-auto">
                Double-check everything looks OK before confirming
            </p>
        </section>

    const checkoutDetails = 
            <div className="w-[450px] px-6 py-4 h-48 bg-[#F8F9FE] rounded-lg">
                <article className="flex justify-between items-center">
                    <section>
                        <h2 className="fo font-Ubuntu-Medium text-[#02295a]">Arcade (Monthly)</h2>
                        <Link className="text-[#B6B6C0] cursor-pointer hover:text-[#473dff] font-Ubuntu-Regular underline decoration-2">Change</Link>
                    </section>
                    <span className="f font-Ubuntu-Bold text-[#02295a]">$9/mo</span>
                </article>
                <hr className="mt-4 mb-4"/>

                <section className="flex items-center mb-3 text-sm justify-between">
                    <p className="text-[#B6B6C0] font-Ubuntu-Regular  font-thin">Online service</p>
                    <p className="text-[#02295a] font-Ubuntu-Regular">+$1/mo</p>
                </section>

                <section className="flex items-center text-sm justify-between">
                    <p className="text-[#B6B6C0] font-Ubuntu-Regular font-thin">Larger storage</p>
                    <p className="text-[#02295a] font-Ubuntu-Regular font-thin">+$2/mo</p>
                </section>
            </div>

    const total = 
            <section className="flex mt-6 px-6 items-center justify-between">
                <p className="f font-Ubuntu-Regular font-thin text-sm text-[#a4a7b9]">Total (per month)</p>
                <p className="text-[#473dff] text-xl font-Ubuntu-Bold">+$12/month</p>
            </section>

    return(
        <div className="mx-20 mt-14">
            {checkoutText}
            {checkoutDetails}
            {total}
        </div>
    )
}

