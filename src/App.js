// import logo from './logo.svg';
import "./App.css";

import { RecoilRoot } from "recoil";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>TODO</h1>
        <TodoForm />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
