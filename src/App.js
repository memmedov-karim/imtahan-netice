import './App.css';
import React from 'react';
import users from './NƏTİCƏLƏR.json';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result'
import NotFound from './Pages/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,

}
from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='mark/:id' element={<Result result={users} />} />
          <Route path='notfound' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
