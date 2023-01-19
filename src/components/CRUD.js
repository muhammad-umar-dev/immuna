import React from 'react'

const CRUD = (props) => {
    const { name, setName, password, setPassword, isUpdate, setIsUpdate, alert, setAlert, showAlert } = props
    const values = { name, password }

    const onChangeName = (event) => { setName(event.target.value) }

    const onChangePassword = (event) => { setPassword(event.target.value) }
    // console.log(values)
    const onClickSubmit = (event) => {
        event.preventDefault()
        if (values.name.length === 0 && values.password.length === 0) {
            showAlert("Enter Data", 'Danger')
        } else {
            props.addRows(values)
            setIsUpdate(false)
            clearState();
            isUpdate === true ? showAlert("Data is Updated", 'Success') : showAlert("Data is Added", 'Success')
        }


    }
    const clearState = () => {
        setName('')
        setPassword('')
    }

    return (
        <form className=' flex  flex-col justify-center  rounded ' >

            <div className='flex flex-col justify-center items-center lg:mt-20'>
                <input
                    className={`flex  lg:w-[450px] lg:h-[65px] rounded-full  bg-gray-light-0  font-normal text-sm px-8 py-4 justify-center items-center outline-none `}
                    type='text/plain' required
                    value={name}
                    placeholder='Enter Username '
                    onChange={onChangeName}
                />



                <input
                    className={`flex  lg:w-[450px] lg:h-[65px] rounded-full bg-gray-light-0  font-normal text-sm my-2 px-8 py-4 justify-center items-center outline-none`}
                    type='password' required
                    value={password}
                    placeholder='Enter Password '
                    onChange={onChangePassword}
                />

                <button className='flex  lg:w-[450px] lg:h-[65px] rounded-full justify-center items-center outline-none bg-blue-0  text-white font-mono font-medium my-2 px-8 py-4 '
                    onClick={onClickSubmit}
                    type="Submit">
                    {isUpdate === true ? "Update" : "Login"}
                </button>

            </div>


        </form>
    )
}

export default CRUD






