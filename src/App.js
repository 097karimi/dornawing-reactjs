import Navbar from "./components/navbar/Navbar";
import Cover from "./components/cover/Cover";
import Why_us from "./components/why_us/Why_us";
import Test from "./components/test/Test";
import './assets/styles/app.css';

function App() {
  
  return (
    <div className="app">
          
            <Navbar />
          
            <Cover />
        
            <Why_us />

            <Test />

    </div>
  );
}

export default App;
