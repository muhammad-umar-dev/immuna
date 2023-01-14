import React from 'react'
import { dashboardIcon, alertIcon, defendIcon, protectIcon, } from './Icon'
import { NavLink } from 'react-router-dom';


// import Icon from './Icon'

const DashboardNav = () => {
    const list = [
        { id: 1, item: 'Dashboard', Icon: dashboardIcon, path: '/dashboard' },
        { id: 2, item: 'Alerts', Icon: alertIcon, path: '/alerts' },
        { id: 3, item: 'Defend', Icon: defendIcon, path: '/defend' },
        { id: 4, item: 'Protect', Icon: protectIcon, path: '/protect' },
    ]

    return (

        <div className='flex flex-col  mt-[39px] '>
            {list.map(({ Icon, ...item }) => {
                return (
                    <div className='flex flex-col justify-center items-center  mt-[14px] font-display' key={item.id}>
                        {/* <NavLink to={item.path}  className={` dashboard-nav-link    `}> */}
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? "flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center  bg-blue-0 text-white-0 fill-white-0 hover:text-white-0 " : "flex flex-row w-[194px] h-[48px] rounded-lg justify-center items-center text-gray-dark-0 bg-white-0 hover:text-gray-dark-0")}>
                            <Icon fill='fill-gray-font-0 active:fill-white-0' />
                            <label className='ml-3 cursor-pointer' >{item.item}</label>
                        </NavLink>
                    </div>

                )
            })}
        </div>
    )
}

export default DashboardNav