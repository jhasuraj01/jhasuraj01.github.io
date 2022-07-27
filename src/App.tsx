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
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/programming' element={<Programming />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/links' element={<Links />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
