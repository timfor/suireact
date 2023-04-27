import { Routes, Route } from 'react-router-dom';


// styles
import './App.css';


// pages
import { Homepage } from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout"


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Homepage />} >
          <Route index element={<p>index elem</p>} />
          <Route path="homepage" element={<p>index elem</p>} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/layout' element={<Layout />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
