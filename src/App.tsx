import { BlogPage2022032301 } from 'page/blog/20220323-01/BlogPage.20220323-01';
import { BlogPage2022032401 } from 'page/blog/20220324-01/BlogPage.20220324-01';
import HomePage from 'page/home/home-page';
import NotFound from 'page/notfound/NotFound';
import TestPage from 'page/test/TestPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/'>
          <Route index element={ <HomePage/> } ></Route>
          <Route path="home" element={ <HomePage/> } ></Route>
          <Route path="blog">
            <Route index element={ <HomePage/> } ></Route>
            <Route path="20220323-01_understanding-bitwise-operators" element={ <BlogPage2022032301/> }></Route>
            <Route path="20220324-01_leetcode_unique-paths" element={ <BlogPage2022032401/> }></Route>
          </Route>
          <Route path='test' element={ <TestPage/> }></Route>
          <Route path='404' element={ <NotFound/> }></Route>
          <Route path='*' element={ <NotFound/> }></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
