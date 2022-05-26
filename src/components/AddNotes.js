import { useState } from "react";

const AddNotes = ({handleAddNote})=> {
    const [newNotes, setNewNotes] = useState('');
    const characterRemaining = 200;
   
    const handleChange = (event) => {
        if (characterRemaining - event.target.value.length >= 0){
        setNewNotes(event.target.value);
        }
    };
  
    const handleSaveClick = () => {
        if (newNotes.trim().length > 0 ){
            handleAddNote(newNotes);
            setNewNotes('');
        }
        
    }

    return (
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10"
                placeholder="Type your new note here..."
                value={newNotes}
                onChange={handleChange}
                >  
            </textarea>
            <div className="note-footer">
                <small>{characterRemaining - newNotes.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNotes;