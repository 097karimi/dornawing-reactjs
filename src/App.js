import Navbar from "./components/navbar/Navbar";
import Cover from "./components/cover/Cover";
import './assets/styles/app.css';

function App() {
  return (
    <div className="app">
      <div className="app-navbar">
        <Navbar />
      </div>
      <div className="app-cover">
        <Cover />
      </div>
    </div>
  );
}

export default App;
