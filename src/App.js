import "./App.css";
import "./App.html";

function App() {
  return (
    <body>
      <header class="profile-header wrap-primary-plan">
        <div class="Header-container">
          <div class="home-profile-img">
            <img src="home_portrait.jpg" alt="Quadrick" class="center"></img>
          </div>
          <div class="col-md-8">
            <h1>Quadrick Reeder</h1>
            <h2>Full-Stack Software Developer</h2>
            <div class="profile-header-btns text-center">
              <a
                href="https://www.linkedin.com/in/quadrick-reeder-538437207/"
                class="hidden-print btn btn-ar btn-info button-glow button-rounded button-raised btn-lg"
              >
                <i class="fa fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/Quad-Coder"
                class="hidden-print btn btn-ar btn-primary button-glow button-rounded button-raised btn-lg"
              >
                <i class="fa fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="about" class>
          <div class="info-card accent-border">
            <div class="info-body flex">
              <div class="info-title">
                <h1>Who Am I</h1>
              </div>
              <hr></hr>
              <div class="info-text">
                <p>
                  I am a Full Stack Developer with a background in customer
                  service and warehouse production. I like to learn new skills
                  and information and don’t like to be stagnant. In previous
                  years of customer service, I learned this about myself. I want
                  to break into the tech industry because I believe technology
                  is only going to become more dominant in the future.
                  Interested in opportunities to apply my training and
                  experience to support appropriate teams.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
