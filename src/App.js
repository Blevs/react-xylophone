import React, { useState } from 'react';
import notes from './assets/notes.js';
import './App.scss';

const NoteButton = (props) => {
  const clickHandler = () => {
    new Audio(props.note.file).play();
    props.addPlayedNote(props.note);
  };
  return (
    <button className={`note-button ${props.note.name}`} onClick={clickHandler} style={props.style}>
      {props.note.name}
    </button>
  );
};

function App() {
  const [playedNotes, setPlayedNotes] = useState([]);

  const addPlayedNote = (note) => {
    setPlayedNotes([...playedNotes, {...note, time: Date.now()}]);
  };

  const replayNotes = () => {
    if (playedNotes.length > 0) {
      const offset = playedNotes[0].time;
      playedNotes.forEach((note, idx) => {
        window.setTimeout(() => new Audio(note.file).play(), note.time - offset);
      });
    }
  };

  const resetPlayedNotes = () => {
    setPlayedNotes([]);
  };

  return (
    <div className="page">
      <h1>React Xylophone</h1>
      <div className="xylophone">
        {notes.map((note, idx) => (
          <NoteButton
            key={note.name}
            note={note}
            addPlayedNote={addPlayedNote}
            style={{ height: (200 - (15 * idx)) + 'px' }}
          />
        ))}
      </div>
      <div className="played-notes">
        {playedNotes.map((note, idx) => (
          <span key={note.name + idx} className={note.name}>
            {note.name}
          </span>
        ))}
      </div>
      <div style={{color: "#00000077"}}>
        *I don't know how musical notation works
      </div>
      <div className="controls">
        <button className="play" onClick={() => replayNotes()}>Play</button>
        <button className="reset" onClick={() => resetPlayedNotes()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
