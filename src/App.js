import React, { useState } from 'react';
import notes from './assets/notes.js';
import './App.scss';

const NoteButton = (props) => {
  // console.log("PROPS", props);
  return (
    <button
      className="note-button"
      style={{ height: (200 - (15 * props.index)) + 'px' }}
      onClick={() => {
        /* props.setPlayedNotes([...props.playedNotes, props.note]); */
        props.addPlayedNote(props.note);
        console.log(props.playedNotes);
        new Audio(props.note.file).play();
    }}>
      {props.note.name}
    </button>
  );
};

function App() {
  const [playedNotes, setPlayedNotes] = useState([]);

  const replayNotes = () => {
    playedNotes.map((note, index) => {
      window.setTimeout(() => new Audio(note.file).play(), 500 * index);
    });
  };

  const resetNotes = () => {
    setPlayedNotes([]);
  };

  const addPlayedNote = (note) => {
      setPlayedNotes([...playedNotes, note]);
  };

  return (
    <div className="page">
      <h1>Create your react xylophone</h1>
      <div className="xylophone">
        {/* I am placeholder buttons, please create me using a map, and with your own component */}
        {notes.map((note, index) => (
          <NoteButton
            index={index}
            addPlayedNote={addPlayedNote}
            key={note.name}
            note={note}
          />
        ))}
      </div>
      {JSON.stringify(playedNotes)}
      <button onClick={() => replayNotes()}>Replay</button>
      <button onClick={() => resetNotes()}>Clear</button>
    </div>
  );
}

export default App;
