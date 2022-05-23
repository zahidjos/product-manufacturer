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
       <Route path='/purchase' element={<RequireAuth> <Purchase mainData={mainData}></Purchase></RequireAuth>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
