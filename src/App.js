import './App.css';
import { ContactForm } from './components/contact';
import WelcomeSection from './components/welcome';
import About from './components/about';
import Donation from './components/donation';

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <About />
      <Donation />
      <ContactForm />
    </div>
  );
}

export default App;
