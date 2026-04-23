import React from "react";
import { Footer, Header } from "../comp";
import { Outlet } from "react-router-dom";


function Layout({ children }) {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;