import React, {useState, useEffect, useRef} from 'react';

function App() {
  const [name, setName] = useState('Dan');
  const nameRef = useRef();

  useEffect(() => {
    document.title = `Greetings to ${name}`;
  }, []);

  const handleClick = () => setName(nameRef.current.value);

  return (
    <div className="container">
      <label htmlFor="name">Name:</label>
      <input name="name" ref={nameRef}>
      </input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
