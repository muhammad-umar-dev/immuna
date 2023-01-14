import React, { useState } from 'react'
import dIcon from '../assets/dashboardIcon.svg'
import alertIcon from '../assets/alertIcon.svg'
import defendIcon from '../assets/defenderIcon.svg'
import protectIcon from '../assets/protectIcon.svg'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
    // const dashboardItems = ['Dashboard', 'Alerts', 'Defend', 'Protect'];
    // const dashboardIcons = [dIcon, alertIcon, defendIcon, protectIcon];
    const items = [
        { id: 1, item: 'Dashboard', Icon: dIcon, path: '/dashboard' },
        { id: 2, item: 'Alerts', Icon: alertIcon, path: '/alerts' },
        { id: 3, item: 'Defend', Icon: defendIcon, path: '/defend' },
        { id: 4, item: 'Protect', Icon: protectIcon, path: '/protect' },
    ]
    return (
        <div className='flex w-1/5 flex-col h-[100vh] '>
            {/* <div className='flex mt-6 justify-center'>
                <img src={logo2} alt="" />
            </div> */}
            <div className='flex flex-col justify-center items-center font-display font-medium text-base font-white mt-[55px]'>

                <div className='flex'>
                    <div className='flex w-1/5 flex-col h-[100vh] mt-[39px]'>
                        {items.map(({ Icon, ...item }) => {
                            return (
                                <div className='flex flex-col justify-center items-center font-display font-medium text-base font-white mt-[14px]' key={item.id}>
                                    <Link className="nav-link" to={item.path}>
                                        <button className='flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center active:bg-blue-0 text-gray-dark-0 active:text-white-0 active:fill-white-0 active:stroke-white-0'>
                                            <div><Icon fill='icon-gray-0 ' /></div>
                                            <label className='ml-3' >{item.item}</label>
                                        </button>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    {/* <Dashboard /> */}
                </div>



            </div>
        </div>
    )
}

export default DashboardNav
