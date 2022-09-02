import './App.css';
import ClickablePicture from "./component/ClickablePicture";

import maxence from "./assets/images/maxence.png";
import maxenceGlasses from "./assets/images/maxence-glasses.png";

function App() {
  return (
    <div className="App">
        <ClickablePicture
  img={maxence}
  imgClicked={maxenceGlasses}
/>
    </div>
  );
}

export default App;
