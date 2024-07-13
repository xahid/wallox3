

import Header from './components/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: '/project',
    element: <Project/>
  },
  {
    path: '/team',
    element: <Team/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  },
  
  ]);
  
  

function App() {

  return (
    <>
    <Header/>
       <RouterProvider router={router} />
    <Footer/>
    </>
  )
}

export default App
