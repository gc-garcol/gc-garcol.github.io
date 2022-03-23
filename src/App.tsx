import { BlogPage202203201 } from 'page/blog/20220323-01/BlogPage.2022032-01';
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
          <Route path="blog" >
            <Route index element={ <HomePage/> } ></Route>
            <Route path="20220323-01_understanding-bitwise-operators" element={ <BlogPage202203201/> }></Route>
          </Route>
          <Route path='test' element={ <TestPage/> }></Route>
          <Route path='*' element={ <NotFound/> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
