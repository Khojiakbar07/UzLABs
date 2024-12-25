import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import BottomNavBar from "./Components/BottomNavBar";

<meta name="viewport" content="width=device-width, initial-scale=1" />

function App() {
  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <main>
        <Outlet/>
        {/* <Home/>  */}
      </main>
       <Footer/>
      <BottomNavBar/>
    </div>
  );
}

export default App;
