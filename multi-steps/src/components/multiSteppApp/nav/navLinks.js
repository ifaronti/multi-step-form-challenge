import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changePageNumber } from "../../features/pageNumberSlice";
import { changeYearly } from "../../features/yearlySlice";

export default function NavBtns({back, forward, linkText, background}){
    const pageNumber = useSelector(state=> state.page.value)
    const dispatch = useDispatch()
    const goTo = useNavigate()

    function backPage(){
        const prevPage = pageNumber === 1 ? 1 : pageNumber - 1
        dispatch(changePageNumber(prevPage))
        dispatch(changeYearly(false))
        goTo(back)
    }

    return(
        <div className='flex items-center bottom-8 absolute mx-auto w-[100%] justify-between'>
            <Link onClick={backPage} to={back} className='text-[#b2b2b2] ml-2 relative'>Go back</Link>
            <Link onClick={forward} className={`rounded-lg flex mr-7 relative items-center justify-center w-32 h-12 ${background ? background : 'bg-[#02295a]'} text-white`}>{linkText || 'Next Step'}</Link>
        </div>
    )
}