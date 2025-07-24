import { useState } from "react";

export const CreateArea = ({ addNote, myFunc }) => {
  // console.log(myFunc(25, 32));

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <>
      <form onSubmit={submitNote}>
        {isExpanded && (
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleInputChange}
          value={note.content}
          role={isExpanded ? 3 : 1}
        ></textarea>

        <button>Add note</button>
      </form>
    </>
  );
};
