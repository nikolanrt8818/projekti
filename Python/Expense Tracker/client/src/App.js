import "./styles/scss/App.scss";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header
        title="Expense Tracker"
        subtitle="Tracking expenses made easy"
      />
      <Form />
    </div>
  );
}

export default App;
