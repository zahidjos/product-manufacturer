import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Spinner from '../Spinner/Spinner';
import TokenHook from '../TokenHook/TokenHook';
import AdminHook from '../AdminHook/AdminHook';


const Registration = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating,errorUpdate] = useUpdateProfile(auth);
      const [user, loading, error] = useAuthState(auth);
      const [sendEmailVerification, sending, errorsend] = useSendEmailVerification(
        auth
      );
      const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
     const[token]=TokenHook(user1||userGoogle);
     const[admin]=AdminHook(user1||userGoogle)
     const navigate=useNavigate();
   
    const onSubmit =async (data )=>{
        // console.log(data)
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({displayName:data.name});
         sendEmailVerification();
        
      


    
    } 
    
    if(loading||loading1||updating||sending){
      return <Spinner></Spinner>
    }
    if(token){
      navigate('/');
    }
    
    return (
        
            <div className='pt-10'>

            
<div className='w-1/3 mx-auto'>
<div className="card  bg-base-100 shadow-xl">

<div className="card-body items-center  text-center">
<h2 className="card-title text-center">Sign Up</h2>
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
maxLength:350 })} />
<label className="label">
{errors.email?.type === 'required' &&  <span className="label-text-alt text-rose-600">{errors.email.message}</span>}
{errors.email?.type === 'pattern' &&  <span className="label-text-alt text-rose-600">{errors.email.message}</span>}
</label>
</div>

<div class="form-control mx-auto w-full max-w-xs">
<label class="label">
<span class="label-text">Name</span>
</label>
<input type="name" className="input input-bordered w-full max-w-xs" placeholder="Type here" {...register("name", { required:{
value:true,
message:"Name is require"
},
maxLength: 350 })} />
<label className="label">
{errors.name?.type === 'required' &&  <span className="label-text-alt text-rose-600">{errors.name.message}</span>}

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
},
maxLength: 20 })} />
<label className="label">
{errors.password?.type === 'required' &&  <span className="label-text-alt text-rose-600">{errors.password.message}</span>}
{errors.password?.type === 'minLength' &&  <span className="label-text-alt text-rose-600">{errors.password.message}</span>}
</label>
</div>

{error1 && <p className='text-red-600'>{error1.message}</p>}


<input className="btn btn-active btn-accent  w-full max-w-xs" type="submit" value="Log In" />


</form>
</div>
<div class="divider">OR</div>
<button onClick={()=>signInWithGoogle()} class="btn btn-active btn-ghost w-full max-w-xs ">Sign In with Google</button>
<p className='pt-5'>Already You Have  Account: <Link className='text-fuchsia-600' to='/logIn'>Please go to Sign In</Link></p>
</div>
</div>
</div>
</div>
       
    );
};

export default Registration;