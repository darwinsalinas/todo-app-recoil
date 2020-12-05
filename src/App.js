// import logo from './logo.svg';
import "./App.css";

import { RecoilRoot } from "recoil";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import BackgroundLight from './images/bg-desktop-light.jpg'



function App() {
  return (
    <RecoilRoot>
      <div className="App" style={stylesBackground}>
        <TodoForm />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

const stylesBackground = {
  backgroundImage: `url(${BackgroundLight})`,
  backgroundRepeat: 'no-repeat'
}

export default App;
