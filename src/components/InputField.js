import React, { useState } from 'react'

const InputField = () => {
    const [inputLogin, setInputLogin] = useState('');
    const onChangehandler = (e) => {
        setInputLogin(e.target.value);
    }
    return (
        <>
            <input
                className='w-[509px] h-[65px] bg-gray-0 rounded-full font-display font-normal text-sm my-5 px-8  outline-none '
                placeholder='Enter wallet address '
                onChange={onChangehandler} >
            </input>
        </>
    )
}

export default InputField
