import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';

function App() {
  const router=createBrowserRouter([
    {path: "/",element: <Home/>},
    { path: "home",element: <Home/>},
    {path: "about",element: <About></About>},
    {path:"products",element:<Products></Products>}
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
