import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStacks from './components/TechStacks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-stack-sans bg-primary-dark text-light-text min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <TechStacks />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;