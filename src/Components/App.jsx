import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Area from "./CreateArea";

function App() {
  const [note, setNote] = useState(notes);

  function addnote(newNote) {
    setNote((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    console.log("Delete was successful ", id);

    setNote((prevNote) => {
      return prevNote.filter((currentNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Area onAdd={addnote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
