import React, { useState, useCallback } from 'react'
import tableIcon from '../assets/tableArrow.svg'
import shareIcon from '../assets/shareIcon.svg'
import avatrIcon from '../assets/avatar.svg'
import Status from '../modal/Status'


const Table = (props) => {
    const [isVisible, setisVisible] = useState(false)
    const [balance, setBalance] = useState('')
    const [riskStatus, setRiskStatus] = useState('')
    const { row, currentData } = props



    const onClickDetail = (item) => {
        // setisVisible(true)
        setisVisible(current => !current)
        setBalance(item.balance)
        setRiskStatus(item.riskStatus)
    }



    return (
        <div className='flex flex-col w-full '>
            {isVisible && <Status balance={balance} riskStatus={riskStatus} />}

            <table className="table-auto w-full flex flex-col">
                <thead>
                    <tr className='font-display font-normal h-[61px] flex  justify-between w-full bg-blue-lighter-0 rounded-t-lg ' >
                        <th scope="col" className='flex w-1/5 mx-6 h-[61px] items-center' >Protocol <div className='ml-3' >< img src={tableIcon} alt='sort' /></div> </th>
                        <th scope="col" className='flex w-1/5 mx-6 h-[61px] items-center' >Pool <div className='ml-3' >< img src={tableIcon} alt='sort' /></div> </th>
                        <th scope="col" className='flex w-1/5 mx-6 h-[61px] items-center' >Balance <div className='ml-3' >< img src={tableIcon} alt='sort' /></div> </th>
                        <th scope="col" className='flex w-1/5 mx-6 h-[61px] items-center' >Risk Status <div className='ml-3' >< img src={tableIcon} alt='sort' /></div> </th>
                    </tr>
                </thead>
                <tbody>

                    {currentData.map(({ ...item }) => {
                        return (
                            <tr className={`font-display font-normal h-[61px] flex w-full justify-between ${item.id % 2 ? "bg-white-0" : "bg-blue-table-0"}`} key={item.id}>
                                <td className='flex w-1/5 mx-4 h-[61px] items-center' >{item.protocol} <button className='ml-4' onClick={() => onClickDetail(item)} ><img src={shareIcon} alt='share' /></button> </td>
                                <td className='flex w-1/5 mx-auto h-[61px] items-center' ><img src={avatrIcon} alt='avatar' /> <label className='ml-2'>{item.pool}</label> <button className='ml-4' onClick={() => onClickDetail(item)} ><img src={shareIcon} alt='share' /></button></td>
                                <td className='flex w-1/5 mx-auto h-[61px] items-center text-sm' >{item.balance}</td>
                                <td className='flex w-1/5 mx-auto h-[61px] items-center' >
                                    <button className={`w-24 h-9 font-table-risk font-semibold rounded-full ${item.riskStatus === 'Green' ? "bg-green-btn-0 text-green-text-0" : item.riskStatus === 'Yellow' ? 'text-yellow-text-0 bg-yellow-btn-0' : 'bg-red-btn-0 text-red-text-0'}`} onClick={() => onClickDetail(item)}>{item.riskStatus}</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >

        </div>
    )



}

export default Table