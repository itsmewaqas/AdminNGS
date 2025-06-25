import { useState } from 'react';
import menuIcon from '../assets/images/menuIcons.svg';

interface SidebarProps {
    sidebarCtrlFunc: string;
}

const MegaMenu: React.FC<SidebarProps> = ({ sidebarCtrlFunc }) => {
    const [count, setCount] = useState(0)

    return (
        <div className={`${sidebarCtrlFunc} megaMenu`}>
            <input type="text" name="" id="" className='search1' placeholder='Search filename here' />
            <ul>
                <li><a><img src={menuIcon} alt="" />Report Designer</a></li>
                <li><a><img src={menuIcon} alt="" />Operational UI</a></li>
                <li><a><img src={menuIcon} alt="" />Unison Fuxion</a></li>
                <li><a><img src={menuIcon} alt="" />Ambit</a></li>
                <li><a><img src={menuIcon} alt="" />Rendezvous</a></li>
                <li><a><img src={menuIcon} alt="" />Symmetry</a></li>
                <li><a><img src={menuIcon} alt="" />vision</a></li>
                <li><a><img src={menuIcon} alt="" />Novus</a></li>
            </ul>
        </div>
    )
}

export default MegaMenu

