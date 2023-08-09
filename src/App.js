import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import Pnf from "./component/Pnf";

function App(){
  return(
    <Router>
      <Menu/>
       <Routes>
       <Route path={`/`} element={<Home/>} ></Route>
       <Route path={`/create`} element={<Create/>} ></Route>
       <Route path={`/update`} element={<Update/>} ></Route>
       <Route path={`/*`} element={<Pnf/>} ></Route>
       </Routes>
    </Router>
  )
}

export default App