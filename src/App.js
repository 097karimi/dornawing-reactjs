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
          <div className="app-cover col-md-12">
            <Cover />
          </div>
          <div className="app-test col-md-12">
            <Test />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
