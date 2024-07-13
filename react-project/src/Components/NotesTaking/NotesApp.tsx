import React from 'react'
import NotesAppNavBar from './NotesAppNavbar'
import NotesAppSearch from './NotesAppSearch'
import NotesAppList from './NotesAppList'
import NotesAppAddNote from './NotesAppAddNote'

// REFERENCE: https://audacity21.github.io/REACT-NOTES-APP


const NotesApp = () => {
  return (
    <>
        <NotesAppNavBar />
        <NotesAppSearch />
        <NotesAppList />
        <NotesAppAddNote />
    </>    
  )
}

export default NotesApp