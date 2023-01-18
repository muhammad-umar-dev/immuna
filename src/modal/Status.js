import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import closeIcon from '../assets/closeIcon.svg'


const Status = (props) => {
    let [isOpen, setIsOpen] = useState(true)
    const { balance, riskStatus } = props
    // console.log('Modal' + balance + ' balance: ' + riskStatus + ' risk status: ')

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
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
                            <Dialog.Panel className="w-[960px]  transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="font-display font-normal font-sm flex justify-between mx-8">
                                    <h3 className=''>Status</h3><button onClick={closeModal}><img src={closeIcon} alt="close" /></button>
                                </Dialog.Title>
                                <hr className='mt-4' />

                                <div className='mt-2 mx-8 flex items-center ' >
                                    <h1 className='font-display font-normal text-lg'>RiskStatus</h1>
                                    <button className={`ml-4 w-24 h-9 font-table-risk rounded-full ${riskStatus === 'Green' ? "bg-green-btn-0 text-green-text-0" : riskStatus === 'Yellow' ? 'text-yellow-text-0 bg-yellow-btn-0' : 'bg-red-btn-0 text-red-text-0'}`} onClick={openModal} >{riskStatus}</button>
                                </div>
                                <div className="bg-gray-box-0 rounded-lg mx-10 my-4 p-4">
                                    <div className='flex'>
                                        <div className=' flex  flex-col w-1/2 ' >
                                            <h1 className='font-display font-normal text-sm text-gray-dark-0'>Trigger:</h1>
                                            <h1 className='font-display font-normal text-sm text-gray-darker-0'>The asset's risk profile has changed significantly.</h1>
                                        </div>
                                        <div className=' flex  flex-col w-1/2' >
                                            <h1 className='font-display font-normal text-sm text-gray-dark-0'>Event Summary</h1>
                                            <h1 className='font-display font-normal text-sm text-gray-darker-0'>A significant amount of Compound were transferred.</h1>
                                        </div>
                                    </div>
                                    <div className='font-display text-sm text-gray-500 mt-12'>
                                        <h1 className='font-display font-normal text-sm text-gray-dark-0'>Details:</h1>
                                        <p>
                                            [Token % out of the entire circulation] 0.58% were transferred. A significant movement is detected when there are more than 1% of the tokens in circulation that were moved in a single transaction. Such a significant movement usually triggers movements in the asset's price and therefor should be monitored closely.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-center">
                                    <button type="button" className="w-[221px] h-[48px] font-table-risk font-semibold rounded-full bg-blue-0 text-white-0 text-base "
                                        onClick={closeModal}                                        >
                                        Continue
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Status
