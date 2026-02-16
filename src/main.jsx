import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Education from './Components/Education/Education.jsx'
import Project from './Components/Projects/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Resume from './Components/Resume/Resume.jsx'
import Edgecase from './Components/Edgecase.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='education' element={<Education />} />
      <Route path='project' element={<Project />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='resume' element={<Resume />} />
      {/* 404 */}
      <Route path='*' element={<Edgecase />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)