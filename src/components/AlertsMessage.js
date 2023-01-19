import React from 'react'

const AlertMessage = (props) => {
    // console.log(props.alert)
    return (
        <>
            <div className='w-full h-12'>
                {props.alert && <div className={`flex justify-center items-center w-full h-12 text-white text-2xl  ${props.alert.type === 'Success' ? "bg-green-btn-0 " : props.alert.type === 'Danger' ? 'bg-red-btn-0' : ''} alert-dismissible fade show`} role="alert">
                    {props.alert.message}
                </div>}
            </div>
        </>

    )
}

export default AlertMessage