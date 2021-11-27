import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/Dashboard';
import Products from './pages/Assessments';
import Users from './pages/Students';
import CreateSO from './pages/CreateSO';
import Orders from './pages/SO';
import UserDetails from './pages/CreateStudent';
import CreateAssessment from './pages/CreateAssessment';
import NotFound from './pages/Page404';
import Test from './pages/Test';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'test', element: <Test /> },
        { path: 'users', element: <Users /> },
        { path: 'users/details', element: <UserDetails /> },
        { path: 'products', element: <Products /> },
        { path: 'orders', element: <Orders /> },
        { path: 'products/create', element: <CreateAssessment /> },
        { path: 'orders/create', element: <CreateSO /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
