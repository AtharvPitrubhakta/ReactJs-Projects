import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email:"", password:""
    });

    const [showPassword, setShowPassword] = useState(false);

    // Parameter ke andar event pass kiya hai
    function changeHandler(event) {

        setFormData( (prevData) => (
            {
                // prevdata data ki copy pass kar rahe hai
                ...prevData,
                // Event.targe.name ko equal karan hai event.targe.value ke sath
                [event.target.name]:event.target.value
            }
        ) )
    }

    // OnSumbit function on Sign In button
    function sumbitHandler(event) {
        // First prevent the default behavior
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log('Printing the form data');
        console.log(formData); 
        navigate("/dashboard");
    }

  return (
    <form onSubmit={sumbitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
    
        {/* Email Addrees Section */}
        <label className='w-full'>
            <p className='text-md text-richblack-5 mb-1'>
                Email Address <sup className='text-pink-200 text-lg'> *</sup>
            </p>
            <input 
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
            />
        </label>
        
        {/* Password Section */}
        <label className='w-full relative'>
            <p className='text-md text-richblack-5 mb-1'>
                Password <sup className='text-pink-200 text-lg'> *</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value={formData.passoword}
                onChange={changeHandler}
                placeholder='Enter password'
                name='password'
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
            />

             {/* Password Icon Section */}
            <span 
            className='absolute right-3 top-11 cursor-pointer'
            onClick={() => setShowPassword( (prev) => !prev )}>
                                                    {/* Phele password ki value true hogi to use false kardo nhi to password ki value false hogi to use true kardo using onClick function I mean yaha hum toggle kar rahe hai true or false ki bich me */}
            
                {   
                    showPassword ?   
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                }

            </span>

            {/* Forgot Password Section */}
            <Link to='#'>
                {/* You can also right shift the Forgot Password using this => max-w-max ml-auto*/}
                <p className='text-xs mt-1 text-blue-100 text-right'>
                    Forgot Password
                </p>
            </Link>
        </label>

        {/* Sign In Section */}
        <button className='bg-yellow-50 text-richblack-900 font-medium w-full rounded-lg px-3 py-2 mt-6'>
            Sign In
        </button>


    </form>
  )
}

export default LoginForm