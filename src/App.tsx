import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Signup from './pages/Signup';
import MainLayout from './layout/MainLayout';
import Login from './pages/Login';

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
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
