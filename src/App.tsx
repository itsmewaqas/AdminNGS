import { useState } from 'react';
import {
  BrowserRouter as Router,
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import Routers from './routes';
import './index.css';
import '../src/assets/css/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HashRouter basename={'/'}>
        <Routers />
      </HashRouter>
    </div>
  )
}

export default App
