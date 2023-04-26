import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
// styles
import './App.css';

// pages
import { Homepage } from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from './components/Layout';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
