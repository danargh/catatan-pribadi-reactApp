import React from "react";

import NotesList from "./NotesList";

function ArsipBar({ notesData, removeNotes, moveNotes, searchTherm }) {
   let arsip = [];
   notesData.forEach((note) => {
      if (note.archived === true) {
         arsip.push(note);
      }
   });

   if (arsip.length === 0) {
      return (
         <>
            <h2>Catatan</h2>
            <p className="notes-list__empty-message">Tidak ada arsip</p>
         </>
      );
   } else {
      let results = arsip;

      if (searchTherm !== "") {
         results = arsip.filter((val) => {
            return val.title
               .toLocaleLowerCase()
               .includes(searchTherm.toLocaleLowerCase());
         });
      }

      return (
         <>
            <h2>Arsip</h2>
            <NotesList
               notesData={results}
               removeNotes={removeNotes}
               moveNotes={moveNotes}
            ></NotesList>
         </>
      );
   }
}

export default ArsipBar;
