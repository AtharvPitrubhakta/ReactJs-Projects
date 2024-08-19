import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName:"", 
        email:"", 
        password:"", 
        confirmPassword: ""
    })

    // Used for Account Type
    const [accountType, setAccountType] = useState('student');

    // Used by Create Password
    const [showPassword, setShowPassword] = useState(false);

    // Used by Confirm Password
    const [displayPassword, setDisplayPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function sumbitHandler(event) {
        // Firstly prevent the default behavior
        event.preventDefault();
        
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
        }

        setIsLoggedIn(true);
        toast.success("Account Created Successfully");  
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Final account data");
        console.log(finalData);

        navigate("/dashboard");
    }   

  return (
    <div>

        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
                className={
                    `${accountType === 'student' ?
                    "bg-richblack-900 text-richblack-5" :
                    "bg-transparent text-richblack-200"} 
                    py-2 px-5 rounded-full transition-all duration-200
                `}
                onClick={() => setAccountType("student")}
            >
                Student
            </button>
            <button
                 className={
                    `${accountType === 'instructor' ?
                    "bg-richblack-900 text-richblack-5" :
                    "bg-transparent text-richblack-200"} 
                    py-2 px-5 rounded-full transition-all duration-200
                `}
                onClick={() => setAccountType("instructor")}
            >
                Instructor
            </button>

        </div>

        <form onSubmit={sumbitHandler} 
        className='gap-y-4 flex flex-col'>

            {/* First Name and Last Name */}
            <div className='flex gap-x-4'>

                <label className='w-full'>
                    <p className='text-md text-richblack-5 mb-1'>
                        First Name <sup className='text-pink-200 text-lg'>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter first name'
                        value={formData.firstName}
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-md text-richblack-5 mb-1'>
                        Last Name <sup className='text-pink-200 text-lg'>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter last name'
                        value={formData.lastName}
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
                    />
                </label>

            </div>

            {/* Email Address */}
            <div>
                <label>
                    <p className='text-md text-richblack-5 mb-1'>
                        Email Address <sup className='text-pink-200 text-lg'>*</sup>
                    </p>
                    <input 
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        value={formData.email}
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
                    />
                </label>
            </div>
            
            {/* Create Password and Confirm Password */}
            <div className='flex gap-x-4'>

                <label className='relative w-full'>
                    <p className='text-md text-richblack-5 mb-1'>
                        Create Password <sup className='text-pink-200 text-lg'>*</sup>
                    </p>
                    
                    <input 
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='New password'
                        value={formData.password}
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
                    />
                    
                    <span 
                    className='absolute right-3 top-11 cursor-pointer'
                    onClick={ () => setShowPassword( (prev) => !prev) }>
                        {
                            showPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                        }
                    </span>
                
                </label>

                <label className='relative w-full'>
                    <p className='text-md text-richblack-5 mb-1'>
                        Confirm Password <sup className='text-pink-200 text-lg'>*</sup>
                    </p>

                    <input 
                        required
                        type={displayPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm password'   
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-3 opacity-2 border-b-richblack-700 border-b-2'
                    />

                    <span 
                    className='absolute right-3 top-11 cursor-pointer'
                    onClick={() => setDisplayPassword( (prev) => !prev )}>
                        {
                            displayPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                        }
                    </span>

                </label>
                
            </div>
            
            {/* Sign Up Button */}
            <button className='bg-yellow-50 text-richblack-900 font-medium w-full rounded-lg px-3 py-2 mt-6'>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignupForm