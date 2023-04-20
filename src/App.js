import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Ipssi } from "./components/Ipssi";
import { Projects } from "./components/Projects";
import { Veilles } from "./components/Veilles";
import { Footer } from "./components/Footer";
import SIO from './components/SIO';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Ipssi />
      <Projects />
      <Veilles />
      <SIO />
      <Footer />
    </div>
  );
}

export default App;
