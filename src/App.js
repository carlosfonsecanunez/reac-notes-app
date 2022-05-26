import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Notelist from "./components/Notelist.js";
import Search from "./components/Search.js";
import Header from "./components/Header";
;
const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is mi first note",
    date: "18/05/2022"
  },
  {
    id: nanoid(),
    text: "This is mi second note",
    date: "17/05/2022"
  },
  {
    id: nanoid(),
    text: "This is mi third note",
    date: "02/05/2022"
  },
  {
    id: nanoid(),
    text: "This is mi fourth note",
    date: "06/05/2022"
  }
]);

const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNotes){
      setNotes(savedNotes);
    }
}, [])

useEffect(()=> {
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes,newNote];
  setNotes(newNotes);
};

const deleteNote = (id)=> {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

  return(
    <div className={`${darkMode && 'dark-mode'}`}>    
      <div className="container">
      <Header handledarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <Notelist notes={notes.filter((note)=>
                note.text.toLocaleLowerCase().includes(searchText))} 
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App;