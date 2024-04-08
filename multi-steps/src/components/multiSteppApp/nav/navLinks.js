import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { changeYearly } from "../../features/yearlySlice";

export default function NavBtns(){
    const pageNumber = useSelector(state=> state.page.value)
    const confirm = useSelector(state => state.confirm.value)
    const goTo = useSelector(state => state.goTo.value)
    const dispatch = useDispatch()

    function backClick(){
       return pageNumber === 3 ? dispatch(changeYearly(false)) : ''
    }

    return(
        <div className='flex items-center bottom-8 absolute mx-auto w-[100%] justify-between'>
            <Link onClick={backClick} to={goTo?.back} className={`text-[#b2b2b2] ${pageNumber === 1 ? 'invisible' : 'visible'} ml-2 relative`}>Go back</Link>
            <Link to={confirm ? goTo?.forward : null} className={`rounded-lg flex mr-7 relative items-center justify-center w-32 h-12 ${pageNumber === 4 ? 'bg-[#473dff]' : 'bg-[#02295a]'} text-white`}>{pageNumber === 4 ? 'Confirm' : 'Next Step'}</Link>
        </div>
    )
}