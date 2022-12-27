import React from "react";

function NotesAction({ id, removeNotes }) {
   return (
      <>
         <li
            className="note-item__delete-button"
            onClick={() => removeNotes(id)}
         >
            Hapus
         </li>
      </>
   );
}

export default NotesAction;
