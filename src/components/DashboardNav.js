import React, { useState } from 'react'
import dIcon from '../assets/dashboardIcon.svg'
import alertIcon from '../assets/alertIcon.svg'
import defendIcon from '../assets/defenderIcon.svg'
import protectIcon from '../assets/protectIcon.svg'

const DashboardNav = () => {
    // const dashboardItems = ['Dashboard', 'Alerts', 'Defend', 'Protect'];
    // const dashboardIcons = [dIcon, alertIcon, defendIcon, protectIcon];

    return (
        <div className='flex w-1/5 flex-col h-[100vh] '>
            {/* <div className='flex mt-6 justify-center'>
                <img src={logo2} alt="" />
            </div> */}
            <div className='flex flex-col justify-center items-center font-display font-medium text-base font-white mt-[55px]'>
                <button className='flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center active:bg-blue-0 text-gray-dark-0 active:text-white-0 active:fill-white-0 active:stroke-white-0' >
                    <div>

                        <img src={dIcon} />
                    </div>
                    <label className='ml-3 '>Dashboard</label>
                </button>
                <button className='flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center active:bg-blue-0 text-gray-dark-0 active:text-white-0 active:fill-white-0 active:stroke-white-0' >
                    <div><img src={alertIcon} /> </div>
                    <label className='ml-3 '>Alerts</label>
                </button>
                <button className='flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center active:bg-blue-0 text-gray-dark-0 active:text-white-0 active:fill-white-0 active:stroke-white-0' >
                    <div><img src={defendIcon} /> </div>
                    <label className='ml-3 '>Defend</label>
                </button>
                <button className='flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center active:bg-blue-0 text-gray-dark-0 active:text-white-0 active:fill-white-0 active:stroke-white-0' >
                    <div><img src={protectIcon} /> </div>
                    <label className='ml-3 '>Protect</label>
                </button>




            </div>
        </div>
    )
}

export default DashboardNav
