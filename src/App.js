import Todo from './components/Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Learn SQL' />
      <Todo text='Learn NextJS' />
    </div>
  );
}

export default App;
