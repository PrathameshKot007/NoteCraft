import React, { useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import SideBar from './Components/SideBar/SideBar';

function App() {
const [notes,setNotes]=useState([
  {
  text:"asfioudsd",
  time:"3:12AM",
  color:"cyan"
},
{
  text:"efghmm",
  time:"3:17AM",
  color:"yellow"
},
{
  text:"asfioudsd",
  time:"5:12PM",
  color:"pink"
},
{
  text:"asfisddoudsd",
  time:"6:12AM",
  color:"teal"
}
])

const addNote=(color)=>{
  const tempNotes = [...notes]
  tempNotes.push({
    text:"",
    time:Date,
    color:color,
  });
  setNotes(tempNotes);
};

  return (
    <div className="App">
      <SideBar addNote={addNote} />
      <NoteContainer notes={notes}/>
    </div>
  );
}

export default App;
