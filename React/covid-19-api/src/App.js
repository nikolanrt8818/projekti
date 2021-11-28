import './sass/App.scss';
import Header from './components/Header.js';
import Main from './components/Main.js';


function App() {
  return (
    <div className="App">
      <Header title="COVID-19"/>
      <Main />
    </div>
  );
}

export default App;
