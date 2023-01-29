import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';

function App() {
  const router=createBrowserRouter([
    {path: "/",
    element: <Main></Main> ,
    children:[
      {path:"/",element:<Home></Home> },
      { path: "home",element: <Home></Home>},
      {path:"products",element:<Products></Products> },
      {
        path:"friends",
        loader: async () => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
        element: <Friends></Friends> 
    },
    {
      path:"/friend/:friendId",
      loader: async ({params}) => {
        console.log(params.friendId);
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
      },
      element: <FriendDetails></FriendDetails>
    },
    {
      path:"/posts",
      loader:async()=>{
        return fetch("https://jsonplaceholder.typicode.com/posts")
      },
      element:<Posts></Posts>
    }
    ]
  },
      {path: "about",element: <About></About> },
      {path: "*",  
       element: <h1>Not found:404</h1> 
      //  <ErrorPage />,errorElement: <ErrorPage />,
      },
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
