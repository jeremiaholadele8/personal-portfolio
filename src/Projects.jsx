import jslogiccomponent from './assets/jslogiccomponent.png';
import shoppulse from './assets/shoppulse.png';

function Projects() {
  return (
    <article className="wrap about">
      <h1>Projects</h1>
      <ul className="project-list">
        <div>
            <span className="num">Number 1</span>

            <div classname="screen">
              <img src={jslogiccomponent} alt="Screenshot of JS Logic Component" loading="lazy" />
            </div>

            <h3>JS Logic Component</h3>
            <p>This component was made as a task during my internship at a tech company.</p>
            <p className="tags" aria-label="Tech stack"><code>
              HTML, 
              CSS, 
              JavaScript
            </code></p>
            <p className="links">
              <p><a href="https://github.com/jeremiaholadele8/js-logic-rating-component" target="_blank" rel="noreferrer">The GitHub Repo ↗</a></p>
              <p><a href="https://jeremiaholadele8.github.io/js-logic-rating-component" target="_blank" rel="noreferrer">Live site ↗</a></p>
            </p>
        </div>

        <section>
          <span className="num">Number 2</span>

          <div classname="screen">
            <img src={shoppulse} alt="Screenshot of ShopPulse" loading="lazy" />
          </div>
          
          <h3>ShopPulse</h3>
          <p>An e-commerce platform made as a scrum project with random team members as a final project on that same internship.</p>
          <p className="tags" aria-label="Tech stack"><code>
            HTML, 
            CSS, 
            JavaScript
          </code></p>
          <p className="links">
            <p><a href="https://github.com/Byoc-3/ShopPulse" target="_blank" rel="noreferrer">The GitHub Repo ↗</a></p>
            <p><a href="https://byoc-3.github.io/ShopPulse/" target="_blank" rel="noreferrer">Live site ↗</a></p>
          </p>
        </section>
      </ul>
    </article>
  )
}

export default Projects
