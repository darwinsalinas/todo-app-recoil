// import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'

import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        TODO
        <TodoForm />
      </div>
    </RecoilRoot>
  );
}

export default App;
