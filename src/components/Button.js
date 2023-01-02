import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = (props) => {
    const { islogedin, user } = props
    const login = useNavigate();

    const onCLickConnect = () => {
        login('/dashboard')

        { console.log('dashboard') }
    }
    return (
        <>
            {console.log(" button  ", islogedin, user)}
            <button className='bg-blue-0 rounded-full font-display font-medium text-lg justify-center text-white-0 w-[509px] h-[65px]' onClick={onCLickConnect}>
                Connect to Wallet
            </button>
        </>

    )
}

export default Button