import './App.css';
import Carousel from "./component/Carousel";

function App() {
  return (
    <div className="App">
        <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
    </div>
  );
}

export default App;
