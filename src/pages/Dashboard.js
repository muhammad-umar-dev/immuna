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


const Dashboard = (props) => {

    const ETHVALUE = '0xBAD7...E116'
    const userStatus = useContext(noteContext)
    const route = useNavigate();
    const [rows, setRows] = useState(6) //total number of items per page
    const [currentPage, setCurrentPage] = useState(1)
    const [sortedData, setSortedData] = useState([])
    // const [unsortedData, setUnSortedData] = useState(jsonData)
    const unSortedData = [...jsonData]
    let LIMIT = rows;

    const [search, setSearch] = useState(' ')
    const [isOff, setIsOff] = useState(false)
    const [isAssendingSort, setIsAssendingSort] = useState(false)

    // console.log(unSortedData)
    useEffect(() => {
        userStatus.islogedin === true ? route('/dashboard') : route('/login')
        setSortedData([...jsonData])
        // setUnSortedData(jsonData)
    }, [])
    // console.log(jsonData)
    const onCopyClick = () => {
        navigator.clipboard.writeText(ETHVALUE)
    }

    const data = {
        data: sortedData.filter((item) => {
            return (item.protocol.toString().toLowerCase().includes(search.toString().toLowerCase()) || item.pool.toString().toLowerCase().includes(search.toString().toLowerCase()) || item.balance.toString().toLowerCase().includes(search.toString().toLowerCase()) || item.riskStatus.toString().toLowerCase().includes(search.toString().toLowerCase()))
        })
    }

    const rowsPerPage = data.data.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
    )

    const onHandleSort = () => {
        if (isOff === false) {
            console.log("on")
            if (isAssendingSort === false) {
                setSortedData(sortedData.sort((a, b) => a.riskStatus.localeCompare(b.riskStatus)))
                setIsAssendingSort(true)
                // console.log("Assending data")
            } else {
                setSortedData(sortedData.sort((a, b) => a.riskStatus.localeCompare(b.riskStatus)).reverse())
                setIsAssendingSort(false)
                // console.log("Reverse Assending data")
                setIsOff(true)
            }

        } else {
            console.log("off")
            console.log([...unSortedData])
            setSortedData([...unSortedData])
            // console.log(jsonData)
            setIsOff(false)
        }
    }
    // console.log(isOff)



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
            }
        }
    );
    const onRightPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setCurrentPage(Math.ceil(data.data.length / rows))
            if (currentPage < Math.ceil(data.data.length / rows)) {
                setCurrentPage(currentPage + 1)
            }
        }
    )


    return (
        <div className='bg-background-gray-0'>
            <Nav navStatus={"Dashboard"} />
            <div className="flex">
                <div className='flex w-[10%] lg:w-1/5 justify-center bg-white-0 '>
                    <Sidenav />
                </div>

                <div className='flex flex-col w-full lg:w-4/5 h-screen  justify-between items-center bg-background-gray-0'>
                    <div className='flex flex-col  w-full '>
                        <div className='md:hidden flex justify-center items-start'>
                            {/* <label className='flex sm:hidden ml-5 font-display font-medium text-sm md:text-md lg:text-lg text-gray-dark-0'>Immuna Monitor Portal</label> */}
                        </div>

                        {/* Status bar */}
                        <div className='flex flex-col sm:flex-row items-center mt-4 w-full md:h-[45px] justify-around lg:justify-between'>
                            <div >
                                <label className='md:ml-5 font-display font-medium text-lg  sm:flex lg:text-lg text-gray-dark-0'>Immuna Monitor Portal</label>
                            </div>
                            {/* Search */}
                            <div className='flex flex-col sm:flex-row items-center mr-5 justify-center w-full mt-4 lg:py-0 lg:justify-end ' >
                                <Search width={'w-[237px] lg:w-[341px] '} height={'h-[44px]'} search={search} setSearch={setSearch} />

                                {/* ETH Display */}
                                <div className='ml-4  flex items-center my-4 lg:my-0 md:justify-around w-[237px] md:h-[44px] rounded-full bg-blue-lighter-0'>
                                    <div className=' flex ml-6'>
                                        <img className='w-[48px] h-[17px]' src={EthIcon} alt='ethicon' />
                                    </div>
                                    <div className=' flex flex-auto ml-2 w-[151px] h-[44px] rounded-full px-7 font-display font-normal text-sm text-center items-center justify-end bg-blue-medium-0 '>{ETHVALUE}
                                    </div>

                                </div>
                                <button className='flex  ml-3 w-11 h-11 rounded-full bg-blue-medium-0 items-center justify-center' onClick={onCopyClick}><img src={Copy} alt="" /></button>
                            </div>

                        </div >


                        {/* Table */}
                        <div className='flex flex-col mx-4 mt-4  drop-shadow-[0_0_14px_rgba(0,0,0,0.07)]'>
                            <Table rowsPerPage={rowsPerPage} onHandleSort={onHandleSort} isOff={isOff} isAssendingSort={isAssendingSort} />
                        </div>
                    </div>
                    {/* Footer */}
                    <footer className='flex items-end  mb-20  mx-5 sm:mx-0 md:w-screen lg:w-full md:px-6 ' >
                        <div className='flex w-full flex-col md:flex-row items-center'>
                            <div className='flex w-full justify-center sm:justify-left  md:w-[50%] h-9 '>
                                {/* Item display per page */}
                                <div className='flex items-center  sm:w-[50%] sm:justify-start '>
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
                                    <label className='font-display font-normal text-xs ml-2 whitespace-nowrap'>results of {data.data.length} entries</label>
                                </div>
                            </div>

                            <div className='flex w-full justify-center py-2 md:py-0 md:w-[50%] md:justify-end'>
                                <div className="bg-white-0 justify-center items-center p-2 rounded pagination-wrapper drop-shadow-sm">
                                    <Paginations
                                        totalRecords={data.data.length}
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
