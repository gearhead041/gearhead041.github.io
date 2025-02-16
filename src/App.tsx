import { useEffect, useRef } from "react";
import "./App.css";
import {
  GitHubLogo,
  GmailLogo,
  GraphqlLogo,
  LinkedInLogo,
  NestJsLogo,
  NodeJsLogo,
  PythonLogo,
  TypeScriptLogo,
} from "./svg_logos";

//TODO create components for the programming languages and frameworks with logos
// add lost of projects -> conduit, graphql, food delivery app in .NET,

function App() {
  const date = new Date();
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.innerHTML += scrollRef.current.innerHTML; // Duplicate content
    }
  }, []);

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
          <LinkedInLogo link="https://www.linkedin.com/in/toluadetoun/" />
        </div>
      </div>
      <div className="blurb">
        <p>
          Backend developer with experience in building APIs and microservices.
          Passionate about creating scalable and maintainable software
          solutions.
        </p>
      </div>
      <div className="header skills">
        Skills/TechStack
      </div>
      <div className="scrollContainer">
        <div className="scrollContent" ref={scrollRef}>
          <NestJsLogo size={64} />
          <TypeScriptLogo size={64} />
          <NodeJsLogo size={64} />
          <PythonLogo size={64} />
          <GraphqlLogo size={64} />
        </div>
      </div>
    </>
  );
}

export default App;
