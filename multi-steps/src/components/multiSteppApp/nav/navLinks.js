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
        <div className='flex items-center lg:my-[unset] lg:p-0 p-5 lg:h-[unset] h-100% lg:bottom-8 absolute lg:w-[462px] w-[100%] justify-between'>
            <Link onClick={backClick} to={goTo?.back} className={`text-[#b2b2b2] ${pageNumber === 1 ? 'invisible' : 'visible'} font-Ubuntu-Medium relative`}>Go back</Link>
            <Link 
                to={confirm ? goTo?.forward : null} 
                className={`
                    lg:rounded-lg 
                    lg:text-[1rem] 
                    text-[15px] 
                    font-Ubuntu-Medium rounded-md flex 
                    relative w-[100px] h-[44px] items-center 
                    justify-center lg:w-32 lg:h-12 
                    ${pageNumber === 4 ? 'bg-[#473dff]' 
                    : 'bg-[#02295a]'} text-white`}>
                    {pageNumber === 4 ? 'Confirm' : 'Next Step'}
            </Link>
        </div>
    )
}