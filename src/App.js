import './App.css';
import VideoContainer from './components/VideoContainer.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vtuber Dashboard</h1>
      </header>
      <main>
        <nav>
          <ul>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
          </ul>
        </nav>
        <article>
            <h2>List of live VTuber</h2>
            <VideoContainer json={"data/hololive.json"}/>
            <VideoContainer json={"data/nijisanji.json"}/>
        </article>
        <aside>
          <ul>
            <li>Side1</li>
            <li>Side2</li>
            <li>Side3</li>
          </ul>
        </aside>
      </main>
      <footer>
        <h4>Footer text</h4>
      </footer>
    </div>
  );
}

export default App;
