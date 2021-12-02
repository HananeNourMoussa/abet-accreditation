import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import CourseLayout from './layouts/course';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/Dashboard';
import SO from './pages/SO';
import Students from './pages/Students';
import CreateSO from './pages/CreateSO';
import Assessments from './pages/Assessments';
import CreateStudent from './pages/CreateStudent';
import DetailsStudent from './pages/StudentDetails';
import CreateAssessment from './pages/CreateAssessment';
import DetailsAssessments from './pages/AssessmentDetails';
import DetailsSO from './pages/SODetails';
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
      ]
    },
    {
      path: '/dashboard',
      element: <CourseLayout />,
      children: [
        { path: 'test', element: <Test /> },
        { path: 'students/:course', element: <Students/> },
        { path: 'students/:course/create', element: <CreateStudent/> },
        { path: 'students/:course/details/:id', element: <DetailsStudent/> },
        { path: 'assessments/:course/details/:id', element: <DetailsAssessments/> },
        { path: 'so/:course/details/:id', element: <DetailsSO/> },
        { path: 'SO/:course', element: <SO/> },
        { path: 'assessments/:course', element: <Assessments /> },
        { path: 'assessments/:course/create', element: <CreateAssessment /> },
        { path: 'so/:course/create', element: <CreateSO /> },
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
