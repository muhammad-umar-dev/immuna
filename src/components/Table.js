import React, { useState } from 'react'
import tableIcon from '../assets/tableArrow.svg'
import tableDownArrow from '../assets/tableDownArrow.svg'
import tableUpArrow from '../assets/tableUpArrow.svg'
import shareIcon from '../assets/shareIcon.svg'
import avatrIcon from '../assets/avatar.svg'
import Status from '../modal/Status'


const Table = (props) => {
    const [isVisible, setisVisible] = useState(false)
    const [balance, setBalance] = useState('')
    const [riskStatus, setRiskStatus] = useState('')
    const { rowsPerPage, onHandleSort, isOff, isAssendingSort } = props

    const onClickDetail = (item) => {
        setisVisible(current => !current)
        setBalance(item.balance)
        setRiskStatus(item.riskStatus)
    }
    // console.log('isOff: ' + isOff + " ,isAssendingOrder: " + isAssendingSort)

    return (
        <div className='flex flex-col w-full '>
            {isVisible && <Status balance={balance} riskStatus={riskStatus} />}
            <div className='overflow-x-scroll'>
                <table className=" w-full">
                    <thead>
                        <tr className='font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex  justify-between w-full bg-blue-lighter-0 rounded-t-lg ' >
                            <th scope="col" className='flex w-48  mx-6 h-[61px] items-center  ' >Protocol <div className='ml-3 ' ><button>< img src={tableIcon} alt='sort' /></button></div> </th>
                            <th scope="col" className='flex w-48 mx-6 h-[61px] items-center  ' >Pool <div className='ml-3 ' ><button>< img src={tableIcon} alt='sort' /></button></div> </th>
                            <th scope="col" className='flex w-48 mx-6 h-[61px] items-center  ' >Balance <div className='ml-3 ' ><button>< img src={tableIcon} alt='sort' /></button></div> </th>
                            <th scope="col" className='flex w-48 mx-6 h-[61px] items-center  ' onClick={onHandleSort} >Risk Status <div className='ml-3' ><button>< img src={isOff === false && isAssendingSort === false ? tableIcon : isOff === false && isAssendingSort === true ? tableDownArrow : tableUpArrow} alt='sort' /></button></div> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowsPerPage.map(({ index, ...item }) => {
                            return (
                                <tr className={`font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex w-full justify-between ${item.id % 2 ? "bg-white-0" : "bg-blue-table-0"}`} key={index}>
                                    <td className='flex w-48 lg:mx-4 h-[61px] items-center ' >{item.protocol} <button className='ml-4' onClick={() => onClickDetail(item)} ><img src={shareIcon} img className='flex' alt='share' /></button> </td>
                                    <td className='flex w-48 lg:mx-auto h-[61px] items-center justify-center  ' ><img className='flex' src={avatrIcon} alt='avatar' /> <label className='ml-2'>{item.pool}</label> <button className='ml-4' onClick={() => onClickDetail(item)} ><img src={shareIcon} alt='share' /></button></td>
                                    <td className='flex w-48 lg:mx-auto h-[61px] items-center  ' >{item.balance}</td>
                                    <td className='flex w-48 lg:mx-auto h-[61px] items-center' >
                                        <button className={`w-24 h-9 font-table-risk font-light lg:font-semibold text-sm lg:text-sm rounded-full ${item.riskStatus === 'Green' ? "bg-green-btn-0 text-green-text-0" : item.riskStatus === 'Yellow' ? 'text-yellow-text-0 bg-yellow-btn-0' : 'bg-red-btn-0 text-red-text-0'}`} onClick={() => onClickDetail(item)}>{item.riskStatus}</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >
            </div>
        </div>
    )



}

export default Table