import {useState} from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function Info(){
    const [info, setInfo] = useState({
        name:'',
        email:'',
        phone:''
    })

    function handleChange(event){
        const {name, value} = event.target
        setInfo(prevInfo => {
            return {
                ...prevInfo,
                [name]: value
            }
        })
    }


    const phoneRegex = new RegExp('^(1\\s?)?(\\([\\d]{3}\\)|[\\d]{3})[\\s\\|-]?[\\d]{3}[\\s\\|-]?[\\d]{4}$')
  
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    function handleSubmit(event){
        event.preventDefault()
    }

    const infoForm = 
        <form onSubmit={handleSubmit}>
                <label htmlFor="name" className='font-Ubuntu-Regular text-sm text-[#02295a]'>Name</label>
                <input 
                    type="text" 
                    value={info.name} 
                    onChange={handleChange}
                    name='name'
                    placeholder='Enter first and last name'
                    id='name'
                    pattern=''
                    className='w-[450px] indent-3 font-Ubuntu-Regular border-solid border-2 outline-none h-14 rounded-md mb-6'
                />

                <label htmlFor="email" className='font font-Ubuntu-Regular text-sm text-[#02295a]'>Email</label>
                <input 
                    type="email" 
                    value={info.email} 
                    onChange={handleChange}
                    name='email'
                    placeholder='Enter email address'
                    pattern={encodeURIComponent(emailRegex)}
                    onInvalid={e => e.target.setCustomValidity('Enter a valid email address')}
                    onInput={e => e.target.setCustomValidity('')}
                    id='email'
                    className='w-[450px] indent-3 font-Ubuntu-Regular border-solid outline-none border-2 h-14 mb-6 rounded-md'
                />

                <label htmlFor="phone" className='font-Ubuntu-Regular text-sm text-[#02295a]'>Phone Number</label>
                <input 
                    type="tel" 
                    value={info.phone} 
                    onChange={handleChange}
                    name='phone'
                    placeholder='Enter phone number'
                    pattern={encodeURIComponent(phoneRegex)}
                    onInvalid={e => e.target.setCustomValidity('Enter a valid Phone Number')}
                    onInput={e => e.target.setCustomValidity('')}
                    id='phone'
                    className='w-[450px] indent-3 text-[1rem] font-Ubuntu-Regular border-solid outline-none border-2 h-14 mb-6 rounded-md my-0'
                />
        </form>

    return (
        <main className='w-full my-auto mx-[5rem]'>
            <section className='relative'>
                {infoForm}
            </section>
            <Link onClick={handleSubmit} to='/' className='rounded-lg flex  relative top-20 float-right mr-7 items-center justify-center w-32 h-12 bg-[#02295a] text-white'>Next Step</Link>
        </main>
    )
}