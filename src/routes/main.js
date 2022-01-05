import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import AppLayout from "../pages/layouts/AppLayout";

const routes = [{
        path: '/panel',
        redirect: '/login',
        component: AppLayout,
        routes: [{
            name: 'dashboard',
            path: '/dashboard',
            component: Dashboard
        }]
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
];

export default routes;