import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import NoteList from './Components/NoteList.js';
import NoteForm from './Components/NoteForm.js';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-${isDarkMode ? 'dark' : 'light'} text-${isDarkMode ? 'white' : 'dark'} min-vh-100`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
};
export default App;
