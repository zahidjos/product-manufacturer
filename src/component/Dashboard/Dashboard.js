import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.config';
import AdminHook from '../AdminHook/AdminHook';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin]=AdminHook(user)
    
    return (
        <div>
            <div class="navbar bg-slate-900 text-slate-50">
              
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900  rounded-box w-52">
      {admin?.role==="admin"? "":<li><Link to='myOrders'>My Orders</Link></li>} 
     {admin?.role==="admin"? "":<li><Link to='addReview'>Add a Review</Link></li>} 
      
      <li><Link to='profile'>My Profile</Link></li>
      {admin?.role==="admin"?<li><Link to='mangeOrder'>Mange All Orders</Link></li> :""} 
      {admin?.role==="admin"?<li><Link to='addProduct'>Add A Product</Link></li> :""}
      {admin?.role==="admin"?<li><Link to='makeAdmin'>Make Admin</Link></li> :""}
      {admin?.role==="admin"?<li><Link to='mangeProduct'>Mange Product</Link></li> :""}
      </ul>
    </div>
    
  </div>
  <div class="navbar-end  hidden lg:flex">
    <ul class="menu   menu-horizontal p-0">
     {admin?.role==="admin"? "":<li><Link to='myOrders'>My Orders</Link></li>} 
     {admin?.role==="admin"? "":<li><Link to='addReview'>Add a Review</Link></li>} 
      
      <li><Link to=''>My Profile</Link></li>
      {admin?.role==="admin"?<li><Link to='mangeOrder'>Mange All Orders</Link></li> :""} 
      {admin?.role==="admin"?<li><Link to='addProduct'>Add A Product</Link></li> :""}
      {admin?.role==="admin"?<li><Link to='makeAdmin'>Make Admin</Link></li> :""}
      {admin?.role==="admin"?<li><Link to='mangeProduct'>Mange Product</Link></li> :""}
      
      
     
     
    </ul>
  </div>
  
</div>
<div>
<Outlet />

</div>

        </div>
    );
};

export default Dashboard;