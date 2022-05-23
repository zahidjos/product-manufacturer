import React from 'react';
import './LogIn.css'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';

const LogIn = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, usergoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [userAuth, loadingUser, errorUser] = useAuthState(auth);
    const location=useLocation();
    const navigate=useNavigate();
    if(loadingUser||loading){
      return <Spinner></Spinner>
    }
   
    const onSubmit =async data =>{
           await signInWithEmailAndPassword(data.email,data.password);
           let from = location.state?.from?.pathname || "/";
           navigate(from,{ replace: true });
    } ;
    
   
   
    return (
        <div className='pt-10'>

            
            <div className='w-1/3 mx-auto'>
            <div className="card  bg-base-100 shadow-xl">
  
  <div className="card-body items-center  text-center">
    <h2 className="card-title text-center">Log In</h2>
    <div className='text-center w-full  from_part'>
    <form onSubmit={handleSubmit(onSubmit)}>
 <div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
   </label>
  <input type="email" className="input input-bordered w-full max-w-xs" placeholder="Type here" {...register("email", { required:{
      value:true,
      message:"Email is require"
  } ,
  pattern:{
   value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
   message:"provide valid email"
  },
maxLength:350
    })} />
 <label className="label">
  {errors.email?.type === 'required' &&  <span className="label-text-alt text-rose-600">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-rose-600">{errors.email.message}</span>}
</label>
</div>
<div class="form-control mx-auto w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
   </label>
  <input type="password" className="input input-bordered w-full max-w-xs" placeholder="Type here" {...register("password", { required:{
      value:true,
      message:"Password is require"
  },
  minLength:{
   value:true,
   message:"Password give minimum 6 character"
  }
    })} />
 <label className="label">
  {errors.password?.type === 'required' &&  <span className="label-text-alt text-rose-600">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-rose-600">{errors.password.message}</span>}
</label>
</div>
{error && <p className='text-red-600'>{error.message}</p>}
      
     
    

      <input className="btn btn-active btn-accent  w-full max-w-xs" type="submit" value="Log In" />
    
      
    </form>
    </div>
    <div class="divider">OR</div>
    <button onClick={()=>signInWithGoogle()} class="btn btn-active btn-ghost w-full max-w-xs ">Sign In with Google</button>
    <p className='pt-5'>You Have no Account: <Link className='text-fuchsia-600' to='/registration'>Please Registration</Link></p>
    </div>
</div>
     </div>
        </div>
    );
};

export default LogIn;