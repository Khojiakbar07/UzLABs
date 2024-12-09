import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <main>
        <About/>
        <Services/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
