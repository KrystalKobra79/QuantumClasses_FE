import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/App.scss';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import Courses_Offered from './components/Courses/Courses_Offered.jsx';
import About_Page from './components/About/About_Page.jsx';
import NotFoundPage from './components/ErrorPage/NotFoundPage.jsx';

const my_router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/courses_offered", element: <Courses_Offered/>},
  {path: "/contact", element: <Contact/>},
  {path: "/about_page", element: <About_Page/>},
  {path: "*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={my_router}/>
  </StrictMode>,
);
