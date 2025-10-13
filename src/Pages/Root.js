import React from 'react'
import Navebar from '../components/Navebar/Navebar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div>
            <Navebar />
            <Outlet />
            <Footer />
        </div>
    )
}
