import React from 'react'
import DashboardNav from './DashboardNav'
import Nav from './Nav'
import ItemsPerPage from './ItemsPerPage'
import Pagination from './Pagination'
import Monitorportal from './MonitorPortal'

import dIcon from '../assets/dashboardIcon.svg'
import alertIcon from '../assets/alertIcon.svg'
import defendIcon from '../assets/defenderIcon.svg'
import protectIcon from '../assets/protectIcon.svg'

const Dashboard = (props) => {

    const dashboardItems = ['Dashboard', 'Alerts', 'Defend', 'Protect'];
    const dashboardIcons = [dIcon, alertIcon, defendIcon, protectIcon];
    const { islogedin, user } = props
    return (
        <div >
            <Nav islogedin={islogedin} user={user} />
            <div className='flex '>
                <DashboardNav dashboardIcons={dashboardIcons} dashboardItems={dashboardItems} />

                <Monitorportal />
            </div>
            {/* Footer */}
            <footer className='absolute w-[80%] right-0 bottom-0' >
                <div className='flex w-full bottom-0'>
                    <ItemsPerPage />
                    <Pagination />
                </div>
            </footer>
        </div>

    )
}

export default Dashboard
