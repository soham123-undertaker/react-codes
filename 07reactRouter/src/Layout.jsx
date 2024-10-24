import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//We get Outlet from react-router.The function of Outlet is that it will use this Layout as a base and we can change this Layout using Outlet
//In below the Header and Footer will remain same but the middle protion will change as we have Outlet here.So here we are changing things dynamically.

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout