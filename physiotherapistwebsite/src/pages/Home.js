import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Experts from '../components/Experts'
import Treatment from '../components/Treatment'
import Solution from '../components/Solution'
import Client from '../components/Carousel'
import Carousel  from '../components/Carousel'
import Footer from '../components/Footer'
import Session from '../components/Session'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Session/>
        <Experts/>
        <Treatment/>
        <Solution/>
        <Carousel/>
        <Footer/>
    </div>
  )
}
