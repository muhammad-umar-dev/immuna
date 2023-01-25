import React, { useState } from 'react'

import Alerts from './AlertsMessage';
import DeleteIcon from '../assets/deleteIcon.svg'
import EditIcon from '../assets/editIcon.svg'
import Delete from '../modal/Delete';
import SignupForm from './SignupForm';

let CryptoJS = require("crypto-js");

const SignupTable = () => {

    const [tableData, setTableData] = useState([])
    const updatedtableData = [...tableData]

    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [access, setAccess] = useState('')

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
        let newData = updatedtableData.filter(row => row.id !== data.id)
        const newID = isUpdate ? data.id : data.id = totalRecord + 1;
        data.id = newID
        //    Password Encrypted
        data.password = CryptoJS.AES.encrypt(JSON.stringify(data.password), 'my-secret-key@123').toString();
        newData.push(data)

        const sortedData = newData.sort((a, b) => a.id - b.id)

        setTableData(sortedData)
    }


    // Update table data
    const onHandleUpdate = (info) => {

        updatedtableData.filter(row => {
            if (row.id === info.id) {
                // Password decryption
                const bytes = CryptoJS.AES.decrypt(info.password, 'my-secret-key@123');
                const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                // console.log("decryptPassword ", decryptedData);
                setId(info.id)
                setFirstName(info.firstName)
                setLastName(info.lastName)
                setEmail(info.email)
                setPassword(decryptedData)
                setRole(info.role)
                setAccess(info.access)
                setIsUpdate(true)

                // setTableData(updatedtableData)
            }

            return showAlert("Edit Data", 'Success');

        })

    }

    // Delete table data
    const askConfirmDelete = (info) => {
        setisVisible(true)
        setDeleteData(info)
    }

    const onHandleDelete = () => {
        let newData = updatedtableData.filter(row => row.id !== deleteData.id)
        setTableData(newData)
        showAlert("Data delete Successfully", "Success");
    }

    const tableRows = tableData.map((info, index) => {
        return (
            <tr className={` grid grid-cols-7 gap-4 font-display font-light lg:font-normal text-sm lg:text-sm h-[61px]  w-full justify-between  ${info.id % 2 ? "bg-white-0-0" : "bg-blue-table-0"}`} key={index}>
                <td className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.id}</td>
                <td className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm  '>{info.firstName}</td>
                <td className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.lastName}</td>
                <td className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.email}</td>
                <td className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm '>{info.role}</td>
                <td className='grid w-40 lg:w-auto  justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.access}</td>
                {/* Action  */}
                <td className='flex w-40 lg:w-auto justify-evenly items-center font-display font-light lg:font-normal text-sm lg:text-sm'>
                    <button onClick={() => onHandleUpdate(info)} className='ml-2 bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={EditIcon} alt="" /></button>
                    <button onClick={() => askConfirmDelete(info)} className='bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={DeleteIcon} alt="" /></button></td>

            </tr>

        );
    });

    return (

        <div className='flex flex-col w-full h-full  '>
            <Delete doAction={onHandleDelete} isOpen={isVisible} closeModal={setisVisible} />
            {alert && <Alerts className='w-full h-14' alert={alert} />}

            <SignupForm tableData={tableData} setTableData={setTableData} addRows={addRows} updatedtableData={updatedtableData} id={id} setId={setId} firstName={firstName} lastName={lastName} password={password} email={email} role={role} access={access} isUpdate={isUpdate} setIsUpdate={setIsUpdate} />


            {/* Table */}
            <div className=' overflow-x-auto'>
                <table className='w-full  py-5 justify-center items-center '>
                    <thead>
                        <tr className='bg-blue-lighter-0 rounded grid grid-cols-7 gap-4 place-items-center h-[61px] justify-between'>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Sr.NO</th>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>First Name</th>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Last Name</th>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Email</th>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Role</th>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Access</th>
                            <th scope='cols' className='grid w-40 lg:w-auto justify-center items-center
                        font-display font-light lg:font-bold text-sm lg:text-sm '>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>{tableRows}</tbody>


                </table >
            </div>
        </div>
    )
}

export default SignupTable
