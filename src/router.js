import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './featured/layout';
import ListPage from './pages/list';
import NewJobPage from './pages/new-job';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/list',
                element: <ListPage />,
            },
            {
                path: '/new-job',
                element: <NewJobPage />,
            },
            {
                index: true,
                element: <Navigate to="/list" replace />,
            },
        ],
    },
]);

export default router;
