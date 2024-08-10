import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen mt-5 py-20'>
        <Course />
      </div>
      <Footer />
    </div>
  )
}

export default Courses
