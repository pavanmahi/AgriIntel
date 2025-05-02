import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Upload />
      <About />
      <Footer />
    </div>
  );
}

export default App;
