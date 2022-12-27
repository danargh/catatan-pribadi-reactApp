import React from "react";

function MoveNotes({ id, moveNotes }) {
   return (
      <>
         <li
            className="note-item__archive-button"
            onClick={() => moveNotes(id)}
         >
            Pindahkan
         </li>
      </>
   );
}

export default MoveNotes;
