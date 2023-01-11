import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import useKeyPress from './hooks/useKeyPress';

const postNote = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Note saved ✅');
}


function App() {
  const [noteActive, setNoteActive] = useState<boolean>(false);
  const isControlPressed: boolean = useKeyPress("Control");
  const isEPressed: boolean = useKeyPress("e");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isControlPressed && isEPressed) {
      setNoteActive(!noteActive);
    }
  }, [isControlPressed, isEPressed]); // Only re-run the effect if pressedKey changes 
  
  useEffect(() => {
    //set focus on textarea when noteActive is true
    if(textareaRef.current && noteActive){
      textareaRef.current.focus();
    }

  }, [noteActive]);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to QuikNote!
        </p>
        {!noteActive && <p>Press Ctrl + E to start taking notes</p>}
        {noteActive && <p>Press Ctrl + E to stop taking notes</p>}
        {noteActive && <form onSubmit={postNote}> <textarea ref={textareaRef} placeholder='Once finished taking the note, hit enter to save!'/>
        <button type='submit'>Save</button> 
        </form>}
      </header>
    </div>
  );
}

export default App;