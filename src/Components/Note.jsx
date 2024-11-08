import React from "react";

function Note(props) {
  function handleclick(e) {
    console.log(e.target.value, props);
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}>DELETE</button>
    </div>
  );
}

export default Note;
