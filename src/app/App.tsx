import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Signup from '../pages/Signup/Signup';
import MainLayout from './layouts/MainLayout';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h1>찾을 수 없는 페이지</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <div>Dashboard Page</div> },
      { path: 'ranking', element: <div>Ranking Page</div> },
    ],
  },
  {
    children: [
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Login /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
