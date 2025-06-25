import React, { useState, useEffect, useRef } from 'react';
import arrow1 from '../assets/images/arrow1.svg';

interface SearchCtrl {
  SBox: boolean;
}

interface Props {
  menuSearch: SearchCtrl;
  setmenuSearch: React.Dispatch<React.SetStateAction<SearchCtrl>>;
}

const SearchBox: React.FC<Props> = ({ menuSearch, setmenuSearch }) => {

  const searchMenuHide = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOpenMenus = (e: MouseEvent) => {
      if (
        searchMenuHide.current &&
        !searchMenuHide.current.contains(e.target as Node)
      ) {
        setmenuSearch({ SBox: false });
      }
    };

    document.addEventListener('mousedown', closeOpenMenus);
    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
    };
  }, [setmenuSearch]);

  const menuData = [
    {
      id: 0,
      title: 'Files',
      searchList: [
        {
          id: 0,
          title: 'MDU Attendance',
          sub1: 'My Space',
          sub2: 'Monthly Sheet',
        },
        {
          id: 1,
          title: 'EFT Attendance',
          sub1: 'Private Reports',
          sub2: 'Monthly Sheet',
        },
        {
          id: 2,
          title: 'BSD Attendance',
          sub1: 'Public Reports',
          sub2: 'Monthly Sheet',
        },
        {
          id: 3,
          title: 'Unison Attendance',
          sub1: 'Organizations',
          sub2: 'Monthly Sheet',
        },
      ]
    },
    {
      id: 1,
      title: 'Folder',
      searchList: [
        {
          id: 0,
          title: 'MDU Attendance',
          sub1: 'My Space',
          sub2: 'Monthly Sheet',
        },
      ]
    },
    {
      id: 2,
      title: 'Organization',
      searchList: [
        {
          id: 0,
          title: 'MDU Attendance',
          sub1: 'My Space',
          sub2: 'Monthly Sheet',
        },
        {
          id: 1,
          title: 'EFT Attendance',
          sub1: 'Private Reports',
          sub2: 'Monthly Sheet',
        },
        {
          id: 2,
          title: 'BSD Attendance',
          sub1: 'Public Reports',
          sub2: 'Monthly Sheet',
        },
      ]
    },
    {
      id: 3,
      title: 'Favourites',
      searchList: [
        {
          id: 0,
          title: 'MDU Attendance',
          sub1: 'My Space',
          sub2: 'Monthly Sheet',
        },
        {
          id: 1,
          title: 'EFT Attendance',
          sub1: 'Private Reports',
          sub2: 'Monthly Sheet',
        },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const [detailList, setDetailList] = useState<typeof menuData>([menuData[0]]);

  const selectItem = (item: typeof menuData[number]) => {
    setActiveTab(item.id);
    const filterData = menuData.filter((x) => x.id === item.id);
    setDetailList(filterData);
  };


  return (
    <div>
    
      {menuSearch.SBox && 
        <div ref={searchMenuHide} className="searchMenu">
          <ul className="list1">
            {menuData.map((item) => (
              <li key={item.id}>
                <a
                  className={activeTab === item.id ? 'active' : ''}
                  onClick={() => selectItem(item)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <h1>Recent Search</h1>
          {detailList.map((item) => (
            <ul className="list2" key={item.id}>
              {item.searchList.map((subItem) => (
                <li key={subItem.id}>
                  <a type="button">
                    <p>{subItem.title}</p>
                    <dd>
                      <span>{subItem.sub1}</span>
                      <img src={arrow1} alt="" />
                      <span>{subItem.sub2}</span>
                    </dd>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      }
    </div>
  );
}

export default SearchBox;