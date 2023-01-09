import React from 'react';
import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import useKeyPress from './hooks/useKeyPress';

function App() {
  const [noteActive, setNoteActive] = useState<boolean>(false);
  const isControlPressed: boolean = useKeyPress("Control");
  const isEPressed: boolean = useKeyPress("e");



  useEffect(() => {
    console.log("isControlEPressed");
    if (isControlPressed && isEPressed) {
      setNoteActive(!noteActive);
    }
  }, [isControlPressed, isEPressed]);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to QuikNote!
        </p>
        <p>Press Ctrl + e to jot down a note</p>
        {noteActive && <textarea />}
      </header>
    </div>
  );
}

export default App;
