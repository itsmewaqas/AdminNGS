// treeData.ts
import iconBank from '../../assets/images/bankIcon1.png';
import ch1 from '../../assets/images/ch1.png';
import ch2 from '../../assets/images/ch2.png';
import type {Service} from './types';

export const listData: Service[] = [
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
];
