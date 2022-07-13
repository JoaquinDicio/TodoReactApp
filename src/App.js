import './App.css'
import GeneralContext from "./context/GeneralContext";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GeneralContext>
      <Routes>
        <Route path='/TodoReactApp' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </GeneralContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
