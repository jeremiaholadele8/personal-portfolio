import shoppulse from './assets/shoppulse.png';
import shoppulse2 from './assets/shoppulse2.png';
import shoppulse3 from './assets/shoppulse3.png';
import shoppulse4 from './assets/shoppulse4.png';

function ProjectDetails() {
  return (
    <article className="wrap detail">
      <h1>ShopPulse</h1>
      <p className="lead">An e-commerce platform made as a scrum project with random team members as a final project on that same internship.</p>
      <p className="links">
        <p><a href="https://byoc-3.github.io/ShopPulse/" target="_blank" rel="noreferrer">Live site ↗</a></p>
        <p><a href="https://github.com/Byoc-3/ShopPulse" target="_blank" rel="noreferrer">Source code ↗</a></p>
      </p>

      <section>
        <h2>The problem</h2>
        <p>The project was made as a result of us needed a short substantial project 
            that was required to be done for us to officially complete our internship 
            requirements. We were also given less than 2 weeks to complete it. 
            We split up all of our work for the project into sections due to the size so 
            I did all the CSS for it</p>
      </section>

      <section>
        <h2>Features</h2>
        <p><code>-Welcoming Dashboard</code></p>
        <p><code>-Product Catalog with image viewing and filtering</code></p>
        <p><code>-Functional Shopping Cart with add/remove items</code></p>
        <p><code>-Checkout page with some form validation</code></p>
        <p><code>-Login/Signup (No backend)</code></p>
      </section>

      <section>
        <h2>Screenshots</h2>
        <div className="shots">
          <img src={shoppulse} alt="Screenshot of ShopPulse" loading="lazy" />
          <img src={shoppulse2} alt="Screenshot of ShopPulse" loading="lazy" />
          <img src={shoppulse3} alt="Screenshot of ShopPulse" loading="lazy" />
          <img src={shoppulse4} alt="Screenshot of ShopPulse" loading="lazy" />
        </div>
      </section>

      <section>
        <h2>Built with</h2>
        <p className="tags" aria-label="Tech stack"><code>
          HTML, 
          CSS, 
          JavaScript
        </code></p>
      </section>

      <section>
        <h2>What I learned</h2>
        <p><code>-Doing Responsive CSS Design</code></p>
        <p><code>-Implementing CSS for innerHTML tags in JavaScript</code></p>
        <p><code>-Working in a SCRUM environment for the first time</code></p>
        <p><code>-Collaboration with different personalities of team members</code></p>
      </section>
    </article>
  )
}

export default ProjectDetails
