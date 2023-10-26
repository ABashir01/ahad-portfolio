import logo from './logo.svg';
import './App.css';
import Hero from './components/index-components/Hero';
import Experiences from './components/index-components/Experiences';
import Projects from './components/index-components/Projects';
import Contact from './components/index-components/Contact';
import Header from './components/index-components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Hero />
        <hr />
        <Experiences />
        <hr />
        <Projects />
        <hr />
        <Contact />
      </div>
    </div>
  );
}

export default App;
