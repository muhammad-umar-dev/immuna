import Nav from '../components/Nav'
import bitCoinImg from '../assets/bitCoinImg.svg'
import React from 'react'
import EllipseBlue from '../assets/bgEllipse.svg'
import EllipseYellow from '../assets/bgEllipse2.svg'
import WalletLogin from '../components/WalletLogin'

const Login = () => {
    return (
        <>
            <Nav className='drop-shadow-sm' />
            {/* //Left Side */}
            <div className='flex w-full justify-between bg-background-blue-0'>
                <div className='flex w-[50%] 2xl:w-[45%] h-full '>
                    <div className='flex mt-0 bg-[rgba(196, 196, 196, 0.2)]'>
                        <img className='opacity-80' src={bitCoinImg} alt="BitCoinImage" />
                    </div>
                </div>
                {/* //Right Side */}
                <div className='flex flex-col w-[50%] 2xl:w-[55%] h-full items-center justify-between '>
                    <div className='flex w-full justify-end'>
                        <img className='mr-1  mt-0' src={EllipseBlue} alt="" />
                    </div>
                    <div className='flex flex-col  justify-center'>
                        <WalletLogin className='flex w-[70%] 2xl:w-full z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.07)]' />
                        <div className='flex -mt-24 2xl:-ml-20 2xl:-mt-20 '>
                            <img className=' ' src={EllipseYellow} alt="" />
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Login