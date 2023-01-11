import "./App.css";
import Header from "../src/components/header.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2>About me</h2>
        <p>I'm a web developer and designer. I love building beautiful and functional websites.</p>
      </main>
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

export default App;
