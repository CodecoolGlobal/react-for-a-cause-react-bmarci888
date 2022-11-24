import whoWeAreImg from '../assets/who-we-are.jpg';
import ourVisionImg from '../assets/our-vision.jpg';
import ourMissionImg from '../assets/our-mission.jpg';
import ourValuesImg from '../assets/our-values.jpg';
import './about.css';

import { motion } from 'framer-motion';

const content = [
  {
    image: whoWeAreImg,
    title: 'Who we are',
    text: 'The Green Belt Movement (GBM) is an environmental organization that empowers communities, particularly women, to conserve the environment and improve livelihoods. GBM was founded by Professor Wangari Maathai in 1977 under the auspices of the National Council of Women of Kenya (NCWK) to respond to the needs of rural Kenyan women who reported that their streams were drying up, their food supply was less secure, and they had to walk further and further to get firewood for fuel and fencing. GBM encouraged the women to work together to grow seedlings and plant trees to bind the soil, store rainwater, provide food and firewood, and receive a small monetary token for their work.',
  },
  {
    image: ourVisionImg,
    title: 'Our Vision',
    text: 'A values-driven society of people who consciously work for continued improvement of their livelihoods and a greener, cleaner world.',
  },
  {
    image: ourMissionImg,
    title: 'Our Mission',
    text: 'We strive for better environmental management, community empowerment, and livelihood improvement using tree-planting as an entry point.',
  },
  {
    image: ourValuesImg,
    title: 'Our Values',
    text: [
      'Love for environment conservation',
      'Self and community empowerment',
      'Volunteerism',
      'Accountability, transparency and honesty',
    ],
  },
];

const About = () => {
  return (
    <div className="aboutContainer">
      <h1>About us</h1>
      <hr className="titleHr" />
      {content.map((item, index) => (
        <AboutItem
          key={item.title}
          src={item.image}
          title={item.title}
          text={item.text}
          direction={index % 2 === 1 ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

const AboutItem = ({ src, title, text, direction }) => {
  const TextArea = () =>
    typeof text === 'string' ? (
      <p>{text}</p>
    ) : (
      <ul>
        {text.map((each) => (
          <li>{each}</li>
        ))}
      </ul>
    );

  return (
    <div className={`aboutItemContainer ${direction}`}>
      <motion.img
        initial={{ opacity: 0, x: direction === 'left' ? -500 : 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src={src}
        alt={title}
      />
      <motion.div
        initial={{ opacity: 0, x: direction === 'left' ? 500 : -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <SubTitle text={title} />
        {TextArea()}
      </motion.div>
    </div>
  );
};

const SubTitle = ({ text }) => {
  return (
    <>
      <h3 className="subTitle">{text}</h3>
      <hr className="subTitleHr" />
    </>
  );
};

export default About;
