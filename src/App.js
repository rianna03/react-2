// import logo from './logo.svg';
// import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Navbar from './components/Navbar';
import Login from './components/Login';
import GetAllstudents from './components/GetAllstudents';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';


function App() {
  return (
    <div className="App">
        <Router>
      <div className="App">
       <Navbar></Navbar>
      <div className='content'>
       <Switch>

         <Route path="/login">
          <Login></Login>
         </Route>

         <Route path="/addStudent">
          <AddStudent></AddStudent>
         </Route>

         <Route path="/getAllStudents">
          <GetAllstudents></GetAllstudents>
         </Route>

         <Route path="/updateStudent/:_id">
          <UpdateStudent></UpdateStudent>
         </Route>

         <Route path="/deleteStudent/:_id">
          <DeleteStudent></DeleteStudent>
         </Route>
        
       </Switch>
      </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
