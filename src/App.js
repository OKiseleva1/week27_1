import './App.css';
import Rate from './Rate/Rate';

const allrates = [
  { price: 300, speed: 10 },
  { price: 450, speed: 50 },
  { price: 550, speed: 100 },
  { price: 1000, speed: 200 }
]


function App() {
  return (
    <div className="App">
      {allrates.map((allrate) =>
        <Rate price={allrate.price} speed={allrate.speed} />
      )}
    </div>
  );
}

export default App;
