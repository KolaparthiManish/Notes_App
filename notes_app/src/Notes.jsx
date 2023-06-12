import React, { useState } from 'react';
import "./Notes.css"

const Note = ({ note, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleUpdate = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      onUpdate(note.id, title, content);
      setEditMode(false);
    }
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <div className="note">
      {editMode ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Note;
