import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Login from './pages/Login';
import Analysis from './pages/Analysis';
import Dashboard from './pages/Dashboard';
import NoteState from './context/NoteState';
import Signup from './pages/SignUp';

function App() {

  return (

    <NoteState>
      <Router>
        <Routes>
          <Route>
            <Route exact path='/' element={<Login />} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/dashboard' element={<Dashboard />} ></Route>
            <Route exact path='/analysis' element={<Analysis />} ></Route>
            <Route exact path='/signup' element={<Signup />} ></Route>
          </Route>
        </Routes>
      </Router>

    </NoteState>
  )
}

export default App;
