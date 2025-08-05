import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app__body">
          {' '}
          <Sidebar />
        </div>
        {/* Sidebar */}
      </div>
    </>
  );
}

export default App;
