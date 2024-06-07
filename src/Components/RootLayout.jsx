import React from 'react'
import Header from './Header'
import Nav_bar from './Nav_bar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const RootLayout = () => {
  return (
    <>
     <Header/>
      <Nav_bar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default RootLayout