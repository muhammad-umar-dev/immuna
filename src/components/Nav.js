import React, { useContext } from 'react'
import noteContext from '../context/noteContext'
import logo from '../assets/logo.svg';

import logo2 from '../assets/logo2.svg'
import downArrow from '../assets/downArrow.svg'
import Search from './Search';
const Nav = (props) => {
    const userStatus = useContext(noteContext)
    const userName = 'N/A'
    const userimage = 'https://avatars.githubusercontent.com/u/118973657?s=400&u=5aedb79245e2262a348f983628f9d586fc2c6768&v=4';
    const defaultImage = 'https://www.colorcombos.com/images/colors/D1D1D1.png'
    return (
        <nav className='flex  h-[65px] w-full items-center justify-center bg-white-0 drop-shadow-[0_1px_10px_rgba(74,74,74,0.07)]' >
            {/* Navbar logo */}
            <div className='flex w-1/5 justify-center'>
                {userStatus.islogedin ? (<img src={logo2} alt="immuna" />) :
                    (<img src={logo} alt="immuna" />)
                }
            </div>
            {/* Navbar search */}
            <div className='w-3/5 '>
                {userStatus.islogedin ? (
                    <div className='flex  items-center'>
                        <label className='font-display font-medium text-lg text-gray-dark-0 ml-5'>{props.navStatus}</label>
                        <div className='ml-[54px] w-[353px] h-[40px]'>
                            <Search className='flex' width={'353px'} height={'40px'} />
                        </div>
                    </div>
                ) : <>  </>
                }
            </div>
            {/* User login details */}
            <div className='flex items-center w-1/5 justify-center'>
                <img className='rounded-full w-[32px] h-[32px] bg-gray-0 mx-1' src={userStatus.islogedin ? userimage : defaultImage} alt="" />
                <div className='flex items-center'>
                    <label className='font-display font-normal text-base mx-1'>{userStatus.islogedin === true ? userStatus.user : userName}</label>
                    <img className='h-1 mx-1' src={downArrow} alt='down arrow' />
                </div>
            </div>
        </nav>
    )
}

export default Nav
