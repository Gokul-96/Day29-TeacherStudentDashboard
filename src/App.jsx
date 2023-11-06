import React from 'react';
import {Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TeachComponent from './Components/TeachComponent';
import AddUser from './Components/AddUser';
import UserComponent from './Components/UserComponent';
import AddTeach from './Components/AddTeach';
import { data } from './Data/Student';
import { staff } from './Data/Teacher';
import { useState } from 'react';
import  Nopage  from './Components/NoPage';
import UserDetails  from './Components/UserDetails';
import  TeachDetails  from './Components/TeachDetails';
import  EditUser  from './Components/EditUser';
import  EditTeach  from './Components/EditTeach';

import picture from './image/stud-teacher.jpg';

function App() {
  const [user, setUser] = useState(data);
  const [teach, setTeach] = useState(staff);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/Student" element={<UserComponent user={user} setUser={setUser} />} />
          <Route path="/Teacher" element={<TeachComponent teach={teach} setTeach={setTeach} />} />
          <Route path="/add/user" element={<AddUser user={user} setUser={setUser} />} />
          <Route path="/add/teach" element={<AddTeach teach={teach} setTeach={setTeach} />} />
          <Route path="/edit/:id" element={<EditUser user={user} setUser={setUser} />} />
          <Route path="/edits/:id" element={<EditTeach teach={teach} setTeach={setTeach} />} />
          <Route path="/user/:id" element={<UserDetails user={user} />} />
          <Route path="/teach/:id" element={<TeachDetails teach={teach} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    
      <div className="image-container">
  <img src={picture} alt="StudentTeacher" className="centered-image" />
</div>
    </div>
  );
}

function Home() {
  return (
    <div className="nav-styles">
      <span>
        <Link to="/Student" className="nav-btn">
          Student
        </Link>
      </span>
      <span>
        <Link to="/Teacher" className="nav-btn">
          Teacher
        </Link>
      </span>
     
    </div>
  );
}


export default App;