import './App.css';
import Header from './component/header.js';
import Icon from './component/menuIcon.js';
import Information from './component/information.js';
import Banner from './component/infoCarousel.js';
import Widget from './component/widget.js';
import Footer from './component/footer.js';

function App() {
  return (
    <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Icon/>
          <Information/>
          <Banner/>
          <Widget/>
          <Footer/>
        </main>
    </div>
  );
}

export default App;
