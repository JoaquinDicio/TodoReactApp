import AsideContainer from "./components/AsideContainer/AsideContainer";
import './App.css'
import Manager from "./components/Manager/Manager";
import GeneralContext from "./context/GeneralContext";

function App() {
  return (
    <div className="App">
      <GeneralContext>
      <div className="d-flex">
          <AsideContainer/>
          <Manager/>
      </div>
      </GeneralContext>
    </div>
  );
}

export default App;
