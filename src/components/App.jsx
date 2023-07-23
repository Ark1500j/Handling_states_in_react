import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingtext, setHeadingText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1> Hello {headingtext} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
