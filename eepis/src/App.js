import './App.css';
import Header from './component/header.js';
import Icon from './component/menuIcon.js';

function App() {
  return (
    <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Icon/>
        </main>
    </div>
  );
}

export default App;
