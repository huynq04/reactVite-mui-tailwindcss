import { useState } from 'react';
import Content from './content';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
