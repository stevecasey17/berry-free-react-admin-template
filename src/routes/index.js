// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes], config.basename);
}
