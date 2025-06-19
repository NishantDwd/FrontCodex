import React from 'react';

// Example data for the cards
const statsData = [
  {
    title: 'Total Users',
    value: '12,480',
    unit: '',
    change: '+8%',
    changeDir: 'up',
    changeColor: '#3bb273',
    sub: 'since last year',
    bars: [
      { year: 2022, value: 12480, max: 12480 },
      { year: 2021, value: 11500, max: 12480 },
      { year: 2020, value: 9800, max: 12480 },
      { year: 2019, value: 7500, max: 12480 },
    ],
    breakdown: 'See user analytics',
  },
  {
    title: 'Active Projects',
    value: '320',
    unit: '',
    change: '+12%',
    changeDir: 'up',
    changeColor: '#3bb273',
    sub: 'since last year',
    bars: [
      { year: 2022, value: 320, max: 350 },
      { year: 2021, value: 285, max: 350 },
      { year: 2020, value: 210, max: 350 },
      { year: 2019, value: 150, max: 350 },
    ],
    breakdown: 'View all projects',
  },
  {
    title: 'Revenue Generated',
    value: '$1,200,000',
    unit: '',
    change: '+21%',
    changeDir: 'up',
    changeColor: '#3bb273',
    sub: 'since last year',
    bars: [
      { year: 2022, value: 1200000, max: 1200000 },
      { year: 2021, value: 990000, max: 1200000 },
      { year: 2020, value: 700000, max: 1200000 },
      { year: 2019, value: 400000, max: 1200000 },
    ],
    breakdown: 'Download revenue report',
  },
];

const barColor = 'linear-gradient(90deg,#3bb273 0%,#2d8cf0 100%)';

function StatCard({ stat }) {
  return (
    <div className="stat-card">
      <div className="stat-title">{stat.title}</div>
      <div className="stat-value-row">
        <span className="stat-value">{stat.value}</span>
        <span className="stat-unit">{stat.unit}</span>
      </div>
      <div className="stat-change-row">
        <span className="stat-change" style={{ color: stat.changeColor }}>
          {stat.changeDir === 'up' ? '↑' : '↓'} {stat.change}
        </span>
        <span className="stat-sub">{stat.sub}</span>
      </div>
      <div className="stat-bars">
        {stat.bars.map((bar, idx) => (
          <div key={bar.year} className="stat-bar-row">
            <span className="stat-bar-year">{bar.year}</span>
            <span className="stat-bar-value">{bar.value.toLocaleString()}</span>
            <div className="stat-bar-bg">
              <div
                className="stat-bar-fg"
                style={{
                  width: `${(bar.value / bar.max) * 100}%`,
                  background: barColor,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="stat-breakdown">
        <a href="#" className="stat-breakdown-link">{stat.breakdown}</a>
      </div>
    </div>
  );
}

// Simple bar chart for demonstration
const graphData = [
  { label: 'Jan', value: 400 },
  { label: 'Feb', value: 600 },
  { label: 'Mar', value: 800 },
  { label: 'Apr', value: 700 },
  { label: 'May', value: 900 },
  { label: 'Jun', value: 1200 },
  { label: 'Jul', value: 1100 },
  { label: 'Aug', value: 950 },
  { label: 'Sep', value: 1000 },
  { label: 'Oct', value: 1300 },
  { label: 'Nov', value: 1250 },
  { label: 'Dec', value: 1400 },
];

function ModernBarGraph() {
  const maxValue = Math.max(...graphData.map(d => d.value));
  return (
    <div className="modern-graph-container">
      <div className="modern-graph-title">Monthly Revenue Growth</div>
      <div className="modern-graph-subtitle">2022</div>
      <div className="modern-graph-bars">
        {graphData.map((d, i) => (
          <div key={d.label} className="modern-graph-bar-group">
            <div
              className="modern-graph-bar"
              style={{
                height: `${(d.value / maxValue) * 180}px`,
                background: 'linear-gradient(180deg,#2d8cf0 0%,#3bb273 100%)',
              }}
              title={`$${d.value.toLocaleString()}`}
            />
            <div className="modern-graph-label">{d.label}</div>
          </div>
        ))}
      </div>
      <div className="modern-graph-axis">
        <span>0</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats-page creative-bg">
      <div className="stats-cards-row">
        {statsData.map((stat, idx) => (
          <StatCard stat={stat} key={idx} />
        ))}
      </div>
      <div className="stats-graph-section">
        <h2 style={{ margin: '2rem 0 1rem 0', textAlign: 'center', color: '#2d8cf0', letterSpacing: 2 }}>
          DASHBOARD INSIGHTS
        </h2>
        <ModernBarGraph />
      </div>
    </div>
  );
}