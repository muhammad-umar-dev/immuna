import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const user = 'umar'
    const [islogedin, setIsLogedIn] = useState(false)
    return (
        <NoteContext.Provider value={{ user, islogedin, setIsLogedIn }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
