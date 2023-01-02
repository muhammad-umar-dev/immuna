import React from 'react'
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
const Pagination = () => {
    return (
        <div className='flex justify-end w-[50%]'>
            {/* Number of Pages */}
            <div className='flex  h-[40px] items-center justify-center p-2 mr-5'>
                <button className='flex w-11 h-8 bg-white-0 justify-center items-center rounded mx-1'><img src={leftArrow} /></button>
                <button className='flex w-7 h-8 bg-white-0 text-gray-font-0 justify-center items-center rounded mx-1 active:bg-blue-0 active:text-white-0'>1</button>
                <button className='flex w-7 h-8 bg-white-0 text-gray-font-0 justify-center items-center rounded mx-1 active:bg-blue-0 active:text-white-0'>2</button>
                <button className='flex w-7 h-8 bg-white-0 text-gray-font-0 justify-center items-center rounded mx-1 active:bg-blue-0 active:text-white-0'>3</button>
                <button className='flex w-7 h-8 bg-white-0 text-gray-font-0 justify-center items-center rounded mx-1 active:bg-blue-0 active:text-white-0'>...</button>
                <button className='flex w-7 h-8 bg-white-0 text-gray-font-0 justify-center items-center rounded mx-1 active:bg-blue-0 active:text-white-0'>50</button>
                <button className='flex w-11 h-8 bg-white-0 justify-center items-center rounded mx-1'><img src={rightArrow} /></button>
            </div>

        </div>
    )
}

export default Pagination