import '../../App.css';
import './projects.css';
import { motion } from 'framer-motion';

import Forecast from '../../assets/projects-gif/Forecast.gif';
import Consumed from '../../assets/projects-gif/Consumed.gif'
import ToDoList from '../../assets/projects-gif/Todo List.gif';
import KeyPiano from '../../assets/projects-gif/KeyboardPiano.gif';
import SoundsReal from '../../assets/projects-gif/SoundsReal.gif';
import ComfySite from '../../assets/projects-gif/ComfySite.gif';
import CaloriesCalc from '../../assets/projects-gif/CaloriesCalculator.gif';

const projects = [
  { img: Forecast, link: 'https://phadda94.github.io/forecast/', title: 'Forecast' },
  { img: ToDoList, link: 'https://phadda94.github.io/Todo%20List/', title: 'ToDo List' },
  { img: Consumed, link: 'https://anvil-of-echoes.itch.io/consumed', title: 'Horror WebGame' },
  { img: CaloriesCalc, link: 'https://phadda94.github.io/CaloriesCalculator/', title: 'Calories Calculator' },
  { img: SoundsReal, link: 'https://soundsreal.itch.io/', title: 'Sounds Real' },
  { img: ComfySite, link: 'https://phadda94.github.io/Comfy_Site/', title: 'Comfy Site' },
  { img: KeyPiano, link: 'https://phadda94.github.io/keyboardPiano/', title: 'Keyboard Piano' },
];

export default function Projects() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      <ul className="projects-grid">
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} aria-label={`${project.title}${project.sourceOnly ? ": source code on GitHub" : ": open project"}`} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
            </a>
          </li>  
        ))}
      </ul>
    </motion.div>
    </>
  );
}
