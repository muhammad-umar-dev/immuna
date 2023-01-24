import React, { useState } from 'react'

import Alerts from './AlertsMessage';
import DeleteIcon from '../assets/deleteIcon.svg'
import EditIcon from '../assets/editIcon.svg'
import Delete from '../modal/Delete';
import SignupForm from './SignupForm';

let CryptoJS = require("crypto-js");

const SignupTable = (props) => {
    // props = props || {};
    // const { tableData, setTableData, } = props
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
        // console.log('addRows', data)
        const totalRecord = tableData.length;
        let newData = updatedtableData.filter(row => row.id !== data.id)
        // console.log('newData', newData)
        const newID = isUpdate ? data.id : data.id = totalRecord + 1;
        data.id = newID

        // return setTableData(newData)

        //    Password Encrypted
        data.password = CryptoJS.AES.encrypt(JSON.stringify(data.password), 'my-secret-key@123').toString();
        // console.log("table data", updatedtableData.push(data))
        newData.push(data)
        // console.log("push data", data)
        // console.log("newData 1", newData.push(data))
        const sortedData = newData.sort((a, b) => a.id - b.id)
        // console.log(sortedData)
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

            <div className={` grid grid-cols-7 gap-4 font-display font-light lg:font-normal text-sm lg:text-sm h-[61px]  w-full justify-between ${info.id % 2 ? "bg-white-0-0" : "bg-blue-table-0"}`} key={index}>
                <div className='grid justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.id}</div>
                <div className='grid justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm  '>{info.firstName}</div>
                <div className='grid justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.lastName}</div>
                <div className='grid justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.email}</div>
                {/* <div className='w-[17.5%] justify-center items-center flex truncate  px-2'>{info.password}</div> */}
                <div className='grid justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm '>{info.role}</div>
                <div className='grid  justify-center items-center font-display font-light lg:font-normal text-sm lg:text-sm'>{info.access}</div>
                {/* Action  */}
                <div className='flex justify-evenly items-center font-display font-light lg:font-normal text-sm lg:text-sm'>
                    <button onClick={() => onHandleUpdate(info)} className='ml-2 bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={EditIcon} alt="" /></button>
                    <button onClick={() => askConfirmDelete(info)} className='bg-blue-medium-0 text-white font-mono p-2 rounded'><img src={DeleteIcon} alt="" /></button></div>

            </div>

        );
    });

    return (

        <div className='flex flex-col w-full h-full  '>
            <Delete doAction={onHandleDelete} isOpen={isVisible} closeModal={setisVisible} />
            {alert && <Alerts className='w-full h-14' alert={alert} />}

            <SignupForm tableData={tableData} setTableData={setTableData} addRows={addRows} updatedtableData={updatedtableData} id={id} setId={setId} firstName={firstName} lastName={lastName} password={password} email={email} role={role} access={access} isUpdate={isUpdate} setIsUpdate={setIsUpdate} />


            {/* Table */}
            <div className='w-full flex flex-col py-5   justify-center items-center '>

                <div className='flex justify-center items-start w-full overflow-x-auto px-2  '>     {/*lg:w-1/2 */}

                    <div className='grid grid-cols-7 gap-4 h-[61px] justify-between w-full bg-blue-lighter-0 rounded-t-lg'>
                        <div className='grid justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Sr.NO</div>
                        <div className='grid justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>First Name</div>
                        <div className='grid justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Last Name</div>
                        <div className='grid justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Email</div>
                        <div className='grid justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Role</div>
                        <div className='grid justify-center items-center font-display font-light lg:font-bold text-sm lg:text-sm '>Access</div>
                        <div className='grid justify-center items-center
                        font-display font-light lg:font-bold text-sm lg:text-sm '>Action</div>
                    </div>



                    {/* <table table className="w-full mx-4 p-4 table justify-center items-center bg-white-0 rounded" >
                        <thead>
                        <tr className='font-display font-light lg:font-normal text-sm lg:text-sm h-[61px] flex  justify-between w-full bg-blue-lighter-0 rounded-t-lg'>
                        <th scope='col' className='w-[10%] justify-center items-center flex'>Sr.NO</th>
                        <th scope='col' className='w-[10%] justify-center items-center flex'>First Name</th>
                        <th scope='col' className='w-[10%] justify-center items-center flex '>Last Name</th>
                        <th scope='col' className='w-[17.5%] justify-center items-center flex '>Email</th>
                                <th scope='col' className='w-[17.5%] justify-center items-center flex '>Password</th>
                                <th scope='col' className='w-[10%] justify-center items-center flex'>Role</th>
                                <th scope='col' className='w-[10%] justify-center items-center flex'>Access</th>
                                <th scope='col' className='w-[15%] justify-center items-center flex'>Action</th>
                            </tr>
                        </thead>
                        <tbody>{tableRows}</tbody>
                    </table> */}
                </div>
                <div className='grid'>{tableRows}</div>
            </div >
        </div>
    )
}

export default SignupTable
