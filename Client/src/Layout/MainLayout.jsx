import React from 'react'
import Navigation from '@componants/Navigation'
import Footer from '@componants/Footer'
import { useSelector } from 'react-redux'

const MainLayout = ({ children }) => {

    const {isAuthenticated} = useSelector(state => state.authReducer);

    return (
        <div className='h-full w-full relative'>
            <Navigation isAuthenticated={isAuthenticated} />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout