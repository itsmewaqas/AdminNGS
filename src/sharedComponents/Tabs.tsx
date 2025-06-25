import React, { useState } from "react";
import type { ReactNode } from 'react';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div>{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabLabels = React.Children.map(children, (child: any) => child.props.label);
  const tabContents = React.Children.map(children, (child: any) => child.props.children);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabLabels?.map((label:string, index:number) => (
          <button
            key={index}
            className={`tab-btn ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <div className="tab-content">{tabContents && tabContents[activeTab]}</div>
      </div>
    </div>
  );
};

export { Tabs, Tab };
