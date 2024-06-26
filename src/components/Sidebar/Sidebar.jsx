import { useState } from 'react'
import {motion} from 'framer-motion'
import Links from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton'
import './sidebar.scss'

function Sidebar() {
    const [open, setOpen] =useState(false)

    const variants = {
        open:{
            clipPath: "Circle(1000px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed:{
            clipPath: "Circle(30px at 50px 50px)",
            transition: {
                delay: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
        <motion.div className="bg" variants={variants}>
            <Links setOpen={setOpen}/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar