import {createBrowserRouter , RouterProvider } from 'react-router-dom' ;
import RootLayout from './pages/RootLayout.jsx' ;
import ErrorPage from './pages/ErrorPage.jsx' ;
import Home from './pages/Home.jsx' ;
import About from './pages/About.jsx' ;
import Contact from './pages/Contact.jsx' ;

function App() {
  //--------------------------------------------/ routes
  const router = createBrowserRouter([
    {path: '/' , element : <RootLayout/>  , errorElement : <ErrorPage/> ,children:[
        {index : true , element : <Home/> },
        {path: 'about', element : <About />},
        {path: 'contact', element : <Contact/>},
        ]
      }
    ]
  )
  //----------------------------------------------------/
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App
