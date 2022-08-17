import ImageComponent from './components/img-component';
import TextComponent from './components/text-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container row">
        <div>
          <ImageComponent />
        </div>
        <div>
          <TextComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
