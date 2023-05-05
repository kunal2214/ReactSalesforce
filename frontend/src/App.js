import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Opportunity from './Opportunity';



function App() {
  return (
    <div>
      <Header />
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/opportunity"  element={<Opportunity/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
