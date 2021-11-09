import { Route, Routes } from "react-router";
import Hobby from "./components/hobby/Hobby";
import './assets/styles/app.css';
import Home from "./components/home/Home";
import Applications from "./components/applications/Applications";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ <Home /> } exact/>
        <Route path='/hobby' element={ <Hobby /> } />
        <Route path='/applications' element={ <Applications /> } />
      </Routes>
    </div>
  );
}

export default App;
