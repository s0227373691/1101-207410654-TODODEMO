import Todo_54 from './components/Todo_54'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo_54 text='Learn React' />
      <Todo_54 text='Learn SQL' />
      <Todo_54 text='Learn NextJS' />
    </div>
  );
}

export default App;
