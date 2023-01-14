import React, { useContext, useEffect, useState, useCallback } from 'react'
import noteContext from '../context/noteContext'
import Search from '../components/Search'
import EthIcon from '../assets/ethIcon.svg'
import Copy from '../assets/copy.svg'
import Table from '../components/Table'
import Nav from '../components/Nav'
import Sidenav from '../components/Sidenav'
import { useNavigate } from 'react-router-dom'
import jsonData from '../local-json/data.json'
import downArrow from '../assets/downArrow.svg'
import Paginations from '../components/Paginations'


const Dashboard = () => {

    const ETHVALUE = '0xBAD7...E116'
    const userStatus = useContext(noteContext)
    const route = useNavigate();
    const [rows, setRows] = useState(6) //total number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    let NUM_OF_RECORDS = jsonData.length;
    let LIMIT = rows;



    useEffect(() => {
        userStatus.islogedin === true ? route('/dashboard') : route('/login')
    }, [])
    const onCopyClick = () => {
        console.log("Clipboard clicked")
        navigator.clipboard.writeText(ETHVALUE)
    }

    const onPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setCurrentPage(page);
        },
        [setCurrentPage]
    );
    const onLeftPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
                console.log(currentPage)
            }
        }
    );
    const onRightPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setCurrentPage(Math.ceil(jsonData.length / rows))
            if (currentPage < Math.ceil(jsonData.length / rows)) {
                setCurrentPage(currentPage + 1)
                console.log(currentPage)
            }
        }
    );

    const currentData = jsonData.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
    );

    return (
        <div className='bg-background-gray-0'>
            <Nav navStatus={"Dashboard"} />
            <div className="flex">
                <div className='flex  justify-center bg-white-0 w-1/5 '>
                    <Sidenav />
                </div>
                <div className='flex flex-col w-4/5 h-screen  justify-between bg-background-gray-0'>
                    <div className='flex flex-col w-full'>
                        <div className='flex items-center mt-4 w-full h-[45px] justify-between'>
                            <div >
                                <label className='ml-5 font-display font-medium text-gray-dark-0'>Immuna Monitor Portal</label>
                            </div>

                            <div className='flex mr-5 ' >
                                <Search width={'341px'} height={'44px'} />
                                {/* ETH Display */}
                                <div className='ml-4  flex items-center justify-between w-[237px] h-[44px] rounded-full bg-blue-lighter-0'>
                                    <div className='ml-6'>
                                        <img className='w-[48px] h-[17px]' src={EthIcon} alt='down arrow' />
                                    </div>

                                    <div className=' flex w-[151px] h-[44px] rounded-full px-7 font-display font-normal text-sm text-center items-center bg-blue-medium-0 '>{ETHVALUE}</div>
                                </div>
                                <button className='ml-3 w-11 h-11 rounded-full bg-blue-medium-0 items-center justify-center flex' onClick={onCopyClick}><img src={Copy} alt="" /></button>
                            </div>


                        </div >
                        <div className='flex flex-col mx-4 mt-4  drop-shadow-[0_0_14px_rgba(0,0,0,0.07)]'>
                            <Table rows={rows} currentData={currentData} />
                        </div>
                    </div>
                    {/* Footer */}
                    <footer className='flex items-end mb-20  mx-5 ' >
                        <div className='flex w-full '>
                            <div className='flex w-[50%] h-9 '>
                                {/* Item display per page */}
                                <div className='flex items-center  w-[50%] '>
                                    <label className='font-display font-normal text-xs '>Show</label>
                                    {/* Dropdown */}
                                    <div className="dropdown-center ml-2 ">
                                        <button type="button" className="btn btn-light flex items-center bg-white-0 border border-blue-light-0 rounded-lg" data-bs-toggle="dropdown" >
                                            {rows} <img className='ml-2 w-2' src={downArrow} />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><button className="dropdown-item" type="button" onClick={() => setRows(6)}>6</button></li>
                                            <li><button className="dropdown-item" type="button" onClick={() => setRows(12)}>12</button></li>
                                        </ul>
                                    </div>
                                    <label className='font-display font-normal text-xs ml-2 whitespace-nowrap'>results of {jsonData.length} entries</label>
                                </div>
                            </div>

                            <div className='flex w-[50%]  justify-end'>
                                <div className="bg-white-0 justify-center items-center p-2 rounded pagination-wrapper drop-shadow-sm">
                                    <Paginations
                                        totalRecords={NUM_OF_RECORDS}
                                        pageLimit={LIMIT}
                                        pageNeighbours={2}
                                        onPageChanged={onPageChanged}
                                        onLeftPageChanged={onLeftPageChanged}
                                        onRightPageChanged={onRightPageChanged}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>

        </div>
    )
}

export default Dashboard
