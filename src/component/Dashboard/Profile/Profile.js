import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config';
import Spinner from '../../Spinner/Spinner';



const Profile = () => {
   const navigate=useNavigate()
    const[user]=useAuthState(auth);
    const[profileData,setProfileData]=useState({})
    useEffect(()=>{
    if(user){
        fetch(`https://arcane-garden-55931.herokuapp.com/profile/${user.email}`)
        .then(res=>res.json())
        .then(result=>setProfileData(result))
    }
    },[user])
        
    const handelProfile=()=>{
       navigate('updateProfile')
    }
    // console.log(user)
    return (
        <div>
            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
 
  <div class="card-body  text-center">
    <h2 class="card-title">Email: {user?.email}</h2>
    <h2 class="card-title">Name: {user?.displayName}</h2>
   {profileData?.address?<h2 class="card-title">Address: {profileData?.address}</h2>:""} 
   {profileData?.number?<h2 class="card-title">Number: {profileData?.number}</h2>:''} 
   {profileData?.number?<h2 class="card-title">Age: {profileData?.age}</h2>:''} 

   
   
    <div class="card-actions grid justify-items-center ">
      <button onClick={handelProfile} class="btn btn-primary">Update Profile</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;