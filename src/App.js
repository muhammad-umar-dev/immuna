import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Alerts from './pages/Alerts';
import Defend from './pages/Defend';
import Protect from './pages/Protect';
import Dashboard from './pages/Dashboard';
import NoteState from './context/NoteState';

function App() {

  return (

    <NoteState>
      <Router>
        <Routes>
          <Route>
            <Route exact path='/' element={<Login />} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/home' element={<Home />} ></Route>
            <Route exact path='/dashboard' element={<Dashboard />} ></Route>
            <Route exact path='/alerts' element={<Alerts />} ></Route>
            <Route exact path='/defend' element={<Defend />} ></Route>
            <Route exact path='/protect' element={<Protect />} ></Route>
          </Route>
        </Routes>
      </Router>

    </NoteState>
  )
}

export default App;
