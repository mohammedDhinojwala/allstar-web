import { useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import './App.css';
import './assets/fonts/fonts.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Work from './components/Work';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Planetglass from './components/projects/Planetglass';
import MusicPlayer from './components/MusicPlayer';
import TempaFlorida from './components/locations/TempaFlorida';
import Practise from './components/locations/Practise';
import HowtoCreateYourPersonalWebsiteBeforeCollegeApps from './components/Blog/HowtoCreateYourPersonalWebsiteBeforeCollegeApps';
import BlogMain from './components/Blog/BlogMain';
import WebGrowth from './components/Blog/WebGrowth';
import BestCMSForSeoIn2025 from './components/Blog/BestCMSForSeoIn2025';


const PageLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const HomeLayout = () => (
  <>
    <Home />
    <Footer />
  </>
);

function App() {
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
    },
    {
      element: <PageLayout />,
      children: [
        { path: '/work', element: <Work /> },
        { path: '/about', element: <About /> },
        { path: '/contacts', element: <Contacts /> },
        { path: '/planetglass', element: <Planetglass /> },
        { path: '/tempa-florida', element: <TempaFlorida /> },
        { path: '/practise', element: <Practise /> },
        { path: '/blog', element: <BlogMain /> }, // FIXED ROUTE
        { path: '/web-growth', element: <WebGrowth /> },
        { path: '/how-to-create-your-personal-website-before-college-apps', element: <HowtoCreateYourPersonalWebsiteBeforeCollegeApps/>  },
        { path: '/Best-CMS-for-seo-in-2025', element: <BestCMSForSeoIn2025 />  }
       
      ],
    },
  ]);

  return (
    <>
      <MusicPlayer />
      <div ref={scrollWrapperRef} id="smooth-wrapper" className="overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
