import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./Component/nabar";
import RecordList from "./Component/recordList";
import Create from "./Component/create";
import Edit from "./Component/edit";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/Edit/:id" element={<Edit />} />
       <Route path="/Create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;