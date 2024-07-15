import React from 'react'
import Navbar from '../components/NavrBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function Buy() {
  return (
    <>
    <Navbar />
    <section className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-3xl'>Unlock the World of Books . <span className='text-blue-500'>Dive into Free andPremium Reads! </span></h1>
        <p className='mt-12 text-left'>Explore our collection of free and premium books. Whether you want a free read or a special purchase, we have something for you. Start your reading adventure with us today!</p>
        <Link to='/'><button className='btn btn-primary mt-7'>Back</button></Link>
      </div>
      

      {/* cart section */}
      <section className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card />
        </section>

 

    </section>

    <Footer />
    
    </>
  )
}

export default Buy