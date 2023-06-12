import React, { useState } from 'react';
import Note from './Notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddNote = () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title: newTitle,
        content: newContent
      };
      setNotes([...notes, newNote]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleUpdateNote = (noteId, title, content) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId ? { ...note, title, content } : note
      )
    );
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="add-note">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onUpdate={handleUpdateNote}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

