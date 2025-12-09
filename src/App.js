// استيراد مكتبات CSS
import './assets/font/flaticon_ticstube.css';
import './assets/vendor/bootstrap/bootstrap.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/animate-wow/animate.min.css';

// استيراد CSS الخاص بالمشروع
import './assets/css/style.css';
import './assets/css/dark.css';

import { Routes, Route } from "react-router-dom";

import Nav from './components/movies/Nav';
import Hero from './components/movies/Hero';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';
import HeroHome from './components/home/HeroHome';
import Top10Movies from './components/home/Top10Movies';
import Footer from './components/Footer';
import About from './components/about/About';
import Price from './components/price/Price';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Nav />
    

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route 
          path="/" 
          element={
            <>
            <HeroHome/>
            <Top10Movies/>
              <Movies />
            <About   />
              <Contact />
          
            
            </>
          } 
        />
        <Route 
          path="/About" 
          element={
            <>
            <Hero  path="About" />
            <About   />
          
            
            </>
          } 
        />
        <Route 
          path="/Price" 
          element={
            <>
            <Hero />
            <Price path="Price"/>
          
            
            </>
          } 
        />
        <Route 
          path="/Contact" 
          element={
            <>
              <Hero path="Contact Us"/>
              <Contact />
            </>
          } 
        />
        <Route 
          path="/Movie" 
          element={
            <>
              <Hero path="Movie"/>
              <Movies />
            </>
          } 
        />

        {/* صفحة تفاصيل الفيلم */}
        <Route path="/MovieDetails/:id" element={
          <>
          <Hero path="MovieDetails"/>
        <MovieDetails />
        </>
        }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
