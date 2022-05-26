import Note from "./Note.js";
import AddNotes from "./AddNotes.js";

const Notelist = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} 
                handleDeleteNote={handleDeleteNote} />
            ))}    
            <AddNotes handleAddNote={handleAddNote}/>    
        </div>
    )
}

export default Notelist;