import { useState } from 'react';
import {
    Routes,
    useLocation,
    Route,
    Navigate
} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import type { RootState,AppDispatch } from '../src/redux/store/store.ts';
import InnerDashboard from './utilities/InnerDashboard.tsx';
import OuterDashboard from './utilities/OuterDashboard.tsx';
import Login from './outerRoutes/Login.tsx';
import Signup from './outerRoutes/Signup.tsx';
import ForgotPassword from './outerRoutes/ForgotPassword.tsx';
import Home from './innerRoutes/Home.tsx';
import HomeDetails from './innerRoutes/HomeDetails.tsx';
import CommandControl from './innerRoutes/CommandControl.tsx';
import ATMControlCenter from './innerRoutes/ATMControlCenter.tsx';
import Drag from './innerRoutes/Drag.tsx';
import NoMatch from './NoMatch.tsx';

const Routers: React.FC = () => {

    const loginCredentials = useSelector((state: RootState) => state.loginDetail.loginDetail);

    return (
        <div>
            <Routes>
                {loginCredentials.length == 0 ?
                    <Route path="/" element={<OuterDashboard />}>
                        <Route path="/Login" element={<Navigate to="/" />} />
                        <Route path="/" element={<Login />} />
                        <Route path="Signup" element={<Signup />} />
                        <Route path="ForgotPassword" element={<ForgotPassword />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                    :
                    <Route path="/" element={<InnerDashboard />}>
                        <Route path="/" element={<Home />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="HomeDetails" element={<HomeDetails />} />
                        <Route path="ATMControlCenter" element={<ATMControlCenter />} />
                        <Route path="CommandControl" element={<CommandControl />} />
                        <Route path="Drag" element={<Drag />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                }
            </Routes>
        </div>
    )
}

export default Routers
