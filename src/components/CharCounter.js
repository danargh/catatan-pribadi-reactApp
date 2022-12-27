import React from "react";

function LetterCounter({ charCount }) {
   return (
      <React.Fragment>
         <div className="note-input__title__char-limit">
            <p>Sisa Huruf : {charCount}</p>
         </div>
      </React.Fragment>
   );
}

export default LetterCounter;
