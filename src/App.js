//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<StudentList/>}/>
    <Route path="/add" element={<AddStudent/>}/>
    <Route path="/edit/:id" element={<EditStudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
