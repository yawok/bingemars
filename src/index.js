import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/ErrorPage';
import LatestPhotos from './pages/LatestPhotos';
import ComingSoon from './pages/ComingSoon';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      }, {
        path: 'latest-photos/',
        element: <LatestPhotos />
      }, {
        path: 'curiosity',
        element: <ComingSoon />
      }, {
        path: 'perseverance',
        element: <ComingSoon />
      }, {
        path: 'opportunity',
        element: <ComingSoon />
      }, {
        path: 'spirit',
        element: <ComingSoon />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
