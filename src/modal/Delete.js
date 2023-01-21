import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Delete = (props) => {
    let [isOpen, setIsOpen] = useState(true)
    const { isDelete, setIsDelete } = props

    const onClickDelete = () => {
        setIsDelete(true)
        closeModal()
    }

    const onClickCancel = () => {
        setIsDelete(false)
        closeModal()
    }
    function closeModal() {
        setIsOpen(false)
    }


    // function openModal() {
    //     setIsOpen(true)
    // }
    return (
        <Transition appear show={isOpen} as={Fragment}>

            <Dialog as="div" className=" relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center py-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="font-display font-normal text-2xl flex justify-center mx-8">
                                    <h3 className='font-display font-extrabold  justify-center   pt-6 items-center'>Confirmation</h3> </Dialog.Title>

                                <div className=" rounded-lg mx-10 my-4 p-4">
                                    <h1 className='font-display font-extrabold '>DO YOU WANT TO <strong>"DELETE"</strong> CURRENT USER? </h1>
                                </div>
                                <div className='bg-gray-font-0 h-[1px]' />

                                <div className=" flex h-full justify-center">
                                    <button type="button" className=" w-1/2 font-table-risk font-bold rounded-full text-blue-0 text-base py-6 " onClick={onClickCancel} >CANCEL </button>
                                    <div className='bg-gray-font-0 w-[1px] ' ></div>
                                    <button type="button" className="w-1/2 font-table-risk font-bold rounded-full text-blue-0 text-base py-6" onClick={onClickDelete} > YES  </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Delete
