import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../components/SignIn';
import Participants from '../components/participants/Participants';
import Email from '../components/email';
import MainPage from '../components/mainPage/MainPage';

import AccSettings from '../components/AccSettings';
import Calendar from '../components/calendar/Calendar';
import Roles from '../components/roles';
import Disks from '../components/disks';
import Sms from '../components/sms/Sms';
import Info from '../components/information/Info';
import VideoChat from '../components/videoChat/VideoChat';
import VoiceChat from '../components/voiceChat/VoiceChat';
import SignUp from '../components/SignUp';
import Notifications from '../components/notifications';
import Profile from '../components/Profile';
import Chat from '../components/chat/Chat';
import AppRoute from './AppRoute';
import FullWidthLayout from './FullWidthLayout';
import SidebarLayout from './SidebarLayout';
import history from '../history';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <MainPage />,
    },
    {
        path: '/accSettings',
        main: () => <AccSettings />,
    },
    {
        path: '/calendar',
        main: () => <Calendar />,
    },
    {
        path: '/email',
        main: () => <Email />,
    },
    {
        path: '/participants',
        main: () => <Participants />,
    },
    {
        path: '/roles',
        main: () => <Roles />,
    },
    {
        path: '/disks',
        main: () => <Disks />,
    },
    {
        path: '/sms',
        main: () => <Sms />,
    },
    {
        path: '/info',
        main: () => <Info />,
    },
    {
        path: '/account-settings',
        main: () => <AccSettings />,
    },
    {
        path: '/voiceChat',
        main: () => <VoiceChat />,
    },
    {
        path: '/videoChat',
        main: () => <VideoChat />,
    },
];
const Routing = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                {routes.map((route, index) => (
                    <AppRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        layout={SidebarLayout}
                    />
                ))}
                <AppRoute path="/chat" component={Chat} layout={FullWidthLayout} />
                <AppRoute path="/profile/:id" component={Profile} layout={FullWidthLayout} />
                <AppRoute path="/notification" component={Notifications} layout={FullWidthLayout} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
