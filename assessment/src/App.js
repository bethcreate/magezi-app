import './App.css';
import './register';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/register/Register';
import AssignChores from './components/Assign/Assign';
import LogIn from './components/login/Login';
import TaskList from './components/assignedTask/taskList';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Route exact path="/LandingPage" >
        <LandingPage/>

      </Route>
      <Route exact path="/Register">
      
        <Register/>
       
      </Route>
      <Route exact path="/Login" >
      <LogIn/>

      </Route>

      <Route exact path="/Assign" >
      <AssignChores/>

      </Route>

      <Route exact path="/taskList" >
        <TaskList/>
      </Route>
    
    </div>
    </Router>  
  );

}
export default App;

