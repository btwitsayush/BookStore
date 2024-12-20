import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Buy from './pages/Buy'
import Signup from './pages/SignUp'
function App() {

  return (
    <>
   
   {/* <HomePage /> */}
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    
    <Route path='/' element={<HomePage />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/buy' element={<Buy />} />
    <Route path='/signup' element={<Signup />} />
    

   </Routes>
   </div>

    </>
  )
}

export default App
