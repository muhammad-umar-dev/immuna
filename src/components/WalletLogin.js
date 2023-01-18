import React, { useState, useContext } from 'react'
import noteContext from '../context/noteContext'
import Ethereum from '../assets/ethereum.svg'
import { Form, useNavigate } from "react-router-dom";

const WalletLogin = () => {
    const login = useNavigate();
    const userStatus = useContext(noteContext)

    const [inputLogin, setInputLogin] = useState('')
    const onChangehandler = (e) => {
        setInputLogin(e.target.value);
    }

    const onCLickConnect = (e) => {
        if (userStatus.user === inputLogin) {
            login('/dashboard', { state: { islogedin: true } });
            setInputLogin('')
            userStatus.setIsLogedIn(true)
            e.preventDefault();
        } else {
            e.preventDefault()
        }
    }
    return (
        <>
            <form className=' z-30 flex flex-col bg-white-0 px-2 py-4 sm:px-16 sm:py-16  md:px-11 justify-center items-center w-[100%]  sm:w-[400px] lg:w-[500px] 2xl:w-[599px] 2xl:h-[654px] rounded' >
                <label className='font-display 3xl md:text-3xl font-medium text-center'>Welcome to Immuna!</label>
                <label className='font-display xl md:text-xl font-normal text-center'>Connect your wallet</label>
                <div className='flex flex-col justify-center items-center mt-5 lg:mt-20'>
                    <div className='w-full flex justify-center lg:justify-start items-center h-2'>
                        <img src={Ethereum} alt="" />
                    </div>
                    <input
                        className={`flex w-[85%] sm:w-full h-10 lg:w-[450px] lg:h-[65px] bg-gray-light-0 rounded-full font-display font-normal text-sm my-5 px-8 justify-center items-center outline-none `}
                        type='text/plain' required
                        placeholder='Enter wallet address '
                        onChange={onChangehandler} >
                    </input>
                    <button className='flex w-[85%] sm:w-full h-10 lg:h-[65px]  lg:mt-14 lg:mb-[208px]  bg-blue-0 rounded-full font-display font-medium text-lg  text-white-0 justify-center items-center  outline-none'
                        onClick={onCLickConnect}
                        type="Submit">
                        Connect to Wallet
                    </button>
                </div>
                {/*<div className=''>
                </div> */}


            </form>
        </>
    )
}

export default WalletLogin
