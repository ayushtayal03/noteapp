import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: Date.now(),
      title,
      content
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="noteTitle" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="noteTitle"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="noteContent" className="form-label">Content</label>
        <textarea
          className="form-control"
          id="noteContent"
          rows="3"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
};

export default NoteForm;
