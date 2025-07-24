import { useState } from "react";
import { Header } from "./component/Header";
import { CreateArea } from "./component/CreateArea";
import { Note } from "./component/Note";

export const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(`Is come here till `);

    setNotes((preNotes) => [...preNotes, newNote]);
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote, index) => index != id);
    });
  }

  function addtion(a, b) {
    return a + b;
  }

  return (
    <>
      <Header />

      <CreateArea addNote={addNote} myName="Akash" myFunc={addtion} />
      
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          deleteNote={deleteNote}
        />;
      })}
    </>
  );
};
