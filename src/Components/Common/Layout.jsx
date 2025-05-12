import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header'
export default function Layout() {
  return (
    <>
      <section className='w-full'>
        <div className='w-full grid grid-cols-[17%_auto] gap-2 h-lvh'>
          <Sidebar />
          <div className='h-lvh relative'>
            <Header />
            <div className='py-5 w-full h-[calc(100lvh-140px)] overflow-y-scroll absolute top-[105px]'>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
