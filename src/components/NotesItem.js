import React from "react";
import RemoveNotes from "./RemoveNotes";
import MoveNotes from "./MoveNotes";

function NotesItem({ id, title, body, createdAt, removeNotes, moveNotes }) {
   return (
      <>
         <div className="note-item">
            <ul className="note-item__content">
               <li className="note-item__title">{title}</li>
               <li className="note-item__date">{createdAt}</li>
               <li className="note-item__body">{body}</li>
            </ul>

            <ul className="note-item__action">
               <RemoveNotes id={id} removeNotes={removeNotes} />
               <MoveNotes id={id} moveNotes={moveNotes} />
            </ul>
         </div>
      </>
   );
}

export default NotesItem;
