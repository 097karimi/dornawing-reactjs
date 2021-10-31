import Navbar from "./components/navbar/Navbar";
import Cover from "./components/cover/Cover";
import './assets/styles/app.css';
import Test from "./components/test/Test";

function App() {
  
  return (
    <div className="app">
      <div className="container-fuled">
        <div className="row ">
          <div className="app-navbar">
            <Navbar />
          </div>
          <div className="app-cover">
            <Cover />
          </div>
          <div className="app-test">
            <Test />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
