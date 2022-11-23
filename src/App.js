import './App.css';
import { ContactForm } from './components/contact';
import WelcomeSection from './components/welcome';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <About />
      <ContactForm />
    </div>
  );
}

export default App;
