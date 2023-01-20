import Nav from '../components/Nav'
import bitCoinImg from '../assets/bitCoinImg.svg'
import React from 'react'
import EllipseBlue from '../assets/bgEllipse.svg'
import EllipseYellow from '../assets/bgEllipse2.svg'
import WalletLogin from '../components/WalletLogin'

const Login = () => {
    return (
        <div className='  bg-gray-darker-0'>
            <Nav className='drop-shadow-sm' />
            {/* //Left Side  bg-background-blue-0 */}
            <div className='flex h-full   bg-gray-light-0'>
                <div className='flex  w-full md:w-[45%] xl:w-[50%] 2xl:w-[45%]  bg-gray-dark-0'>
                    <div className='flex mt-0 w-full h-full bg-[rgba(196, 196, 196, 0.2)]'>
                        <img className='opacity-80 max-h-full max-w-full   object-cover sm:w-full ' src={bitCoinImg} alt="BitCoinImage" />
                    </div>
                </div>
                {/* //Right Side */}
                <div className='flex flex-col  items-center  absolute md:relative  w-screen md:w-[55%] xl:w-[50%] 2xl:w-[55%] '>
                    <div className='flex w-full  h-[400px]  sm:h-1/2 justify-end'>
                        <img className='mt-0 ' src={EllipseBlue} alt="" />
                    </div>
                    <div className='flex absolute  mt-14 sm:relative sm:-mt-44 md:-mt-40 lg:-mt-72 flex-col justify-center items-center '>
                        <WalletLogin className='flex w-full f-full bg-gray-darker-0 md:w-[70%] 2xl:w-full z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.07)]' />
                        <div className=' -mt-72 xl:flex xl:-mt-24 2xl:-ml-20 2xl:-mt-20 '>
                            <img className=' ' src={EllipseYellow} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login