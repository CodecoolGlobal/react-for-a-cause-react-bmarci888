import './App.css';
import { ContactUs } from './components/contact';
import WelcomeSection from './components/welcome';
import About from './components/about';
import Donation from './components/donation';

function App() {
  return (
    <div className="App">
      <WelcomeSection />
      <About />
      <div id="donation" />
      <Donation />
      <ContactUs />
    </div>
  );
}

export default App;
