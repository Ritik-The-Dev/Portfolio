import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Navbar } from "./components";

// Route-based code splitting - each page loads only when navigated to
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Lightweight page loading skeleton
const PageLoader = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin' />
  </div>
);

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                  <Suspense fallback={null}>
                    <Footer />
                  </Suspense>
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
