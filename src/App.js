import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Home from './pages/Home/Home'
import ShopPage from './pages/ShopPage/ShopPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import { Routes,Route } from "react-router-dom";

import { checkUserSession } from './store/user/userActions';


const App = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(checkUserSession());
},[]);





  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  )
}

export default App