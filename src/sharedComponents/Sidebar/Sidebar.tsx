// Sidebar.tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listData } from './treeData';
import TreeItem from './TreeItem';
import type {Service} from './types';
import search from '../../assets/images/search.svg';
import checkbox from '../../assets/images/checkbox.svg';
import filter from '../../assets/images/filter.svg';
import ordering from '../../assets/images/ordering.svg';

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<Record<number, string>>({});
  const [activeItem, setActiveItem] = useState('');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [data, setData] = useState<Service[]>(listData);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const onDragStart = (index: number) => setDraggedIndex(index);
  const onDragOver = (e: React.DragEvent) => e.preventDefault();
  const onDrop = (index: number) => {
    if (draggedIndex == null || draggedIndex === index) return;
    const items = [...data];
    const draggedItem = items[draggedIndex];
    items.splice(draggedIndex, 1);
    items.splice(index, 0, draggedItem);
    setData(items);
    setDraggedIndex(null);
  };

  return (
    <div className="dashSidebar">
      <div className="sidebarSearch">
        <h1>Services</h1>
        <ul>
          <li><a><img src={search} alt="Search" /></a></li>
          <li><a><img src={checkbox} alt="Checkbox" /></a></li>
          <li><a><img src={filter} alt="Filter" /></a></li>
          <li><a><img src={ordering} alt="Ordering" /></a></li>
        </ul>
      </div>
      <div className="myTree">
        <ul>
          {data.map((item, index) => (
            <li key={index}
              draggable
              onDragStart={() => onDragStart(index)}
              onDragOver={onDragOver}
              onDrop={() => onDrop(index)}
              style={{ cursor: 'grab' }}>
              <TreeItem
                node={item}
                level={0}
                openMenus={openMenus}
                setOpenMenus={setOpenMenus}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
