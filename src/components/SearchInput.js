import React from "react";

function SearchInput({ searchHandle }) {
   return (
      <>
         <form className="note-search">
            <label htmlFor="searchInput">
               <i className="ri-search-line"></i>
            </label>
            <input
               className="note-search__input"
               name="searchInput"
               id="searchInput"
               placeholder="Masukan Kata Kunci"
               onChange={(event) => {
                  searchHandle(event.target.value);
               }}
            ></input>
         </form>
      </>
   );
}

export default SearchInput;
