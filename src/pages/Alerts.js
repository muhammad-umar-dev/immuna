import React, { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import Sidenav from "../components/Sidenav"
import Nav from "../components/Nav"
import { useNavigate } from 'react-router-dom'

const Alerts = () => {
    const userStatus = useContext(noteContext)
    const route = useNavigate();
    console.log(userStatus.islogedin + " contextApi  " + userStatus.user);
    useEffect(() => {
        userStatus.islogedin === true ? route('/alerts') : route('/login')
    }, [])
    return (
        <>
            <Nav navStatus={'Alerts'} />
            <div className="flex bg-background-gray-0">
                <div className='flex h-screen justify-center bg-white-0 w-1/5 '>
                    <Sidenav />
                </div>
                <div className='flex flex-col w-4/5 h-full '>
                    <h1 className='font-display text-center text-8xl text-red-text-0 font-extrabold'>Alerts</h1>
                </div>

            </div>
        </>
    )
}

export default Alerts
