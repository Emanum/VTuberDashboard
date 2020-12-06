import './App.css';

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
          <h3>List of live VTuber</h3>
          <ul>
            <li>VTuber1</li>
            <li>VTuber2</li>
            <li>VTuber3</li>
          </ul>
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
