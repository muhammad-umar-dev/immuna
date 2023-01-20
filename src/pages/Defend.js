import React, { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import Nav from '../components/Nav'
import Sidenav from '../components/Sidenav'
import { useNavigate } from 'react-router-dom'
import ReCharts from '../components/ReChart'

const Defend = () => {
    const userStatus = useContext(noteContext)
    const route = useNavigate()
    useEffect(() => {
        userStatus.islogedin === true ? route('/defend') : route('/login')
    }, [])
    return (
        <>
            <Nav navStatus={'Defend'} />
            <div className="flex bg-background-blue-0">
                <div className='flex w-[10%] lg:w-1/5 justify-center bg-white-0 '>
                    <Sidenav />
                </div>
                <div className='flex flex-col w-full px-10 lg:px-2 lg:w-4/5 h-screen  justify-between items-center  bg-background-gray-0'>

                    <ReCharts />
                </div>


            </div>
        </>
    )
}

export default Defend
