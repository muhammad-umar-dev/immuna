import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/noteContext'
import Sidenav from "../components/Sidenav"
import Nav from "../components/Nav"
import { useNavigate } from 'react-router-dom'
import CRUDTable from '../components/CRUDTable'
import tabledata from '../local-json/tabledata.json'

const Alerts = () => {
    const userStatus = useContext(noteContext)
    const route = useNavigate();
    const [tableData, setTableData] = useState(tabledata)
    useEffect(() => {
        userStatus.islogedin === true ? route('/alerts') : route('/login')
    }, [])
    return (
        <>
            <Nav navStatus={'Alerts'} />
            <div className="flex bg-background-blue-0">
                <div className='flex w-[10%] lg:w-1/5 justify-center bg-white-0 '>
                    <Sidenav />
                </div>
                <div className='flex flex-col  w-full lg:w-4/5 h-full justify-between '>
                    <CRUDTable tableData={tableData} setTableData={setTableData} />
                </div>

            </div>
        </>
    )
}

export default Alerts
