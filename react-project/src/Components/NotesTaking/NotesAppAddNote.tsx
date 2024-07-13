import { useState } from 'react'

const NotesAppAddNote = (props: any) => {
    const {addNote} = props;
    const [text, setText] = useState('');
    const addNoteFunction = () => {
        addNote(text);
        setText('');
    }
    const deleteNoteFunction = () => {
    }

    const handleChange = (event: any) => {
        setText(event.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='Type to add note....' onChange={handleChange} value={text}/>
        <button onClick={addNoteFunction}>Add Note</button>
        <button onClick={deleteNoteFunction}>Delete Note</button>
    </div>
  )
}

export default NotesAppAddNote