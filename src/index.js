import React, { lazy, Suspense } from "react";

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css';
import App from './App';

//component
const Home = lazy(() => (import("./components/home")))
const Error = lazy(() => (import("./components/error")))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        )
      },
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
