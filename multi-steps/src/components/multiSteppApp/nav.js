
export default function SideBar(){

    return(
        <nav className="mx-4 min-w-[275px] my-auto relative">
            <img className="relative" src={`${process.env.PUBLIC_URL}/assets/images/bg-sidebar-desktop.svg`} alt="" />
        </nav>
    )
}