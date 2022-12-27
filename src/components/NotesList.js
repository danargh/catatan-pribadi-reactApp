import React from "react";

import NotesItem from "./NotesItem";

function NotesList({ notesData, removeNotes, moveNotes }) {
   return (
      <>
         <div className="notes-list">
            {notesData.map((data) => (
               <NotesItem
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  body={data.body}
                  createdAt={data.createdAt}
                  removeNotes={removeNotes}
                  moveNotes={moveNotes}
                  // {...notesData}
               />
            ))}
         </div>
      </>
   );
}

export default NotesList;
