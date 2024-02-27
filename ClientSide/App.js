import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <div>
      <h1>My Notes App</h1>
      <NoteList />
      <NoteForm />
    </div>
  );
};

export default App;
