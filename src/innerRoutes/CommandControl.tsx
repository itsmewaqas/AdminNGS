import { useState } from 'react';
import oneLink from '../assets/images/oneLink.svg';
import runicon from '../assets/images/runIcon.png';
import stopicon from '../assets/images/stopIcon.png';
import calender from '../assets/images/calender.png';
import people from '../assets/images/people.png';
import signof from '../assets/images/signof.png';
import KeyExchange from '../assets/images/KeyExchange.png';
import Modal from '../sharedComponents/Modal';
import { toast } from 'react-toastify';

type Option = {
  id: number;
  title: string;
};

const selectList: Option[] = [
  {
    id: 1,
    title: 'Sign In',
  },
  {
    id: 2,
    title: 'Sign Off',
  },
  {
    id: 3,
    title: 'Key Exchange',
  },
  {
    id: 4,
    title: 'Connected',
  },
  {
    id: 5,
    title: 'Offline',
  }
]

type ItemType = {
  title: string;
};

const CommandControl: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const [getVal, setGetVal] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTitle = event.target.value;
    const selectedItem = selectList.find(item => item.title === selectedTitle);
    if (selectedItem) {
      setGetVal(selectedItem.title)
    }
    setModalOpen(true)
  };

  const successMesg = () => toast.success(`Do you want to ${getVal} the system?`, {
    position: "top-right",
    theme: "light"
  });

  const okMethod = () => {
    setModalOpen(false);
    successMesg();
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="State Confirmation"
        footer={
          <>
            <button onClick={() => setModalOpen(false)} className='modalCancel'>Cancel</button>
            <button onClick={() => okMethod()} className='modalSubmit'>Confirm</button>
          </>}>
        <p>Do you want to <span>{getVal} </span> the system?</p>
      </Modal>
      <div className="flex flex-row-reverse">
        <select id="sState" name="sState" className='gSelect' onChange={handleChange}>
          <option value="" disabled selected>Select</option>
          {selectList?.map((item: any, index: any) => (
            <option key={index} value={item.title}>{item.title}</option>
          ))}
        </select>
      </div>
      <div className='generalHeader'>
        <h1><img src={oneLink} alt="" /> 1Link</h1>
        <ul>
          <li><img src={stopicon} alt="" /> Down </li>
          <li><img src={calender} alt="" />  25/04</li>
          <li><img src={people} alt="" />  Rija Shakir</li>
        </ul>
      </div>
      <div className='infoBox'>
        <h2>Description</h2>
        <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='infoBox'>
        <h2>History</h2>
        <div className='tableStyle'>
          <table>
            <tr>
              <th>Action</th>
              <th>Date</th>
              <th>Time</th>
              <th>User</th>
            </tr>
            <tr>
              <td><img src={runicon} alt="" /> Start</td>
              <td>25/05/2025(6 hours ago)</td>
              <td>6:10 pm</td>
              <td>Rija shakir</td>
            </tr>
            <tr>
              <td><img src={stopicon} alt="" /> Stop</td>
              <td>25/05/2025(6 hours ago)</td>
              <td>6:10 pm</td>
              <td>Rija shakir</td>
            </tr>
            <tr>
              <td><img src={KeyExchange} alt="" /> Start</td>
              <td>25/05/2025(6 hours ago)</td>
              <td>6:10 pm</td>
              <td>Rija shakir</td>
            </tr>
            <tr>
              <td><img src={signof} alt="" /> Stop</td>
              <td>25/05/2025(6 hours ago)</td>
              <td>6:10 pm</td>
              <td>Rija shakir</td>
            </tr>
            <tr>
              <td><img src={runicon} alt="" /> Start</td>
              <td>25/05/2025(6 hours ago)</td>
              <td>6:10 pm</td>
              <td>Rija shakir</td>
            </tr>
            <tr>
              <td><img src={stopicon} alt="" /> Stop</td>
              <td>25/05/2025(6 hours ago)</td>
              <td>6:10 pm</td>
              <td>Rija shakir</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CommandControl

