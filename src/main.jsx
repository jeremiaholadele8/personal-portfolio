import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './About.jsx'
import Projects from './Projects.jsx'
import ProjectDetails from './ProjectDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <About />
    <Projects />
    <ProjectDetails />
  </StrictMode>,
)
