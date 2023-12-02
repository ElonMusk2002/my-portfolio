import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Experience = React.lazy(() => import('./components/Experience'));
const Feedbacks = React.lazy(() => import('./components/Feedbacks'));
const Hero = React.lazy(() => import('./components/Hero'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Works = React.lazy(() => import('./components/Works'));
const Footer = React.lazy(() => import('./components/Footer'));
const StarsCanvas = React.lazy(() => import('./components/canvas/Stars.jsx'));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Navbar...</div>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Hero...</div>}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Experience...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Works...</div>}>
          <Works />
        </Suspense>
        <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Feedbacks...</div>}>
          <Feedbacks />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Contact...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading StarsCanvas...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
        <Suspense fallback={<div className='flex justify-center items-center h-screen text-lg text-gray-600'>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
