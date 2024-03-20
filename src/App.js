import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MakeAppointment from "./pages/AddAppointmentPage.jsx";


function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/NewAppointment" element={<MakeAppointment />} />
        </Routes>
      </Router>


    </div>


  );

}

export default App;