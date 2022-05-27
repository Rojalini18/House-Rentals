import './App.css';
import { Rentals } from './Rentals/Rentals';
import { AddHouse } from './AddHouse/AddHouse';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className='App'>
      <button
        onClick={() => {
          status ? setStatus(false) : setStatus(true);
        }}
        className='toggleForm'>
        {/* Show text Add House or Show Rentals based on state */}
        {status ? 'Add-House' : 'Rentals'}
      </button>
      {/* Show component based on state */}
      {status ? <Rentals /> : <AddHouse />}
      <br />
    </div>
  );
}

export default App;
