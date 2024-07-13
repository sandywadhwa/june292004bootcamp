import React from 'react'

const NotesAppList = (props: any) => {
const notes = props.notes;
  return (
    <div>
        {
            notes.map((note: any) => {
                return (
                    <div>
                        <h3>{note.text}</h3>
                        <p>{note.date}</p>
                    </div>
                );
            })
        }
    </div>
  )
}

export default NotesAppList