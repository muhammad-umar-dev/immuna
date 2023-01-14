import React, { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import Sidenav from '../components/Sidenav'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const route = useNavigate();
    const userStatus = useContext(noteContext)
    useEffect(() => {
        userStatus.islogedin === true ? route('/home') : route('/login')
    }, [])
    return (
        <div >
            <Nav navStatus={'Home'} />
            <div className='flex h-full bg-gray-darker-0'>
                <Sidenav />
            </div>
        </div>
    )
}

export default Home
