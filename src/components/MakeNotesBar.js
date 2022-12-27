import React from "react";

import MakeNotesForm from "./MakeNotesForm";
import CharCounter from "./CharCounter";

function MakeNotesBar({ addNotes, typingCount, charCount }) {
   return (
      <React.Fragment>
         <div className="note-input">
            <h2>Buat Catatan</h2>
            <CharCounter charCount={charCount} />
            <MakeNotesForm addNotes={addNotes} typingCount={typingCount} />
         </div>
      </React.Fragment>
   );
}

export default MakeNotesBar;
