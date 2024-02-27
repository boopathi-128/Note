import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get('/api/notes');
      setNotes(res.data);
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
