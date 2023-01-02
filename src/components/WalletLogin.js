import React from 'react'
import Ethereum from '../assets/ethereum.svg'
import Button from './Button'
import InputField from './InputField'

const WalletLogin = (props) => {
    const { islogedin, user } = props
    return (
        <div className='z-30 bg-gray-light-0 py-16 px-11 justify-center w-[599px] h-[654px] rounded  -mt-[380px] drop-shadow-md'>
            <h2 className='font-display text-3xl font-medium text-center'>Welcome to Immuna!</h2>
            <h3 className='font-display text-xl font-normal text-center'>Connect your wallet</h3>
            <div className='justify-center mt-20'>
                <img src={Ethereum} alt="" />
                <InputField islogedin={islogedin} user={user} />
            </div>
            <div className='mt-14'>
                <Button islogedin={islogedin} user={user} />
            </div>
            {console.log(" Wallet login  ", islogedin, user)}


        </div>
    )
}

export default WalletLogin
