import React, { useState } from 'react';

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="container">
      {hidden ? (<span></span>) : (<span>I'm a toggable text</span>)}
      <button onClick={() => setHidden(!hidden)}>Toggle text</button>
    </div>
  );
}

export default App;
