import './App.css';
import { Fragment } from 'react/jsx-runtime';
import { Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import { Archive } from './pages/Archive';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/archive' element={<Archive />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
