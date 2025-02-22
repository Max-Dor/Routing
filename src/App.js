import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Movie } from './pages/Movie';
import { NotFound } from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header/>
        <main className='container content'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contacts' element={<Contact/>} />
              <Route path='/movie/:id' element={<Movie/>} />              
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </main>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
