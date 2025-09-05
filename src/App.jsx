import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './chat.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app__body">
          {' '}
          <Sidebar />
          <Chat />
        </div>
        {/* Sidebar */}
      </div>
    </>
  );
}

export default App;
