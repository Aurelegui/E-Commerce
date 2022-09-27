import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <div className='container'>
            <Announcement />
            <Navbar />
        </div>
    )
}

export default Home