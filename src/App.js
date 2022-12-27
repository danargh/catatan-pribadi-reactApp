import React from "react";
import { getInitialData, showFormattedDate } from "./utils/data";

import SearchInput from "./components/SearchInput";
import MakeNotesBar from "./components/MakeNotesBar";
import NotesBar from "./components/NotesBar";
import ArsipBar from "./components/ArsipBar";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         notesData: getInitialData(),
         charCount: 100,
         searchTherm: "",
      };
      this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
      this.onRemoveNotesHandler = this.onRemoveNotesHandler.bind(this);
      this.onMoveNotesHandler = this.onMoveNotesHandler.bind(this);
      this.onTypingHandler = this.onTypingHandler.bind(this);
      this.onSearchHandleEvent = this.onSearchHandleEvent.bind(this);
   }
   onAddNotesHandler({ title, body, archived }) {
      this.setState((prevState) => {
         return {
            notesData: [
               ...prevState.notesData,
               {
                  id: this.state.notesData.length + 1,
                  title,
                  body,
                  createdAt: showFormattedDate(new Date()),
                  archived,
               },
            ],
         };
      });
   }
   onRemoveNotesHandler(id) {
      const notesData = this.state.notesData.filter((note) => note.id !== id);
      this.setState({ notesData });
   }
   onMoveNotesHandler(id) {
      let moveAble = this.state.notesData.filter((note) => note.id === id);
      if (moveAble[0].archived === false) {
         moveAble[0].archived = true;
      } else if (moveAble[0].archived === true) {
         moveAble[0].archived = false;
      }
      this.setState({ moveAble });
   }

   onTypingHandler(event) {
      let stateCount = 100;
      let typeCount = event.target.value.length;
      stateCount -= typeCount;
      this.setState({ charCount: stateCount });
   }
   onSearchHandleEvent(keyword) {
      this.setState({ searchTherm: keyword });
   }

   render() {
      return (
         <>
            <header className="note-app__header">
               <h1>Notes App</h1>
               <SearchInput
                  searchHandle={this.onSearchHandleEvent}
               ></SearchInput>
            </header>
            <main className="note-app__body">
               <MakeNotesBar
                  addNotes={this.onAddNotesHandler}
                  charCount={this.state.charCount}
                  typingCount={this.onTypingHandler}
               />
               <NotesBar
                  notesData={this.state.notesData}
                  removeNotes={this.onRemoveNotesHandler}
                  moveNotes={this.onMoveNotesHandler}
                  searchTherm={this.state.searchTherm}
               ></NotesBar>
               <ArsipBar
                  notesData={this.state.notesData}
                  removeNotes={this.onRemoveNotesHandler}
                  moveNotes={this.onMoveNotesHandler}
                  searchTherm={this.state.searchTherm}
               ></ArsipBar>
            </main>
         </>
      );
   }
}

export default App;
