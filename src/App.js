import Weather from "./Weather";
// import videoFile from "./pink-bg.mp4";

import "./App.css";

function App() {
  return (
    <div className="App shadow-lg">
      <Weather defaultCity={"Bridgetown"} />
      <footer className="text-center">
        Coded with <span className="emojiColor">♥️</span> by{" "}
        <a
          href="https://monumental-malasada-41cd9f.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Mariama Touray
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/touraymk/sky-cast"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
