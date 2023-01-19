import React, { useState } from 'react'
import Alerts from './AlertsMessage';
import DeleteIcon from '../assets/deleteIcon.svg'
import EditIcon from '../assets/editIcon.svg'
import CRUD from './CRUD';


const CRUDTable = (props) => {
    const { tableData, setTableData, } = props
    const updatedtableData = [...tableData];
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [alert, setAlert] = useState(false);
    // console.log(tableData)
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        })
        setTimeout(() => {
            setAlert('null');
        }, 2000);
    }

    const addRows = (data) => {
        const totalRecord = tableData.length;
        data.id = totalRecord + 1;
        updatedtableData.push(data);
        setTableData(updatedtableData);
    };
    // console.log(addRows.length)

    const onHandleUpdate = (info) => {
        updatedtableData.pop(info);
        setTableData(updatedtableData)
        setID(info.id);
        setName(info.name);
        setPassword(info.password);
        setIsUpdate(true)
    }
    const onHandleDelete = (info) => {
        showAlert("Data is deleted", 'Success');
        const index = updatedtableData.filter(row => {
            if (row.id === info.id) {
                updatedtableData.splice(row, 1);
            }
        })



        updatedtableData.splice(index - 1, index)
        setTableData(updatedtableData)
    }
    const tableRows = tableData.map((info, index) => {
        return (
            <tr className={`font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex w-full justify-between ${info.id % 2 ? "bg-white-0-0" : "bg-blue-table-0"}`} key={index}>
                <td className='w-1/4 justify-center items-center flex'>{info.id}</td>
                <td className='w-1/4 justify-center items-center flex'>{info.name}</td>
                <td className='w-1/4 justify-center items-center flex'>{info.password}</td>
                <td className='w-1/4 justify-evenly items-center flex'><button onClick={() => onHandleUpdate(info)} className='ml-2 bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={EditIcon} alt="" /></button> <button onClick={() => onHandleDelete(info)} className='bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={DeleteIcon} alt="" /></button></td>
            </tr>
        )
    })

    return (
        <div className='flex flex-col w-full h-screen   '>
            {alert && <Alerts className='w-full h-14' alert={alert} />}
            <label className='font-display py-4 font-normal text-5xl text-center'>Create a new user</label>
            <div className='w-full flex flex-col lg:flex-row  justify-center items-center '>
                <div className='flex justify-center items-start w-full lg:w-1/2'>
                    <CRUD addRows={addRows} name={name} setName={setName} password={password} setPassword={setPassword} isUpdate={isUpdate} setIsUpdate={setIsUpdate} alert={alert} setAlert={setAlert} showAlert={showAlert} />
                </div>
                <div className='flex justify-center items-start w-full  lg:w-1/2'>
                    <table table className="w-[80%] table justify-center items-center bg-white-0 rounded" >
                        <thead>
                            <tr className='font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex  justify-between w-full bg-blue-lighter-0 rounded-t-lg'>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Sr.NO</th>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Name</th>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Password</th>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Action</th>
                            </tr>
                        </thead>
                        <tbody>{tableRows}</tbody>
                    </table>
                </div>
            </div >
        </div>
    )

}

export default CRUDTable
