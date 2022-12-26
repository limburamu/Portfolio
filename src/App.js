import "./index.css";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  )
}

export default App;
