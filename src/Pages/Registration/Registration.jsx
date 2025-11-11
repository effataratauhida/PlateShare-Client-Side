import { EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
const provider = new GoogleAuthProvider();

const Registration = () => {

const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.prevent.default();

    
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        const lengthPattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const specialCharPattern = /^(?=.*[!@#$%^&*(),.?:{}|<>|]).+$/;

         if(!lengthPattern.test(password)){
            
            setError('Password must be 6 character or longer!');
            return;
        }
        else if (!casePattern.test(password)){
            setError('Password must have one uppercase and one lowercase character!');
            return;
        }
        else if (!specialCharPattern.test(password)){
            setError('Password must contain at least one special character(e.g. ! @ # $ % ^ & *).');
            return;
        }

         setError('')

        if(!terms){
            setError('Please accept out terms and conditions!');
            return
        }


    }



     //  Google login
  const handleGoogleLogin = async () => {
     //console.log('google btn clicked')
 
 signInWithPopup(auth, provider)
 .then(result => {
     console.log(result.user);
 })
 .catch (error =>  {
     console.log(error)
 })
}


    return (
        <div>
            <title>Register</title>

            <div className='max-w-11/12 mx-auto flex justify-center mt-10 pb-20 '>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-bold text-2xl text-center text-[#005a32]'>Register Your Account</h2>

                    <form onSubmit={handleRegister}
                    className="card-body">
                        <fieldset className="fieldset">

                            
            {/* Name */}
            <label className="label">Name</label>
            <input 
            name='name' 
            type="text" 
            className="input" 
            placeholder="Name"
            required /> 

            {/* Email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" 
          required/>

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input 
            name='photo' 
            type="text" 
            className="input" 
            placeholder="Photo URL" 
            required/>

             {/* Password */}

        <label className="label">Password</label>
          <div className='relative'>
            <input 
              //type={showPass ? 'text' : 'password'} 
              name='password' 
              className="input" 
              placeholder="Password"
              required />
            <button 
              //onClick={handleTogglePasswordShow}
              className="btn btn-xs absolute top-2 right-7"> 
              {/* {showPass 
              ? <EyeOff size={16} strokeWidth={1} /> 
              : <Eye size={16} strokeWidth={1} />} */}
            </button>
            </div>

             {/* terms & conditions */}
          <label class="label" className='mt-2'>
            <input type="checkbox" 
            class="checkbox"  name="terms" id="" />
            Accept our terms and conditions
          </label>

          <button type='submit'
                className="btn mt-4 bg-[#238b45] hover:bg-transparent border-[#238b45] hover:border-[#005a32] border-2 hover:scale-105
                        text-white hover:text-[#005a32]">
            Register</button>


            <p className='text-center text-[#304c77] text-base font-medium mt-2'>or,</p>

          <button 
          onClick={handleGoogleLogin}
          className='btn mt-2 w-full px-4 py-3'><FcGoogle size={24} />
          Continue with Google</button>

          <p className='text-center text-[#005a32] text-base font-medium mt-2'>Already have an account?{" "} <Link to='/auth/login' className='text-red-600 underline '>Please Login</Link></p>

         

            
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;