import React, { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import Nav from '../components/Nav'
import Sidenav from '../components/Sidenav'
import { useNavigate } from 'react-router-dom'

const Protect = () => {
    const userStatus = useContext(noteContext)
    console.log(userStatus.islogedin + " contextApi  " + userStatus.user);
    const route = useNavigate();
    useEffect(() => {
        userStatus.islogedin === true ? route('/protect') : route('/login')
    }, [])


    return (
        <>
            <Nav navStatus={"Protect"} />
            <div className="flex bg-background-gray-0">
                <div className='flex h-screen justify-center bg-white-0 w-1/5 '>
                    <Sidenav />
                </div>
                <div className='flex flex-col w-4/5 h-full '>
                    <h1 className='font-display text-center text-8xl text-blue-0 font-extrabold'>Protect</h1>
                </div>

            </div>
        </>
    )
}

export default Protect
