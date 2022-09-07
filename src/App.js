import './App.css';
import NumbersTable from './component/NumbersTable';

function App() {
  return (
    <div className="App">
        <NumbersTable limit={24} />
    </div>
  );
}

export default App;
