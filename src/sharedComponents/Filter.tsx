import { useState } from 'react';
import Duplicate from '../assets/images/Duplicate.svg';
import Stop from '../assets/images/Stop.svg';
import Start from '../assets/images/Start.svg';
import Restart from '../assets/images/Restart.svg';

interface FilterProps {
  length: number;
}

const Filter: React.FC<FilterProps> = ({ length }) => {
  const [count, setCount] = useState(0)

  return (
    <div className='fCtrlRow'>
      <div className='fCtrlRowCount'>Selected {length}</div>
      <div className='fCtrlRowList'>
        <a><img src={Duplicate} alt="" /> Duplicate</a>
        <a><img src={Stop} alt="" /> Stop</a>
        <a><img src={Start} alt="" /> Start</a>
        <a><img src={Restart} alt="" /> Restart</a>
      </div>
    </div>
  )
}

export default Filter

