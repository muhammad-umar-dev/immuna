import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/noteContext'
import Nav from '../components/Nav'
import Sidenav from '../components/Sidenav'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import SignupTable from '../components/SignupTable'

let CryptoJS = require("crypto-js");

const Signup = () => {


    const userStatus = useContext(noteContext)
    const route = useNavigate();
    // const addRows = {}

    useEffect(() => {
        userStatus.islogedin === true ? route('/signup') : route('/login')
    }, [userStatus.islogedin, route])





    return (
        <>
            <Nav navStatus={"Signup"} />
            <div className="flex bg-background-gray-0">
                <div className='flex w-[10%] lg:w-1/5 justify-center bg-white-0 '>
                    <Sidenav />
                </div>
                <div className='flex flex-col w-full px-10 lg:px-2 lg:w-4/5 h-full  justify-between items-center  bg-background-gray-0'>
                    <div className='flex p-4 w-full justify-center items-center'>
                        <h1 className='text-2xl font-bold '>SIGNUP</h1></div>

                    <div className='w-full'>
                        {/* <SignupForm tableData={tableData} setTableData={setTableData} addRows={addRows} updatedtableData={updatedtableData} />
                        <div className='h-4'></div> */}
                        <SignupTable />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup
