import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.tsx';
import {Admin, Parents, Student, Teacher} from './components/UserType/index.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/parents" element={<Parents />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/teacher" element={<Teacher />} />
    </Route>
  )
);

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}
