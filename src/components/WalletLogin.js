import React, { useState, useContext } from 'react'
import noteContext from '../context/noteContext'
import Ethereum from '../assets/ethereum.svg'
import { Form, useNavigate } from "react-router-dom";

import EllipseYellow from '../assets/bgEllipse2.svg'
const WalletLogin = () => {
    const login = useNavigate();
    const userStatus = useContext(noteContext)

    console.log(userStatus.islogedin + " contextApi  " + userStatus.setIsLogedIn);
    const [inputLogin, setInputLogin] = useState('');
    const [inputStyle, setInputStyle] = useState('')
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
            <form className='z-30 flex flex-col bg-white-0 py-16 px-11 justify-center w-[599px] h-[654px] rounded  -mt-[380px] ' >
                <lable className='font-display text-3xl font-medium text-center'>Welcome to Immuna!</lable>
                <label className='font-display text-xl font-normal text-center'>Connect your wallet</label>
                <div className='justify-center mt-20'>
                    <img src={Ethereum} alt="" />
                    <input
                        className={` w-[509px] h-[65px] bg-gray-light-0 rounded-full font-display font-normal text-sm my-5 px-8 outline-none ${inputStyle} `}
                        type='text/plain' required
                        placeholder='Enter wallet address '
                        onChange={onChangehandler} >
                    </input>
                    <button className='mt-14  bg-blue-0 rounded-full font-display font-medium text-lg justify-center text-white-0 w-[509px] h-[65px] outline-none'
                        onClick={onCLickConnect}
                        type="Submit">
                        Connect to Wallet
                    </button>
                </div>
                <div className=''>
                </div>


            </form>
        </>
    )
}

export default WalletLogin
