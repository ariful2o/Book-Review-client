import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagestoRead from './components/PagestoRead/PagestoRead.jsx';
import Root from './components/Root/Root.jsx';
import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/BookList",
        element: <ListedBooks />,
        loader:()=>fetch('/books.json')
      },
      {
        path: "/PagestoRead",
        element: <PagestoRead />,
        loader:()=>fetch('/books.json')
      },
      {
        path: "book/:bookId",
        loader:()=>fetch('/books.json'),
        element: <BookDetails />,
      }
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
