import React, { Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

const Home = React.lazy(() => import("./pages/Home/Home"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Programming = React.lazy(() => import("./pages/Programming"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Suspense><Home /></Suspense>} />
        <Route path='/gallery' element={<Suspense><Gallery /></Suspense>} />
        <Route path='/programming' element={<Suspense><Programming /></Suspense>} />
        <Route path='/projects' element={<Suspense><Projects /></Suspense>} />
        <Route path='/contact' element={<Suspense><Contact /></Suspense>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
