import '../../App.css';
import './projects.css';
import { motion } from 'framer-motion';

import KeyPiano from '../../assets/projects-gif/KeyboardPiano.gif';
import ToDoList from '../../assets/projects-gif/Todo List.gif';
import SoundsReal from '../../assets/projects-gif/SoundsReal.gif';
import ComfySite from '../../assets/projects-gif/ComfySite.gif';
import CaloriesCalc from '../../assets/projects-gif/CaloriesCalculator.gif';

const projects = [
  { img: ToDoList, link: 'https://federico.world/Todo%20List/', title: 'ToDo List' },
  { img: CaloriesCalc, link: 'https://federico.world/CaloriesCalculator/', title: 'Calories Calculator' },
  { img: SoundsReal, link: 'https://soundsreal.itch.io/', title: 'Sounds Real' },
  { img: ComfySite, link: 'https://federico.world/Comfy_Site/', title: 'Comfy Site' },
  { img: KeyPiano, link: 'https://federico.world/keyboardPiano/', title: 'Keyboard Piano' },
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
            </a>
          </li>  
        ))}
      </ul>
    </motion.div>
    </>
  );
}
