import React from "react";

class MakeNotesForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: "",
         body: "",
         archived: false,
      };
      this.onTitleChangeEventHandler =
         this.onTitleChangeEventHandler.bind(this);
      this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
   }
   onTitleChangeEventHandler(event) {
      this.setState(() => {
         return {
            title: event.target.value,
         };
      });
   }
   onBodyChangeEventHandler(event) {
      this.setState(() => {
         return {
            body: event.target.value,
         };
      });
   }
   onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNotes(this.state);
   }

   render() {
      return (
         <>
            <form onSubmit={this.onSubmitEventHandler}>
               <input
                  type="text"
                  placeholder="Masukan Judul Catatan"
                  value={this.state.title}
                  onChange={this.onTitleChangeEventHandler}
                  onKeyUp={this.props.typingCount}
               />
               <textarea
                  placeholder="Isi Catatan"
                  value={this.state.body}
                  onChange={this.onBodyChangeEventHandler}
               />
               <button type="submit">Tambah</button>
            </form>
         </>
      );
   }
}

export default MakeNotesForm;
