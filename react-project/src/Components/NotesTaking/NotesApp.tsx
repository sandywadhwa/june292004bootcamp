import React, { useState } from 'react'
import NotesAppNavBar from './NotesAppNavbar'
import NotesAppSearch from './NotesAppSearch'
import NotesAppList from './NotesAppList'
import NotesAppAddNote from './NotesAppAddNote'
import { nanoid } from 'nanoid/non-secure'

// REFERENCE: https://audacity21.github.io/REACT-NOTES-APP


const NotesApp = () => {

    const [myNotes, setNotes] = useState([
        {
            text: "This is first text",
            date: "01/01/2024",
            id: nanoid()
        },
        {
            text: "This is second text",
            date: "01/01/2025",
            id: nanoid()
        }
    ]);

    const addNote = (noteText: any) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: noteText,
            date: date.toLocaleDateString()
        }
        let newNotes = [...myNotes, newNote]
        setNotes(newNotes);
    }
    return (
        <>
            <NotesAppNavBar />
            <NotesAppSearch />
            <NotesAppList notes={myNotes} />
            <NotesAppAddNote addNote = {addNote}/>
        </>
    )
}

export default NotesApp