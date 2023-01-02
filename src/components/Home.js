import Nav from './Nav'
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import React from 'react'

const Home = (props) => {
    const { islogedin, user } = props;
    return (
        <>
            <Nav islogedin={islogedin} user={user} />
            <div className='flex w-full justify-between'>
                <LeftSide clasName='flex w-[48%] ' />
                <RightSide clasName='flex w-[48%] ' islogedin={islogedin} user={user} />
                {console.log(" Home  ", islogedin, user)}
            </div>
        </>
    )
}

export default Home