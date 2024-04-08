
export default function InfoForm({info, onChange, phoneError, emailError, nameError}){
    

    // Error messages to be shown when an input's value is invalid

    const errorMsg0 = 'This field is required'
    const errorMsg1 = info.email === '' ? 'This field is required':'Please enter a valid email'
    const errorMsg2 = info.phone === '' ? 'This field is required':'Please enter a valid phone number'


    // inputs for some reasons it 
    const infoForm = 
    <div className="relative w-full">
        <label htmlFor='name' className='font flex w-[100%] max-w-[450px] lg:w-[450px] justify-between capitalize font-Ubuntu-Regular text-sm text-[#02295a]'>
            Name
            <p className={`text-red-500 font-Ubuntu-Regular ${nameError ? 'visible': 'invisible'}`}>{errorMsg0}</p>
        </label>
        <input 
            type='text' 
            id='name' 
            value={info.name} 
            onChange={onChange}
            name='name'
            required
            placeholder='e.g Jalil Karma'
            className='lg:w-[450px]  w-[100%] max-w-[450px] indent-3 text-[1rem] font-Ubuntu-Regular border-solid outline-none border-[1px] h-[43px] lg:h-[50px] mb-4 lg:mb-6 rounded-[4px] lg:rounded-lg my-0'
        />

        <label htmlFor='email' className='capitalize flex w-[100%] max-w-[450px] lg:w-[450px] justify-between font-Ubuntu-Regular text-sm text-[#02295a]'>
            Email Address
            <p className={`${emailError ? 'visible' : 'invisible'} font-Ubuntu-Regular text-red-500`}>{errorMsg1}</p>
        </label>
        <input 
            type='email' 
            className={`lg:w-[450px] w-[100%] max-w-[450px] ${emailError ? 'border-red-500' : ''} indent-3 text-[1rem] font-Ubuntu-Regular border-solid mb-4 outline-none border-[1px] h-[43px] lg:h-[50px] lg:mb-6 rounded-[4px] lg:rounded-lg my-0`} 
            id='email' value={info.email} 
            onChange={onChange} 
            name='email'
            required 
            placeholder='Enter your email address'
        />

        <label htmlFor='phone' className='font flex justify-between w-[100%] max-w-[450px] lg:w-[450px] capitalize font-Ubuntu-Regular text-sm text-[#02295a]'>
            Phone Number
            <p className={`${phoneError ? 'visible' : 'invisible'} text-red-500`}>{errorMsg2}</p>
        </label>
        <input 
            type='tel' 
            id='phone' 
            value={info.phone} 
            onChange={onChange} 
            name='phone'
            required
            placeholder='Enter your phone number'
            className={`lg:w-[450px] w-[100%] max-w-[450px] ${phoneError ? 'border-red-500' : ''} mb-8 indent-3 text-[1rem] font-Ubuntu-Regular border-solid outline-none border-[1px] h-[43px] lg:h-[50px] lg:mb-6 rounded-[4px] lg:rounded-lg my-0`}
        />    
    </div>

    return infoForm
}