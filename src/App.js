import './App.css';
import Rate from './Rate/Rate';

const allrates = [
  { price: 300, speed: 10, color: 'blue' },
  { price: 450, speed: 50, color: 'green' },
  { price: 550, speed: 100, color: 'red', isSelect: true },
  { price: 1000, speed: 200, color: 'black' }
]


function App() {
  return (
    <div className="App">
      {allrates.map((allrate, index) =>
        <Rate key={index} price={allrate.price} speed={allrate.speed} color={allrate.color} isSelect={allrate.isSelect}
        />
      )}
    </div>
  );
}

export default App;
