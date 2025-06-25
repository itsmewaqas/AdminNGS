// TreeItem.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLength } from '../../redux/reducer/getLength';
import type {Service} from './types';
import plusIcon from '../../assets/images/plus.png';
import minusIcon from '../../assets/images/minus.png';
import hov1 from '../../assets/images/hov1.svg';
import hov2 from '../../assets/images/hov2.svg';
import runicon from '../../assets/images/runIcon.png';
import stopicon from '../../assets/images/stopIcon.png';
import calender from '../../assets/images/calender.png';
import people from '../../assets/images/people.png';

interface TreeItemProps {
  node: Service;
  level: number;
  openMenus: Record<number, string>;
  setOpenMenus: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  checkedItems: Record<string, boolean>;
  setCheckedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const TreeItem: React.FC<TreeItemProps> = ({
  node, level,
  openMenus, setOpenMenus,
  checkedItems, setCheckedItems,
  activeItem, setActiveItem
}) => {
  const dispatch = useDispatch();

  const isOpen = openMenus[level] === node.name;

  const toggleMenu = () => {
    setOpenMenus(prev => {
      const updated = { ...prev };
      if (updated[level] === node.name) {
        delete updated[level];
      } else {
        updated[level] = node.name!;
      }
      Object.keys(updated)
        .map(Number)
        .filter(lvl => lvl > level)
        .forEach(lvl => delete updated[lvl]);
      return updated;
    });
  };

  const getAllDescendantNames = (n: Service): string[] => {
    let names = n.name ? [n.name] : [];
    if (n.children) {
      n.children.forEach(child => {
        names = names.concat(getAllDescendantNames(child));
      });
    }
    return names;
  };

  const handleCheckboxChange = (checked: boolean) => {
    const allNames = getAllDescendantNames(node);
    setCheckedItems(prev => {
      const updated = { ...prev };
      allNames.forEach(name => updated[name] = checked);
      const checkedCount = Object.values(updated).filter(Boolean).length;
      dispatch(setLength(checkedCount));
      return updated;
    });
  };

  return (
    <li>
      <span className={`liHover ${checkedItems[node.name] || node.name === activeItem ? 'liActive' : ''}`}>
        <dd className="showCtrl">
          <a><img src={hov1} alt="" /></a>
          <a><img src={hov2} alt="" /></a>
        </dd>
        <a onClick={toggleMenu}>
          {node.children?.length ? (
            <img src={isOpen ? minusIcon : plusIcon} alt="" />
          ) : null}
          {node.bankicon && (
            <img className={`bankicon ${checkedItems[node.name] ? 'hidden' : ''}`} src={node.bankicon} alt="" />
          )}
        </a>
        <input
          type="checkbox"
          className={`custom-checkbox ${checkedItems[node.name] ? 'force-show' : ''}`}
          checked={!!checkedItems[node.name]}
          onChange={e => handleCheckboxChange(e.target.checked)}
        />
        {node.children?.length ? (
          <span>{node.name}</span>
        ) : (
          <Link to="/HomeDetails" className='anchorCtrl' onClick={() => setActiveItem(node.name)}>
            {node.name}
          </Link>
        )}
        <div>
          {node.servicename && <p>{node.servicename}</p>}
          {node.running != null && <p><img src={runicon} alt="" /> {node.running} Running</p>}
          <p><img src={stopicon} alt="" /> {node.stopped} Stopped</p>
          {node.date && <p className='pLimit'><img src={calender} alt="" /> {node.date}</p>}
          {node.owner && <p className='pLimit'><img src={people} alt="" /> {node.owner}</p>}
          {node.ch1 && <p className='pLimit'><img src={node.ch1} alt="" /> CPU</p>}
          {node.ch2 && <p className='pLimit'><img src={node.ch2} alt="" /> RAM</p>}
        </div>
      </span>

      {isOpen && node.children?.length && (
        <ul>
          {node.children.map((child:any, i:any) => (
            <TreeItem
              key={i}
              node={child}
              level={level + 1}
              openMenus={openMenus}
              setOpenMenus={setOpenMenus}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeItem;
