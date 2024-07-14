import React from 'react';

const Note = ({ note, onDelete }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.content}</p>
      <button className="btn btn-danger" onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  </div>
);

export default Note;
