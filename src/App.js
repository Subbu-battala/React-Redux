import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import Pnf from "./component/Pnf";
import { ToastContainer } from "react-toastify";

function App(){
  return(
    <Router>
      <Menu/>
        <ToastContainer autoClose={4000} position="top-right"  />
       <Routes>
       <Route path={`/`} element={<Home/>} ></Route>
       <Route path={`/create`} element={<Create/>} ></Route>
       <Route path={`/edit/:id`} element={<Update/>} ></Route>
       <Route path={`/*`} element={<Pnf/>} ></Route>
       </Routes>
    </Router>
  )
}

export default App