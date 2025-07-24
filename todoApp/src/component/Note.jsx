export const Note = ({ id, title, content, deleteNote }) => {
  const handleDeleteTodo = (noteId) => {
    deleteNote(noteId);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleDeleteTodo(id)}>Delete</button>
    </div>
  );
};
