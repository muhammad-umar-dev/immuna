import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  const islogedin = true;
  const user = 'cipherSavvy';
  return (
    <>
      <Router>
        {/* <Home /> */}
        <Routes>
          <Route>
            <Route exact path='/' element={<Home islogedin={islogedin} user={user} />} ></Route>
            <Route exact path='/dashboard' element={<Dashboard islogedin={islogedin} user={user} />} ></Route>
          </Route>
        </Routes>
      </Router>
      {console.log("app.js ", islogedin, user)}

    </>
  )
}

export default App;
