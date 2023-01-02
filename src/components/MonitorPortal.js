import React from 'react'
import Search from './Search'
import EthIcon from '../assets/ethIcon.svg'
import Copy from '../assets/copy.svg'
import Clipboard from 'react'


const MonitorPortal = () => {
    const ETHVALUE = '0xBAD7...E116'
    const onCopyClick = () => {
        console.log("Clipboard clicked")
        navigator.clipboard.writeText(ETHVALUE)
    }
    return (
        <div className='flex items-center mt-4 w-full h-[45px]'>
            <div className='w-[47%]'>
                <label className='ml-5 font-display font-medium text-gray-dark-0'>Immuna Monitor Portal</label>
            </div>

            <div className='flex w-[53%]' >
                <Search width='341px' height='44px' />
                {/* ETH Display */}
                <div className='ml-4  flex items-center justify-between w-[237px] h-[44px] rounded-full bg-blue-lighter-0'>
                    <div className='ml-6'>
                        <img className='w-[48px] h-[17px]' src={EthIcon} />
                    </div>

                    <div className=' flex w-[151px] h-[44px] rounded-full px-7 font-display font-normal text-sm text-center items-center bg-blue-medium-0 '>{ETHVALUE}</div>
                </div>
                <button className='ml-3 w-11 h-11 rounded-full bg-blue-medium-0 items-center justify-center flex' onClick={onCopyClick}><img src={Copy} alt="" /></button>
            </div>

        </div >
    )
}

export default MonitorPortal
