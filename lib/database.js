//==============================================================================
// database.js
// part of 'total-serialism' Package
// by Timo Hoogland (@t.mo / @tmhglnd), www.timohoogland.com
// MIT License
//
// Build the databases of notes and other values used for the library
// as JSON files
// 
// credits:
// - Using the amazing Tonal.js package by @danigb for various functions
// - Using jsonFile package for beautiful JSON files
//==============================================================================

const jsonFile = require('jsonfile');
const { Note } = require('@tonaljs/tonal');

// Build the database
buildNoteSet();

// Build a database of most common Notenames and their
// corresponding relative semitone value
// 
// @return {Void} -> NoteSet as a JSON object
// 
function buildNoteSet(){
	let notes = 'c d e f g a b'.split(" ");
	notes = notes.concat('c d e f g a b'.toUpperCase().split(" "));
	let accidentals = 'bb b # ## x'.split(" ");

	let tones = {};
	for (n in notes){
		tones[notes[n]] = Note.chroma(notes[n]);
		for (a in accidentals) {
			let key = notes[n] + accidentals[a];
			tones[key] = Note.chroma(key);
		}
	}

	jsonFile.writeFile('data/tones.json', tones, { spaces : 2}, err => {
		if (err) { console.log('error exporting file'); }
		else { console.log('NoteSet database written succesfully'); }
	});
}