import "./styles/scss/App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="App">
      <Header
        title="Expense Tracker"
        subtitle="Tracking expenses made easy"
      />
      <Form />
      <ExpenseList />
    </div>
  );
}

export default App;
