import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store/store';
import { BiLogOutCircle, BiSolidGrid } from "react-icons/bi";
import icon2 from '../assets/images/headerIcon2.svg';
import icon3 from '../assets/images/headerIcon3.svg';
import menuIcon1 from '../assets/images/topMenuIcon1.svg';
import menuIcon2 from '../assets/images/topMenuIcon2.svg';
import SearchBox from '../sharedComponents/SearchBox';
import { logout } from '../redux/reducer/loginDetail';

interface iState {
  menuCtrl: boolean;
}

interface Activestate {
  iActive: string;
}

interface HeaderProps {
  sidebarCtrlFunc: () => void; // define props type
}

type Menu = {
  id: number;
  title: string;
};

interface SearchCtrl {
  SBox: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const [menuCollapse, setMenuCollapse] = useState<iState>({ menuCtrl: false });

  const dispatch = useDispatch<AppDispatch>();

  const menuCollapsed = () => {
    setMenuCollapse({ menuCtrl: !menuCollapse.menuCtrl }); // toggle the boolean
    props.sidebarCtrlFunc(); // call the prop function
  };

    let navigate = useNavigate();

  const [selectTitle, setSelectTitle] = useState<Activestate>({ iActive: 'Home' });

  const menuDate: Menu[] = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'CommandControl',
    },
    {
      id: 3,
      title: 'ATMControlCenter',
    }
  ]

  const renderMenuIcon = (title: string): string => {
    switch (title) {
      case "Home":
        return menuIcon1;
      case "CommandControl":
        return menuIcon2;
      case "ATMControlCenter":
        return menuIcon2;
      default:
        return menuIcon2
    }
  }

  const getPermission = (item: any) => {
    setSelectTitle({ iActive: item.title });
  }

  const [menuSearch, setmenuSearch] = useState<SearchCtrl>({ SBox: false });
  const keyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key.length === 1 || event.key === 'Backspace') {
      setmenuSearch({ SBox: true });
    }
    if (event.key === 'Escape') {
      setmenuSearch({ SBox: false });
    }
  };

  const userLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate('/');
  }

  return (
    <div>
      <div className='dashHeader'>
        <a className="logo" onClick={menuCollapsed}><BiSolidGrid size={30} color="#fff" />Admin UI</a>
        <div>
          <input type="search" className='headerSearch' placeholder='Search Reports, Folders, and more' name='' onKeyUp={keyUp} />
          {menuSearch.SBox && (
            <SearchBox menuSearch={menuSearch} setmenuSearch={setmenuSearch} />
          )}
        </div>
        <ul>
          <li><a><img src={icon2} alt='' /></a></li>
          <li><a><img src={icon3} alt='' /></a></li>
          <li><a onClick={() => userLogout()}><BiLogOutCircle color='#c7c9da' size={20} /></a></li>
        </ul>
      </div>
      <div className='topMenu clearfix'>
        <ul>
          {menuDate?.map((item, index) => (
            <li key={index.toString()}>
              <Link to={`/${item.title}`} onClick={() => getPermission(item)}
                className={selectTitle.iActive === item.title ? 'active' : ''}>
                <img src={renderMenuIcon(item.title)} alt={item.title} /> {item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header

