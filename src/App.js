import logo from './logo.svg';
import './App.css';
import AllpageRout from './Router/AllpageRout';
import Prerequsite from './Pages/Prerequsite';
import Navbar from "./Pages/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllpageRout/>
     {/* <Prerequsite/> */}
    </div>
  );
}

export default App;
