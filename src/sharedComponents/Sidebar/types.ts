// types.ts
export interface Service {
    id?: number;
    name: string;
    bankicon?: string;
    servicename?: string;
    running?: number;
    stopped: number;
    children?: Service[];
    date?: string;
    owner?: string;
    ch1?: string;
    ch2?: string;
  }
  
  