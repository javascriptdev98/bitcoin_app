import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Date');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab">
        <button
          className={activeTab === 'Date' ? 'active' : ''}
          onClick={() => handleTabClick('Date')}
        >
          Date
        </button>
        <button
          className={activeTab === 'Week' ? 'active' : ''}
          onClick={() => handleTabClick('Week')}
        >
          Week
        </button>
        <button
          className={activeTab === 'Month' ? 'active' : ''}
          onClick={() => handleTabClick('Month')}
        >
          Month
        </button>
        <button
          className={activeTab === 'Year' ? 'active' : ''}
          onClick={() => handleTabClick('Year')}
        >
          Year
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'Date'  }
        {activeTab === 'Week'  }
        {activeTab === 'Month' }
        {activeTab === 'Year' }
      </div>
    </div>
  );
};

export default Tabs;
