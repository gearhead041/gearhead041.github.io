import "./App.css";

function App() {
  const date = new Date();
  return (
    <>
      <div className="header">
        <header className="title zen-dots-regular">Adetoun Favour</header>
        <div className="subHeader">
        <p className="jobTitle">Backend Developer</p>
        <p className="date">{date.toDateString()}</p>
        </div>
      </div>
      <div className="blurb">
          Backend developer with experience in building APIs and
          microservices. Passionate about creating scalable and maintainable software
          solutions.
      </div>
    </>
  );
}

export default App;
