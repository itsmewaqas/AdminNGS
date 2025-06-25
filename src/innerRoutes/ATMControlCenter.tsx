import { useState } from 'react';
import mobileIcon from '../assets/images/mobile1.svg';
import stopicon from '../assets/images/stopIcon.png';
import KeyExchange from '../assets/images/KeyExchange.png';
import signof from '../assets/images/signof.png';
import calender from '../assets/images/calender.png';
import people from '../assets/images/people.png';
import { Tabs, Tab } from "../sharedComponents/Tabs";
import runIcon from '../assets/images/runIcon.png';
import CollapsibleTabs from '../sharedComponents/CollapsibleTabs';

interface DList {
  Status?: string;
  AvailableCash?: number;
  LastCashTaken?: string;
  TotalTransactions?: number,
  SuccessfulTransactions?: number;
  FailedTransactions: number;
  HealthIsuues?: number;
  RejectedTransactions?: number;
  CashReplenishment?: number;
}

const ATMControlCenter: React.FC = () => {
  const [count, setCount] = useState(0)


  const DListData: DList[] = [
    {
      Status: 'Available',
      AvailableCash: 2700000,
      LastCashTaken: 'Feb 12 2026 04:33 am',
      TotalTransactions: 2,
      SuccessfulTransactions: 3,
      FailedTransactions: 0,
      HealthIsuues: 0,
      RejectedTransactions: 0,
      CashReplenishment: 0,
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0); // First section open by default

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index)); // Toggle if same, open if different
  };

  return (
    <div>
      <div className='generalHeader'>
        <h1><img src={mobileIcon} alt="" /> Laal Kothi Atm</h1>
        <ul>
          <li><img src={stopicon} alt="" /> Critical </li>
          <li><img src={calender} alt="" />  25/04</li>
          <li><img src={people} alt="" />  Rija Shakir</li>
        </ul>
      </div>
      <Tabs>
        <Tab label="Details">
          <div>
            {DListData?.map((item, index) => (
              <ul key={index} className='list1'>
                <li>Status<span><img src={runIcon} alt="" /> {item.Status} </span> </li>
                <li>Available Cash<span> {item.AvailableCash}</span></li>
                <li>Last Cash Taken<span>{item.LastCashTaken}</span> </li>
                <li>Total Transactions<span>{item.TotalTransactions}</span> </li>
                <li>Successful Transactions<span>{item.SuccessfulTransactions}</span> </li>
                <li>Failed Transactions<span>{item.FailedTransactions}</span> </li>
                <li>Health Isuues<span>{item.HealthIsuues}</span> </li>
                <li>Rejected Transactions<span>{item.RejectedTransactions}</span> </li>
                <li>Cash Replenishment<span>{item.CashReplenishment}</span> </li>
              </ul>
            ))}
          </div>
        </Tab>
        <Tab label="Configuration">
          <div className='mt-5'>
            <Tabs>
              <Tab label="Settings">
                <div className='detailBox1'>
                  <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                    <div className='fetch1'><p>Terminal Name <span>ATM ABCDXYZ</span></p></div>
                    <div className='fetch1'><p>Terminal ID <span>12334455555</span></p></div>
                    <div className='fetch1'><p>Short Name <span>ABC056343463</span></p></div>
                    <div className='fetch1'><p>ATM Functionality <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                  </div>
                  <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                    <div className='fetch1'><p>Timezone <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>Model <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>Group <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>Status <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                  </div>
                  <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                    <div className='fetch1'><p>IP Address <span>ATM ABCDXYZ</span></p></div>
                    <div className='fetch1'><p>Port <span>12334455555</span></p></div>
                    <div className='fetch1'><p>Timeout <span>ABC056343463</span></p></div>
                    <div className='fetch1'><p>Luno <span>Lorem Ipsum Ipsum</span></p></div>
                  </div>
                  <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className='fetch1'><p>Prepended Length <span>ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ</span></p></div>
                    <div className='fetch1'><p>Last Boot Time <span>15-5-2025 Tuesday 10:30 pm </span></p></div>
                  </div>
                  <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className='fetch1'><p>Config File Path <span>ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ</span></p></div>
                    <div className='fetch1'></div>
                  </div>
                  <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className='fetch1'><p>Charge Profile <span>Rija Shakir</span></p></div>
                    <div className='fetch1'></div>
                  </div>
                </div>
              </Tab>
              <Tab label="Location">
                <div className='detailBox1'>
                  <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                    <div className='fetch1'><p>Address <span>ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ</span></p></div>
                  </div>
                  <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4">
                    <div className='fetch1'><p>Branch Code <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>City <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>Region <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>Status <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                  </div>
                </div>
              </Tab>
              <Tab label="Security">
                <div className='detailBox1'>
                  <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                    <div className='fetch1'><p>Key Download Mechanism <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                    <div className='fetch1'><p>Communication Mechanism <select name=""><option value="Select 1">Select 1"</option></select></p></div>
                  </div>
                  <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                    <div className='fetch1'><p>Certificate File Path <span>ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ ATM ABCDXYZ</span></p></div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Tab>
        <Tab label="History">
          <div>
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
                    <td><img src={runIcon} alt="" /> Connected</td>
                    <td>25/05/2025(6 hours ago)</td>
                    <td>6:10 pm</td>
                    <td>Rija shakir</td>
                  </tr>
                  <tr>
                    <td><img src={runIcon} alt="" /> Connected</td>
                    <td>25/05/2025(6 hours ago)</td>
                    <td>6:10 pm</td>
                    <td>Rija shakir</td>
                  </tr>
                  <tr>
                    <td><img src={KeyExchange} alt="" /> Key Download</td>
                    <td>25/05/2025(6 hours ago)</td>
                    <td>6:10 pm</td>
                    <td>Rija shakir</td>
                  </tr>
                  <tr>
                    <td><img src={signof} alt="" /> Offline</td>
                    <td>25/05/2025(6 hours ago)</td>
                    <td>6:10 pm</td>
                    <td>Rija shakir</td>
                  </tr>
                  <tr>
                    <td><img src={KeyExchange} alt="" /> Key Download</td>
                    <td>25/05/2025(6 hours ago)</td>
                    <td>6:10 pm</td>
                    <td>Rija shakir</td>
                  </tr>
                  <tr>
                    <td><img src={stopicon} alt="" /> Offline</td>
                    <td>25/05/2025(6 hours ago)</td>
                    <td>6:10 pm</td>
                    <td>Rija shakir</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Cassette Counters ">
          <div>
            <CollapsibleTabs
              title="Available"
              isOpen={openIndex === 0}
              onToggle={() => handleToggle(0)}>
              <div className='tableStyle'>
                <table>
                  <tr>
                    <th>Denomination</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                </table>
              </div>
            </CollapsibleTabs>
            <CollapsibleTabs
              title="Dispensed"
              isOpen={openIndex === 1}
              onToggle={() => handleToggle(1)}>
              <div className='tableStyle'>
                <table>
                  <tr>
                    <th>Denomination</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                </table>
              </div>
            </CollapsibleTabs>
            <CollapsibleTabs
              title="Rejected"
              isOpen={openIndex === 2}
              onToggle={() => handleToggle(2)}>
              <div className='tableStyle'>
                <table>
                  <tr>
                    <th>Denomination</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                  <tr>
                    <td>500.0</td>
                    <td>0</td>
                    <td>10000000</td>
                  </tr>
                </table>
              </div>
            </CollapsibleTabs>
          </div>
        </Tab>
        <Tab label="Supply Health">
          <div>
              {DListData?.map((item, index) => (
                <ul key={index} className='list1' style={{paddingTop:'5px'}}>
                  <input type="text" name="" id="" className='search1' placeholder='Search filename here' />
                  <li>Status<span><img src={runIcon} alt="" /> {item.Status} </span> </li>
                  <li>Available Cash<span> {item.AvailableCash}</span></li>
                  <li>Last Cash Taken<span>{item.LastCashTaken}</span> </li>
                  <li>Total Transactions<span>{item.TotalTransactions}</span> </li>
                  <li>Successful Transactions<span>{item.SuccessfulTransactions}</span> </li>
                  <li>Failed Transactions<span>{item.FailedTransactions}</span> </li>
                  <li>Health Isuues<span>{item.HealthIsuues}</span> </li>
                  <li>Rejected Transactions<span>{item.RejectedTransactions}</span> </li>
                  <li>Cash Replenishment<span>{item.CashReplenishment}</span> </li>
                </ul>
              ))}
          </div>
        </Tab>
      </Tabs>
    </div >
  )
}

export default ATMControlCenter

