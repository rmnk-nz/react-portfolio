import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
  <>
  <Header />
  <Navbar /> 
  <About />
  <Projects />
  <Footer />
  </>
  );
}

export default App;
