import React from "react";

import NotesList from "./NotesList";

function NotesBar({ notesData, removeNotes, moveNotes, searchTherm }) {
   let notes = [];
   notesData.forEach((note) => {
      if (note.archived === false) {
         notes.push(note);
      }
   });

   if (notes.length === 0) {
      return (
         <>
            <h2>Catatan</h2>
            <p className="notes-list__empty-message">Tidak ada catatan</p>
         </>
      );
   } else {
      let results = notes;

      if (searchTherm !== "") {
         results = notes.filter((val) => {
            return val.title
               .toLocaleLowerCase()
               .includes(searchTherm.toLocaleLowerCase());
         });
      }

      return (
         <>
            <h2>Catatan</h2>
            <NotesList
               notesData={results}
               removeNotes={removeNotes}
               moveNotes={moveNotes}
            ></NotesList>
         </>
      );
   }
}

export default NotesBar;
