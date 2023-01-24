import React, { useState } from 'react'

import CRUD from './CRUD';
import Alerts from './AlertsMessage';
import DeleteIcon from '../assets/deleteIcon.svg'
import EditIcon from '../assets/editIcon.svg'
import Delete from '../modal/Delete';

let CryptoJS = require("crypto-js");


const CRUDTable = (props) => {
    const { tableData, setTableData, } = props
    const updatedtableData = [...tableData]
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [alert, setAlert] = useState(false);
    const [isVisible, setisVisible] = useState(false)
    const [deleteData, setDeleteData] = useState({})



    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        })
        setTimeout(() => {
            setAlert('null');
        }, 1000);
    }

    const addRows = (data) => {
        const totalRecord = tableData.length;
        data.id = totalRecord + 1;
        //    Password Encrypted
        data.password = CryptoJS.AES.encrypt(JSON.stringify(data.password), 'my-secret-key@123').toString();
        console.log("Encrypted Password: " + data.password);
        updatedtableData.push(data);
        setTableData(updatedtableData);
    };
    // Update table data
    const onHandleUpdate = (info) => {
        updatedtableData.filter(row => {
            if (row.name === info.name) {
                updatedtableData.splice(row, 1)
                setName(info.name)
                const bytes = CryptoJS.AES.decrypt(info.password, 'my-secret-key@123');
                const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                console.log("decryptPassword ", decryptedData);
                setPassword(decryptedData)
                setIsUpdate(true)
            }
            showAlert("Edit", 'Success');
            return setTableData(updatedtableData)
        })

    }

    const askConfirmDelete = (info) => {
        setisVisible(true)
        setDeleteData(info)
    }

    // Delete table data
    const onHandleDelete = () => {

        let newData = updatedtableData.filter(row => row.name !== deleteData.name)
        console.log('newData', newData)
        setTableData(newData)
    }
    const tableRows = tableData.map((info, index) => {
        return (
            <tr className={`font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex w-full justify-between ${info.id % 2 ? "bg-white-0-0" : "bg-blue-table-0"}`} key={index}>
                <td className='w-1/3 justify-center items-center flex'>{info.name}</td>
                <td className='w-1/3 justify-center items-center flex truncate'>{info.password}</td>
                <td className='w-1/4 justify-evenly items-center flex'><button onClick={() => onHandleUpdate(info)} className='ml-2 bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={EditIcon} alt="" /></button> <button onClick={() => askConfirmDelete(info)} className='bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={DeleteIcon} alt="" /></button></td>
            </tr>
        );
    });


    return (
        <div className='flex flex-col w-full h-screen   '>
            <Delete doAction={onHandleDelete} isOpen={isVisible} closeModal={setisVisible} />
            {alert && <Alerts className='w-full h-14' alert={alert} />}
            <label className='font-display py-4 font-normal text-lg lg:text-5xl text-center'>Create a new user</label>
            <div className='w-full flex flex-col   justify-center items-center '>
                <div className='flex justify-center items-start w-full '>{/*lg:w-1/2 */}
                    <CRUD addRows={addRows} name={name} setName={setName} password={password} setPassword={setPassword} isUpdate={isUpdate} setIsUpdate={setIsUpdate} alert={alert} setAlert={setAlert} showAlert={showAlert} updatedtableData={updatedtableData} />
                </div>
                <div className='flex justify-center items-start w-full  '>     {/*lg:w-1/2 */}
                    <table table className="w-[80%] table justify-center items-center bg-white-0 rounded" >
                        <thead>
                            <tr className='font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex  justify-between w-full bg-blue-lighter-0 rounded-t-lg'>
                                {/* <th scope='col' className='w-1/4 justify-center items-center flex'>Sr.NO</th> */}
                                <th scope='col' className='w-1/3 justify-center items-center flex'>Name</th>
                                <th scope='col' className='w-1/3 justify-center items-center flex'>Password</th>
                                <th scope='col' className='w-1/3 justify-center items-center flex'>Action</th>
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
