import './App.css';
import Header from './component/header.js';
import Icon from './component/menuIcon.js';
import Information from './component/information.js';

function App() {
  return (
    <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Icon/>
          <Information/>
        </main>
    </div>
  );
}

export default App;
