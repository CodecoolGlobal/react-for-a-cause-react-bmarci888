import './welcome.css';
import welcomeImg from '../assets/welcome.jpg';

const WelcomeSection = () => {
  return (
    <div className="welcomeConatiner">
      <div className="welcomeImageContainer">
        <img src={welcomeImg} alt="tree" />
      </div>
      <p>
        "When we plant trees, we plant the seeds of peace and hope"
        <br />
        by Wangari Maathai
      </p>
      <a href="#donate">Donate</a>
    </div>
  );
};

export default WelcomeSection;
