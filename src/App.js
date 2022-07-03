import './App.css'
import Manager from "./components/Manager/Manager";
import GeneralContext from "./context/GeneralContext";
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div className="App">
      <GeneralContext>
      <div className="d-flex">
          <Aside/>
          <Manager/>
      </div>
      </GeneralContext>
    </div>
  );
}

export default App;
