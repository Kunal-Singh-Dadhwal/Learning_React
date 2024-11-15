import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Home, About, Contact, User, Github} from "./components/index.js";
import { githubinfoloader } from "./components/Github/Github.jsx";

// Another Way to Declare the router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       }, {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route path="" element={ <Home />} />
      <Route path="about" element={ <About />} />
      <Route path="contact" element={ <Contact />} />
      <Route
        loader={githubinfoloader}
        path="github/:username?"
        element={<Github />} />
      <Route path="user/:userid" element={<User />} />
    </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
