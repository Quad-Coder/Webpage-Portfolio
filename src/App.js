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
                <h1>About Quad</h1>
              </div>
              <hr></hr>
              <div class="info-text">
                <p>
                  I am Quadrick. /kwad-rik/ I was born in Denton TX and raised
                  in Oakland CA. Between teaching myself how to code
                  independently before attending Thinkful's Software Engineering
                  Program, years of experience in Customer Service and Warehouse
                  knowledge, I believe I will be an asset to any Software
                  Engineer or Web Developer team. I am actively seeking
                  opportunities in the San Francisco Bay Area and anywhere that
                  provides relocation assistence of Remote positions in this
                  tech world.
                </p>
                <p>
                  My interest in Software Engineering are Full-Stack
                  Web-Development, UX/UI Development, JavaScript, Node.js,
                  React, ExpressJS, JQuery, JSON, HTML5, and CSS3.Including
                  learning the MERN and PERN Stacks, I like to learn new skills
                  and information. This incudes ametuar photography with my
                  Canon EOS Rebel T5, watching and analyzing films, and cooking
                  a variaty of meals. I want to break into the tech to improve
                  my quality of life, my families lives and because I believe
                  not only is technology going to become more dominant in the
                  future but also I don't want to be left behind.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="photo-card"></div>
        <div class="photography"></div>
      </main>
    </body>
  );
}

export default App;
