import React, { Suspense } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Loader } from './components/loader/Loader';

const Home = React.lazy(() => import("./pages/Home/Home"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const Programming = React.lazy(() => import("./pages/Programming"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Links = React.lazy(() => import("./pages/Links/Links"));
const Page404 = React.lazy(() => import("./pages/404/404"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
        <Route path='/gallery' element={<Suspense fallback={<Loader/>}><Gallery /></Suspense>} />
        <Route path='/programming' element={<Suspense fallback={<Loader/>}><Programming /></Suspense>} />
        <Route path='/projects' element={<Suspense fallback={<Loader/>}><Projects /></Suspense>} />
        <Route path='/links' element={<Suspense fallback={<Loader/>}><Links /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Loader/>}><Page404 /></Suspense>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
