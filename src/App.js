import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Ipssi } from "./components/Ipssi";
import { Projects } from "./components/Projects";
import { Veilles } from "./components/Veilles";
import SIO from './components/SIO';
import { Competence } from './components/Competence';
import { Entreprise } from './components/Entreprise';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Ipssi />
      <Projects />
      <Veilles />
      <SIO />
      <Competence />
      <br></br>
      <br></br>
      <Entreprise />
    </div>
  );
}

export default App;
