import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newNote = { title, content };
    const res = await axios.post('/api/notes', newNote);
    console.log(res.data);
    // You can add logic to update state or redirect to note list
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NoteForm;
