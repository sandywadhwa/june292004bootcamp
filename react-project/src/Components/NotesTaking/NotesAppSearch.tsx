import React from 'react'

const NotesAppSearch = (props: any) => {
    const {setSearchText} = props;

  return (
    <div>
        <input type="text" className="text" placeholder='Type to search....' onChange={(e)=>{
            setSearchText(e.target.value)
        }} />
    </div>
  )
}

export default NotesAppSearch