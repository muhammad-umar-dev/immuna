import React from 'react'
import bitCoinImg from '../assets/bitCoinImg.svg'

const LeftSide = () => {
    return (
        <div className='flex mt-0 bg-[rgba(196, 196, 196, 0.2)]'>
            <img className='opacity-80' src={bitCoinImg} alt="BitCoinImage" />
        </div>
    )
}

export default LeftSide
