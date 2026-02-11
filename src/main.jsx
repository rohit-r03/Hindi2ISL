import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts.jsx'

import Header from './components/header/header.jsx';

import Footer from './components/footer/footer.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Home from './components/HomePage/home.jsx';
import About  from './components/about/about.jsx';
import Team from './components/team/team.jsx';

const router = createBrowserRouter([
{
  path:'/',
  element: <Layout/>,
  children:[
    {
      path:"/",
      element : <Home/>
    },
     {
      path:"/dashboard",
      element : <Dashboard/>
    },
     {
      path:"/team",
      element : <Team/>
    },
     {
      path:"/about",
      element : <About/>
    }
 
  ]
}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<RouterProvider router={router}/>
    {/* <Header/>
    <Home/>
    <Dashboard/>
    <Footer/> */}
</>
);



