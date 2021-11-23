import './sass/App.scss';
import Header from './components/Header';
import RandomQuote from './components/RandomQuote';

function App() {

  return (
    <div className="App">
      <Header heading="Quotes"/>
      <RandomQuote />
    </div>
  );
}

export default App;
