import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store/store';
import { setLength } from '../redux/reducer/getLength';

import { Link, NavLink, Outlet } from "react-router-dom";
import plusIcon from '../assets/images/plus.png';
import miunsIcon from '../assets/images/minus.png';
import iconBank from '../assets/images/bankIcon1.png';
import runicon from '../assets/images/runIcon.png';
import stopicon from '../assets/images/stopIcon.png';
import calender from '../assets/images/calender.png';
import people from '../assets/images/people.png';
import ch1 from '../assets/images/ch1.png';
import ch2 from '../assets/images/ch2.png';
import search from '../assets/images/search.svg';
import checkbox from '../assets/images/checkbox.svg';
import filter from '../assets/images/filter.svg';
import ordering from '../assets/images/ordering.svg';
import hov1 from '../assets/images/hov1.svg';
import hov2 from '../assets/images/hov2.svg';
import type { Props } from 'recharts/types/container/Layer';

interface Service {
  id?: number;
  name: string;
  bankicon?: string;
  servicename?: string,
  running?: number;
  stopped: number;
  children?: Service[];
  date?: string;
  owner?: string;
  ch1?: string,
  ch2?: string,
}

const Sidebar: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [openMenus, setOpenMenus] = useState<Record<number, string>>({});
  const [activeItem, setActiveItem] = useState('');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleMenu = (level: number, name: string | undefined) => {
    if (!name) return;
    setOpenMenus(prev => {
      const newMenus = { ...prev };
      if (newMenus[level] === name) {
        delete newMenus[level]; // collapse if already open
      } else {
        newMenus[level] = name; // open new one and close others at this level
      }
      // Also close all deeper levels when collapsing or changing this level
      Object.keys(newMenus)
        .map(Number)
        .filter(lvl => lvl > level)
        .forEach(lvl => delete newMenus[lvl]);
      return newMenus;
    });
  };

  const isOpen = (level: number, name: string | undefined) => {
    return !!name && openMenus[level] === name;
  };

  const listData: Service[] = [
    {
      id: 1,
      name: "Bank A",
      bankicon: iconBank,
      servicename: '1 Service',
      running: 1,
      stopped: 1,
      children: [
        {
          name: "Rendezvous",
          bankicon: iconBank,
          servicename: '1 Service',
          running: 1,
          stopped: 1,
          children: [
            {
              name: "Instance 1",
              bankicon: iconBank,
              servicename: '1 Service',
              running: 1,
              stopped: 1,
              children: [
                {
                  name: "RDV 1",
                  bankicon: iconBank,
                  stopped: 1,
                  date: "25/04",
                  owner: 'Rija Shakir',
                  ch1: ch1,
                  ch2: ch2,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Bank B",
      bankicon: iconBank,
      servicename: '2 Service',
      running: 1,
      stopped: 1,
      children: [
        {
          name: "Vision",
          bankicon: iconBank,
          servicename: '2 Service',
          running: 1,
          stopped: 1,
          children: [
            {
              name: "Instance 2",
              bankicon: iconBank,
              servicename: '2 Service',
              running: 1,
              stopped: 1,
              children: [
                {
                  name: "RDV 2",
                  bankicon: iconBank,
                  stopped: 1,
                  date: "26/04",
                  owner: 'Alber Khan',
                  ch1: ch1,
                  ch2: ch2,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Bank C",
      bankicon: iconBank,
      servicename: '3 Service',
      running: 4,
      stopped: 5,
      children: [
        {
          name: "Vision",
          bankicon: iconBank,
          servicename: '3 Service',
          running: 4,
          stopped: 5,
          children: [
            {
              name: "Instance 3",
              bankicon: iconBank,
              servicename: '3 Service',
              running: 7,
              stopped: 8,
              children: [
                {
                  name: "RDV 3",
                  bankicon: iconBank,
                  stopped: 8,
                  date: "27/04",
                  owner: 'Hammad Khan',
                  ch1: ch1,
                  ch2: ch2,
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  const getAllDescendantNames = (node: any): string[] => {
    let names: string[] = [];
    if (node.name) names.push(node.name);
    if (node.children && node.children.length > 0) {
      node.children.forEach((child: any) => {
        names = names.concat(getAllDescendantNames(child));

      });
    }
    return names;
  };

  const handleCheckboxChange = (node: any, checked: boolean) => {
    const allNames = getAllDescendantNames(node);
    setCheckedItems(prev => {
      const updated = { ...prev };
      allNames.forEach(name => {
        if (name) updated[name] = checked;
      });
      const checkedCount = Object.values(updated).filter(v => v).length;
      dispatch(setLength(checkedCount));
      return updated;
    });
  };

  const [data, setData] = useState(listData);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const onDragStart = (index: any) => {
    setDraggedIndex(index);
  };

  const onDragOver = (event: any) => {
    event.preventDefault(); 
  };

  const onDrop = (index: any) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const items = [...data];
    const draggedItem = items[draggedIndex];
    items.splice(draggedIndex, 1);
    items.splice(index, 0, draggedItem);
    setData(items);
    setDraggedIndex(null);
  };

  return (
    <div className={`dashSidebar`}>
      <div className='sidebarSearch'>
        <h1>Services</h1>
        <ul>
          <li><a><img src={search} alt="" /></a></li>
          <li><a><img src={checkbox} alt="" /></a></li>
          <li><a><img src={filter} alt="" /></a></li>
          <li><a><img src={ordering} alt="" /></a></li>
        </ul>
      </div>
      <div className='myTree'>
        <ul>
          {data?.map((item, index) => (
            <li key={index}
              draggable
              onDragStart={() => onDragStart(index)}
              onDragOver={onDragOver}
              onDrop={() => onDrop(index)}
              style={{
                cursor: 'grab',
              }}>
              <span className={`${item.name && checkedItems[item.name] ? "liActive" : ""} liHover`}>
                <dd className='showCtrl'>
                  <a title='Favourite'><img src={hov1} alt="" /></a>
                  <a title='Falg'><img src={hov2} alt="" /></a>
                </dd>
                <a onClick={() => toggleMenu(0, item.name)}>
                  <img src={isOpen(0, item.name) ? miunsIcon : plusIcon} alt='' />
                  <img className={`bankicon ${checkedItems[item.name] ? 'hidden' : ''}`}
                    src={item.bankicon} alt="" />
                </a>
                <input type="checkbox"
                  className={`custom-checkbox ${checkedItems[item.name] ? 'force-show' : ''}`}
                  checked={!!checkedItems[item.name]}
                  onChange={e => handleCheckboxChange(item, e.target.checked)} />
                {item.name}
                <div>
                  <p>{item.servicename}</p>
                  <p><img src={runicon} alt="" /> {item.running}  Running</p>
                  <p><img src={stopicon} alt="" /> {item.stopped} Stopped</p>
                </div>
              </span>
              {isOpen(0, item.name) && (
                <ul>
                  {item.children?.map((sLevel, sIndex) => (
                    <li key={sIndex}>
                      <span className={`${item.name && checkedItems[sLevel.name] ? "liActive" : ""} liHover`}>
                        <dd className='showCtrl'>
                          <a title='Favourite'><img src={hov1} alt="" /></a>
                          <a title='Falg'><img src={hov2} alt="" /></a>
                        </dd>
                        <a onClick={() => toggleMenu(1, sLevel.name)}>
                          <img src={isOpen(1, sLevel.name) ? miunsIcon : plusIcon} alt='' />
                          <img className={`bankicon ${checkedItems[sLevel.name] ? 'hidden' : ''}`}
                            src={sLevel.bankicon} alt="" />
                        </a>
                        <input type="checkbox"
                          className={`custom-checkbox ${checkedItems[sLevel.name] ? 'force-show' : ''}`}
                          checked={!!checkedItems[sLevel.name]}
                          onChange={e => handleCheckboxChange(sLevel, e.target.checked)} />
                        {sLevel.name}
                        <div>
                          <p>{sLevel.servicename}</p>
                          <p><img src={runicon} alt="" /> {sLevel.running}  Running</p>
                          <p><img src={stopicon} alt="" />  {sLevel.stopped} Stopped</p>
                        </div>
                      </span>
                      {isOpen(1, sLevel.name) && (
                        <ul>
                          {sLevel.children?.map((tLevel, sIndex) => (
                            <li key={sIndex}>
                              <span className={`${item.name && checkedItems[tLevel.name] ? "liActive" : ""} liHover`}>
                                <dd className='showCtrl'>
                                  <a title='Favourite'><img src={hov1} alt="" /></a>
                                  <a title='Falg'><img src={hov2} alt="" /></a>
                                </dd>
                                <a onClick={() => toggleMenu(2, tLevel.name)}>
                                  <img src={isOpen(2, tLevel.name) ? miunsIcon : plusIcon} alt='' />
                                  <img className={`bankicon ${checkedItems[tLevel.name] ? 'hidden' : ''}`}
                                    src={tLevel.bankicon} alt="" />
                                </a>
                                <input type="checkbox"
                                  className={`custom-checkbox ${checkedItems[tLevel.name] ? 'force-show' : ''}`}
                                  checked={!!checkedItems[tLevel.name]}
                                  onChange={e => handleCheckboxChange(tLevel, e.target.checked)} />
                                {tLevel.name}
                                <div>
                                  <p>{sLevel.servicename}</p>
                                  <p><img src={runicon} alt="" /> {tLevel.running}  Running</p>
                                  <p><img src={stopicon} alt="" />  {tLevel.stopped} Stopped</p>
                                </div>
                              </span>
                              {isOpen(2, tLevel.name) && (
                                <ul>
                                  {tLevel.children?.map((fLevel, fIndex) => (
                                    <li key={fIndex}>
                                      <span className={`liHover ${((item.name && checkedItems[fLevel.name]) || fLevel.name === activeItem) ? "liActive" : ""}`}>
                                        <dd className='showCtrl'>
                                          <a title='Favourite'><img src={hov1} alt="" /></a>
                                          <a title='Falg'><img src={hov2} alt="" /></a>
                                        </dd>
                                        <a onClick={() => toggleMenu(3, fLevel.name)}>
                                          <img src={isOpen(3, fLevel.name) ? miunsIcon : plusIcon} alt='' />
                                          <img className={`bankicon ${checkedItems[fLevel.name] ? 'hidden' : ''}`} src={fLevel.bankicon} alt="" />
                                        </a>
                                        <input type="checkbox"
                                          className={`custom-checkbox ${checkedItems[fLevel.name] ? 'force-show' : ''}`}
                                          checked={!!checkedItems[fLevel.name]}
                                          onChange={e => handleCheckboxChange(fLevel, e.target.checked)} />
                                        <Link to="/HomeDetails" className='anchorCtrl' onClick={() => setActiveItem(fLevel.name)}>{fLevel.name}</Link>
                                        <div>
                                          <p>{fLevel.stopped} <img src={stopicon} alt="" /> Stopped </p>
                                          <p className='pLimit'><img src={calender} alt="" />  {fLevel.date}</p>
                                          <p className='pLimit'><img src={people} alt="" />  {fLevel.owner}</p>
                                          <p className='pLimit'><img src={fLevel.ch1} alt="" /> CPU</p>
                                          <p className='pLimit'><img src={fLevel.ch2} alt="" /> RAM</p>
                                        </div>
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

