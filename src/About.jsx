import email from './assets/email.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'

function About() {

  return (
    <>
      <section id="about" className="wrap about">
        <h1>
          Hi, I'm Jeremiah Oladele. I build the part of the app you <mark>don't see</mark>.
        </h1>
        <div className="about-grid">
          <div>
            <p><code>- I am a Pan-Atantic University Student, studying Computer Science in my final year.</code></p>
            <p><code>- I play video games and code in my spare time.</code></p>
            <p><code>- I decided that I wanted to become a software developer with a backend focus.</code></p>
            <p><code>- I have built several applications over the years with my time in Computer Science.</code></p>
            <p><code>- I may not have all my projects saved somewhere but I can showcase some that I have worked on.</code></p>
          </div>
        </div>

       <h3>If you would like to reach out to me, you can do so via the links below:</h3>
        <div className="social-links">
          <a
            href="mailto:jrmoladele@gmail.com"
            aria-label="Email Jeremiah"
          >
            <img src={email} alt="Email" />
          </a>

          <a href="https://github.com/jeremiaholadele8">
            <img src={github} alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/jeremiah-oladele-7a2955361">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </section>
    </>
  )
}

export default About
