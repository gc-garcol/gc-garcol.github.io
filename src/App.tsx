import HomePage from 'page/home/home-page';
import NotFound from 'page/notfound/NotFound';
import TestPage from 'page/test/TestPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={ <HomePage/> } ></Route>
          <Route path='test' element={ <TestPage/> }></Route>
          <Route path='*' element={ <NotFound/> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
