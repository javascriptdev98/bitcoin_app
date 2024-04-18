import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Page A', amt: 2000 },
  { name: 'Page B', amt: 2200 },
  { name: 'Page C', amt: 2150 },
  { name: 'Page D', amt: 2200 },
  { name: 'Page E', amt: 2090 },
  { name: 'Page F', amt: 2100 },
];

const Tabs = () => {


  return (
    <div className="chart-container">
      <div className='chart-label'>

        <div className=" lower-point">
          <div className="dot red"></div>
          <span>Lower: $4.895</span>
        </div>
        {/* Label for higher point */}
        <div className="higher-point">
          <div className="dot green"></div>
          <span> Higher: $6.857</span>
        </div>


      </div>

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="coloramt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffc658" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area type="monotone" dataKey="amt" stroke="#ffc658" fill="url(#coloramt)" strokeWidth={3} stackId="1" />
          <Tooltip />

        </AreaChart>
        <div className="bottom-point">
          <div className="dot orange"></div>
          <span>1 BTC = $5.483</span>
        </div>
      </ResponsiveContainer>
      
    </div>
  );
}

export default Tabs;
