import React from 'react'
import EllipseBlue from '../assets/bgEllipse.svg'
import EllipseYellow from '../assets/bgEllipse2.svg'
import WalletLogin from './WalletLogin'

const RightSide = (props) => {
    const { islogedin, user } = props
    return (
        <div className='flex w-1/2 flex-col justify-between'>
            <div className='flex justify-end'>
                <img className='mr-1  mt-0' src={EllipseBlue} alt="" />
            </div>
            <div className='flex justify-center'>
                <WalletLogin className='flex z-10 ' islogedin={islogedin} user={user} />
            </div>

            <div className='flex justify-start '>
                <img className='ml-0 -mt-8' src={EllipseYellow} alt="" />
            </div>
            {console.log(" Right Side  ", islogedin, user)}

        </div>
    )
}

export default RightSide
