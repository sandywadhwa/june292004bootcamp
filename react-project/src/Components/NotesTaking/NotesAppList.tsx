import React from 'react'

const NotesAppList = (props: any) => {
    // console.log(JSON.stringify(props));
    const { notes } = props;
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