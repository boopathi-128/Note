const express = require('express');
const router = express.Router();
const passport = require('passport');
const Note = require('../../models/Note');

// @route   GET api/notes
// @desc    Get notes for current user
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Note.find({ user: req.user.id })
    .then(notes => res.json(notes))
    .catch(err => res.status(404).json({ nonotesfound: 'No notes found' }));
});

// @route   POST api/notes
// @desc    Create note
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id
  });
  newNote.save().then(note => res.json(note));
});

// @route   PUT api/notes/:id
// @desc    Update note
// @access  Private
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.title = req.body.title;
      note.content = req.body.content;
      note.save().then(note => res.json(note));
    })
    .catch(err => res.status(404).json({ nonotefound: 'No note found' }));
});

// @route   DELETE api/notes/:id
// @desc    Delete note
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ nonotefound: 'No note found' }));
});

module.exports = router;
