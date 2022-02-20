import "./App.css";

function App() {
  return (
    <body>
      <header class="profile-header wrap-primary-plan">
        <div class="Header-container">
          <div class="home-profile-img">
            <img src="home_portrait.jpg" alt="Quadrick"></img>
          </div>
          <div class="col-md-8">
            <h1>Quadrick Reeder</h1>
            <h2>Full-Stack Software Developer</h2>
            <div class="profile-header-btns text-center">
              <a
                href="https://www.linkedin.com/in/quadrick-reeder-538437207/"
                class="hidden-print btn btn-ar btn-info button-glow button-rounded button-raised btn-lg"
              >
                <i class="fa fa-linkedin"></i>" LinkedIn"
              </a>
              <a
                href="https://github.com/Quad-Coder"
                class="hidden-print btn btn-ar btn-info button-glow button-rounded button-raised btn-lg"
              >
                <i class="fa fa-github"></i>" GitHub"
              </a>
              <a
                href="#contact"
                class="hidden-print btn btn-ar btn-danger button-glow button-rounded button-raised btn-lg"
              >
                <i class="fa fa-envelope-o"></i>" Contact"
              </a>
            </div>
          </div>
        </div>
      </header>
      <main></main>
    </body>
  );
}

export default App;
