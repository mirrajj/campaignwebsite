import Nav from "./Nav";
import Home from "./Home";
import Hero from "./Hero";
import Footer from "./Footer";
import Home01 from "./Home01";

function App() {
  return (
    <div className="App">

      <Nav />
      <Hero />
      <Home />
      {/* second part of the Landing page */}
      <Home01 />
      <Footer />
      
    </div>
  );
}

export default App;
