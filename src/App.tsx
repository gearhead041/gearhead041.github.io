import "./App.css";
import { GitHubLogo, GmailLogo, LinkedInLogo } from "./svg_logos";

function App() {
  const date = new Date();
  return (
    <>
      <div className="header">
        <header className="title">Adetoun Favour</header>
        <div className="subHeader">
          <p className="jobTitle">Backend Developer</p>
          <p className="date">{date.toDateString()}</p>
        </div>
        <div className="logos">
          <GitHubLogo link="https://github.com/gearhead041" />
          <GmailLogo link="mailto:favouradetoun@gmail.com" />
          <LinkedInLogo link="https://www.linkedin.com/in/toluadetoun/"/>
        </div>
      </div>
      <div className="blurb">
        <p>
          Backend developer with experience in building APIs and microservices.
          Passionate about creating scalable and maintainable software
          solutions.
        </p>
      </div>
    </>
  );
}

export default App;
