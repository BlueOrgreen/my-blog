import Home from '../views/Home';
import Article from '../views/Article';
import Login from '../views/Login';

interface RoutesProps {
    path: string,
    key: string,
    exact?: boolean,
    component: any;
}

export const routes: RoutesProps[] = [
    {
        path: '/admin/login',
        key: '/admin/login',
        component: Login,
    },
]


export const homeRoutes: RoutesProps[] = [
    {
        path: '/home',
        key: '/home',
        exact: true,
        component: Home,
    },
    {
        path: '/home/article',
        key: '/home/article',
        exact: true,
        component: Article
    }
]