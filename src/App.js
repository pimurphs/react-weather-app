import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="mt-3">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/filipadaguiarrodrigues/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Filipa Rodrigues
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/pimurphs/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
