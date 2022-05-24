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
       <Route path='/dashboard' element={<Dashboard></Dashboard>}>
         <Route path='myOrders' element={<RequireAuth> <MyOrders></MyOrders></RequireAuth>}></Route>
         <Route path='addReview' element={<MyReview></MyReview>}></Route>
         <Route path='profile' element={<Profile></Profile>}></Route>
       </Route>
     </Routes>
     
    </div>
  );
}

export default App;
