import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BottomNavBar from "./Components/BottomNavBar";
import Home from "./Components/home/Home";
import NotFound from "./Components/not-found/NotFound";
import Profile from "./Components/profile/Profile";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

<meta name="viewport" content="width=device-width, initial-scale=1" />

function App() {
  return (
    <Router>
      <Navbar />
      {/* Main Content */}
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer/>
      <BottomNavBar/>
    </Router>
  );
}

export default App;





// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">


//         {/* Main Content */}
//         <div className="container mx-auto py-8 px-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

