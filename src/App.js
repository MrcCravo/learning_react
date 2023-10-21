import './App.css';
import logo from './imagens/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-reader">
        <div className="logo">
          <img src={logo} alt="Logo do Alura Books"></img>
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
