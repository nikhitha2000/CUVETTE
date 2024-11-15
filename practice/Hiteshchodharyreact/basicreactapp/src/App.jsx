// eslint-disable-next-line no-unused-vars
import React, { lazy ,Suspense } from 'react';
import Header from './components/Restaurant Component/Header.jsx';
import Body from './components/Restaurant Component/Body.jsx';
import Check from './components/Restaurant Component/check.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/Restaurant Component/About.jsx';
import Error from './components/Restaurant Component/Error.jsx';
import Restaurantmenu from './components/Restaurant Component/Restaurantmenu.jsx';
import Shimmer from './components/Restaurant Component/Shimmer.jsx';


function App() {
  const Grocery = lazy(()=> import('./components/Restaurant Component/Grocery.jsx'))
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Body/>}></Route>
      <Route path='/check' element={<Check/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path= '/restaurant/:resId' element={<Restaurantmenu/>}></Route>
      <Route path='/grocery' element={<Suspense fallback = {<Shimmer/>}><Grocery /></Suspense>}></Route>
      <Route path='/*' element={<Error/>}></Route>
    </Routes>
    
      </BrowserRouter>
      
    </div>
  )
}

export default App