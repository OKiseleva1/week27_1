
import { useState } from 'react';
import './App.css';
import Rate from './Rate/Rate';



const allrates = [
  { id: 1, price: 300, speed: 10, color: 'blue' },
  { id: 2, price: 450, speed: 50, color: 'green' },
  { id: 3, price: 550, speed: 100, color: 'red' },
  { id: 4, price: 1000, speed: 200, color: 'black' }
]


function App() {
  const [isSelect, setIsSelect] = useState(0);

  return (
    <div className="App">
      {allrates.map((allrate, index) =>
        <Rate key={index} price={allrate.price} speed={allrate.speed} color={allrate.color} id={allrate.id} onSetSelect={setIsSelect} isSelect={isSelect === allrate.id} />
      )}
    </div>
  );
}

export default App;
