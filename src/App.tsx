import { Outlet } from "react-router";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;
