import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './component/Blog/Blog';
import LogIn from './component/LogIn/LogIn';
import Registration from './component/Registration/Registration';
import Purchase from './component/Purchase/Purchase';
import { useState } from 'react';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Dashboard from './component/Dashboard/Dashboard';
import MyOrders from './component/Dashboard/Myorders/MyOrders';
import MyReview from './component/Dashboard/Myreview/MyReview';
import Profile from './component/Dashboard/Profile/Profile';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import MangeOrder from './component/Dashboard/MangeOrder/MangeOrder';
import AddProduct from './component/Dashboard/AddProduct/AddProduct';
import MangeProduct from './component/Dashboard/MangeProduct/MangeProduct';
import Payment from './component/Dashboard/Payment/Payment';
import UpdateProfile from './component/Dashboard/UpdateProfile/UpdateProfile';
import MyPortfolio from './component/Myportfolio/MyPortfolio';
import NotFound from './component/NotFound/NotFound';


function App() {
  const [mainData,setMainData]=useState({})
  return (
    <div  classNameName="App ">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home setMainData={setMainData}></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/logIn' element={<LogIn></LogIn>}></Route>
       <Route path='/registration' element={<Registration></Registration>}></Route>
       <Route path='/purchase/:id' element={<RequireAuth> <Purchase mainData={mainData}></Purchase></RequireAuth>}></Route>
       <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
         <Route path='myOrders' element={<RequireAuth> <MyOrders></MyOrders></RequireAuth>}></Route>
         <Route path='addReview' element={<MyReview></MyReview>}></Route>
         <Route path='' element={<Profile></Profile>}></Route>
         <Route path='mangeOrder' element={<MangeOrder></MangeOrder>}></Route>
         <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
         <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
         <Route path='mangeProduct' element={<MangeProduct></MangeProduct>}></Route>
         <Route path='payment/:id' element={<Payment></Payment>}></Route>
         <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
       </Route>
       <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
