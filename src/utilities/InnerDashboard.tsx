import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../sharedComponents/Header';
import Sidebar from '../sharedComponents/Sidebar';
import Footer from '../sharedComponents/Footer';
import Filter from '../sharedComponents/Filter';
import MegaMenu from '../sharedComponents/MegaMenu';

interface IState {
  ctrlMenu: string;
}
const InnerDashboard: React.FC = (props) => {

  const length = useSelector((state: RootState) => state.getLengthSlice.getLength);
  console.log('get length', length);

  const [showMenu, SetShowMenu] = useState<IState>({ ctrlMenu: 'hide' });

  const toggleSidebar = () => {
    SetShowMenu(prevState => ({
      ctrlMenu: prevState.ctrlMenu === 'show' ? 'hide' : 'show'
    }));
  };

  return (
    <div className='dMain'>
      <ToastContainer toastClassName="tosFontSize" />
      <Header sidebarCtrlFunc={toggleSidebar} />
      <Sidebar />
      <MegaMenu sidebarCtrlFunc={showMenu.ctrlMenu} />
      <div className='dContainer' style={{ marginTop: ' 102px' }}>
        <div className='dContainerInner'>
          {length > 0 ? <Filter length={length} /> : null}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InnerDashboard
