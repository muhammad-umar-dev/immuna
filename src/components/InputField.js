import React, { useState } from 'react'

const InputField = (props) => {
    const { islogedin, user } = props
    const [inputLogin, setInputLogin] = useState('');
    const onChangehandler = (e) => {
        setInputLogin(e.target.value);
    }
    return (
        <>
            <input
                className='w-[509px] h-[65px] bg-gray-0 rounded-full font-display font-normal text-sm my-5 px-8 '
                placeholder='Enter wallet address '
                onChange={onChangehandler} >
            </input>
            {console.log(inputLogin + ", user  " + user)}
        </>
    )
}

export default InputField
