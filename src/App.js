import {useState} from 'react'

import { BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import TaskList from "./components/TaskList";
import "./App.css"
import Navbar from "./components/UI/navbar/Navbar";
import MyModal from "./components/UI/modal/MyModal";

function App() {


  
  return (
      <Router className="body">
      
        <Routes>
          <Route path="/todo" element={<TaskList/>}/>
          <Route path="*" element={<Navigate to="/todo"/>}/>
        </Routes>
        
      </Router>


  );
}

export default App;
