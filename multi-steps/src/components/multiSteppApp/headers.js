

export default function Header({h1, p}){

    const headerText =
        <section className="relative mb-9">
            <h1 className="text-[#02295a] mb-2 text-4xl font-Ubuntu-Bold">{h1}</h1>
            <p className="text-[#b2b2b2] font-Ubuntu-Regular my-0 mx-auto">{p}</p>
        </section>

    return headerText
}