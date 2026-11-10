import { Link, useParams } from 'react-router-dom'

function ProjectDetails() {
  return (
    <article className="wrap detail">
      <Link to="/" state={{ scrollTo: 'projects' }} className="back">← All projects</Link>
      <h1>{p.name}</h1>
      <p className="lead">{p.description}</p>
      <p className="links">
        <a href="https://byoc-3.github.io/ShopPulse/" target="_blank" rel="noreferrer">Live site ↗</a>
        <a href="https://github.com/Byoc-3/ShopPulse" target="_blank" rel="noreferrer">Source code ↗</a>
      </p>

      <section>
        <h2>The problem</h2>
        <p>The project was made as a short project that was required to be done for 
            us to officially complete our internship requirements. We were also 
            given less than 2 weeks to complete it. I did all the CSS for it</p>
      </section>

      <section>
        <h2>Features</h2>
        <code>-Welcoming Dashboard</code>
        <code>-Product Catalog with image viewing and filtering</code>
        <code>-Functional Shopping Cart with add/remove items</code>
        <code>-Checkout page with some form validation</code>
        <code>-Login/Signup (No backend)</code>
      </section>

      <section>
        <h2>Screenshots</h2>
        <div className="shots">
          <img src="shopulse.png" alt="Screenshot of ShopPulse" loading="lazy" />
          <img src="shopulse2.png" alt="Screenshot of ShopPulse" loading="lazy" />
          <img src="shopulse3.png" alt="Screenshot of ShopPulse" loading="lazy" />
          <img src="shopulse4.png" alt="Screenshot of ShopPulse" loading="lazy" />
        </div>
      </section>

      <section>
        <h2>Built with</h2>
        <p> HTML, CSS, JavaScript </p>
      </section>

      <section>
        <h2>What I learned</h2>
        <code>-Doing Responsive CSS Design</code>
        <code>-Implementing CSS for innerHTML tags in JavaScript</code>
        <code>-Working in a SCRUM environment for the first time</code>
        <code>-Collaboration with different personalities of team members</code>
      </section>
    </article>
  )
}

export default ProjectDetails
