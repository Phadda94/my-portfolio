import '../../App.css';
import './projects.css';

import KeyPiano from '../../assets/projects-gif/KeyboardPiano.gif';
import ToDoList from '../../assets/projects-gif/Todo List.gif';
import SoundsReal from '../../assets/projects-gif/SoundsReal.gif';
import ComfySite from '../../assets/projects-gif/ComfySite.gif';
import CaloriesCalc from '../../assets/projects-gif/CaloriesCalculator.gif';

export default function Projects() {
  return(
    <>
    <h2>Projects I've worked on</h2>
    <ul>
      <li><img src={KeyPiano}/></li>
    </ul>
    </>
  )
}