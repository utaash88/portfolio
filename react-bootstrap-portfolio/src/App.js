import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./App.css"
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Sns from "./components/Sns";

function App() {
  return (
     <Router>
      <div className="App">
        <Header/>
         <Routes>
          <Route path="/" element= { <HomePage /> } />
          <Route path="/sns" element={ <Sns /> } />
        </Routes> 
        
      </div>
     </Router>
    
  );
}

export default App;
