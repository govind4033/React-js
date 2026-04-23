import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Home, Contact, About, Header, Footer, Services, TermsAndConditions, Usercomp } from './comp/index.jsx'
import Layout from './HOC/Layout.jsx'

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <Layout/>,
//     children:[
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/Home',
//         element: <Home/>
//       },
//       {
//         path: '/About',
//         element: <About/>
//       },
//       {
//         path: '/Contact',
//         element: <Contact/>
//       },
//       {
//         path: '/Services',
//         element: <Services/>
//       },
//         {
//           path: '/TermsAndConditions',
//           element: <TermsAndConditions/>
//       },
//       {
//         path: '/usercomp',
//         element: <Usercomp/>
//       },
//       {
//         path: '/usercomp/:user',
//         element: <Usercomp/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/TermsAndConditions' element={<TermsAndConditions/>} />
      <Route path='/usercomp' element={<Usercomp/>} />
      <Route path='/usercomp/:user' element={<Usercomp/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
