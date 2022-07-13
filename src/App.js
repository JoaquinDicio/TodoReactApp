import './App.css'
import GeneralContext from "./context/GeneralContext";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <GeneralContext>
      <BrowserRouter>
      <Routes>
        <Route path='/TodoReactApp' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </GeneralContext>
    </div>
  );
}

export default App;
