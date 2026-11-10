import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section id="projects" className="wrap">
      <h2>Things I've built</h2>
      <ul className="project-list">
        <li key="js-logic-component" className="project1">
        <img src="js-logic-component.png" alt="Screenshot of JS Logic Component" loading="lazy" />
        <div>
            <span className="num">1</span>
            <h3>JS Logic Component</h3>
            <p>This component was made as a task during my internship at a tech company.</p>
            <ul className="tags" aria-label="Tech stack">
            HTML, CSS, JavaScript
            </ul>
            <p className="links">
            <Link to="https://github.com/jeremiaholadele8/js-logic-rating-component" target="_blank" rel="noreferrer">
                The GitHub Repo →
            </Link>
            <a href="https://jeremiaholadele8.github.io/js-logic-rating-component" target="_blank" rel="noreferrer">Live site ↗</a>
            </p>
        </div>
        </li>

        <li key="ShopPulse" className="project2">
        <img src="shopulse.png" alt="Screenshot of ShopPulse" loading="lazy" />
        <div>
            <span className="num">2</span>
            <h3>ShopPulse</h3>
            <p>An e-commerce platform made as a scrum project with random team members as a final project on that same internship.</p>
            <ul className="tags" aria-label="Tech stack">
            HTML, CSS, JavaScript
            </ul>
            <p className="links">
            <Link to="https://github.com/Byoc-3/ShopPulse" target="_blank" rel="noreferrer">
                The GitHub Repo →
            </Link>
            <a href="https://byoc-3.github.io/ShopPulse/" target="_blank" rel="noreferrer">Live site ↗</a>
            </p>
        </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
