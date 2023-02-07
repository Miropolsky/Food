import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './components/Recipe';

function App() {
    return (
        <>
            <BrowserRouter basename='/food'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/meal/:id' element={<Recipe />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
