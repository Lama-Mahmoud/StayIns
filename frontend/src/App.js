import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/login";
import Add from "./pages/admin/addStay";
import Guest from "./pages/Guest";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="Admin" element={<Login/>}/>
        <Route path="Admin/Add" element={<Add/>}/>
        <Route path="Guest" element={<Guest/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
