import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToolTechNavbar from './Navbar';
import ToolTechFooter from './Footer';
import HomePage from './Components/Homepage';
import {createBrowserHistory} from 'history';
import AboutUsPage from './Components/AboutUs';
import InfrastructurePage from './Components/Infrastructure';
import DesignAndEngineeringPage from './Components/DesignAndEngineering';

const history = createBrowserHistory();
function App() {
  return (
    <Router history = {history}>
    <div className="App">
      <ToolTechNavbar/>
      <Routes>
      <Route exact path='/' Component={HomePage} />
      <Route path='/aboutus' Component={AboutUsPage} />
      <Route path='/infrastructure' Component={InfrastructurePage} />
      <Route path='/design&Engineering' Component={DesignAndEngineeringPage} />
      </Routes>
      <ToolTechFooter/>
    </div>
    </Router>
  );
}

export default App;
