import logo from './logo.svg';
import './App.css';
import ListPhones from './components/ListPhones';
import Phone from './components/PhoneCard';
import DetailsPage from './components/DetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <h1 >The Phone Cave</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPhones />} />
          <Route path="/:id" element={<DetailsPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
