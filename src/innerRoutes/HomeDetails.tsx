import { useState } from 'react';
import introLogo from '../assets/images/introLogo.svg';
import mobileIcon from '../assets/images/mobile1.svg';
import runicon from '../assets/images/runIcon.png';
import stopicon from '../assets/images/stopIcon.png';
import calender from '../assets/images/calender.png';
import people from '../assets/images/people.png';
import { Tabs, Tab } from "../sharedComponents/Tabs";

import Duplicate from '../assets/images/Duplicate.svg';
import Stop from '../assets/images/Stop.svg';
import Start from '../assets/images/Start.svg';
import Restart from '../assets/images/Restart.svg';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

function HomeDetails() {
  const [count, setCount] = useState(0)

  const data = [
    {
      name: '11:10',
      uv: 0.06,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '11:20',
      uv: 0.05,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '11:30',
      uv: 0.04,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '11:33',
      uv: 0.03,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '11:36',
      uv: 0,
      pv: 4800,
      amt: 2181,
    }
  ];

  return (
    <div>
      <div className='generalHeader'>
        <h1><img src={mobileIcon} alt="" /> Mobile</h1>
        <ul>
          <li><img src={stopicon} alt="" /> Stopped </li>
          <li><img src={calender} alt="" />  25/04</li>
          <li><img src={people} alt="" />  Rija Shakir</li>
        </ul>
      </div>
      <Tabs>
        <Tab label="Details">
          <div>
            <div className='infoBox'>
              <h2>Description</h2>
              <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              <div className='chartBox'>
                <h3>CPU Usage</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    width={460}
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#2A7235" fill="#71D9A8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className='chartBox'>
                <h3>RAM Usage</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    width={460}
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#2A3472" fill="#718BD9" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Configuration">
          <div>
            <div className='infoBox'>
              <h2>Connection</h2>
              <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='infoBox'>
              <h2>Path</h2>
              <p>https://avanzasolutions.com/</p>
            </div>
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
        </Tab>
      </Tabs>
    </div>
  )
}

export default HomeDetails

