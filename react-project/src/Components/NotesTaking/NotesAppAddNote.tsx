import { useState } from 'react'

const NotesAppAddNote = (props: any) => {
    const {addNote} = props;
    const [text, setText] = useState('');
    const handleClick = () => {
        addNote(text);
        setText('');
    }

    const handleChange = (event: any) => {
        setText(event.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='Type to add note...' onChange={handleChange} value={text}/>
        <button onClick={handleClick}>Add Note</button>
    </div>
  )
}

export default NotesAppAddNote