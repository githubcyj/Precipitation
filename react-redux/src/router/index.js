import Home from '../pages/home/Home';
import User from '../pages/user/User'
import Mine from '../pages/mine/Mine'

let routes = [
    {path: '/', component: Home, exact: true},
    {path: '/user', component: User},
    {path: '/mine', component: Mine},
];

export default routes;