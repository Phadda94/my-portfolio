import FedericoPhoto from '../../assets/federico.nocornice.svg';
import './federico-photo.css'
import { motion } from 'framer-motion';


export default function Federico() {
  return (
    <div className='federico-container'>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      <img className='federico-photo' alt='' src={FedericoPhoto}></img>
      </motion.div>
    </div>
  )
}