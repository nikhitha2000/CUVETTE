import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Nikhitha from './Nikhitha'
import Navbar from './Navbar'
import UserDetails from './UserDetails'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/about'element={<h1>about Component</h1>}/>
            <Route path='/contact'element={<h1>contact Component</h1>}/>
            <Route path='/contact/nikhitha'element={<Nikhitha/>}/>
            <Route path='/main' element={<h1>Main component</h1>}/>
            <Route path='/feedback' element={<h1>Feedback component</h1>}/>
            <Route path='/users/:id/aadhar/:no' element={<UserDetails/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router