import React, { useState } from 'react';

export const VelocityChart: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'velocity' | 'leadTime'>('velocity');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const commits = [42, 58, 65, 82, 74, 28, 35];
  const prs = [9, 14, 16, 21, 19, 5, 8];

  const maxVal = 90;

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Weekly Throughput & Commit Velocity</h3>
          <p className="chart-sub">Aggregated repository commit volume and pull request completions</p>
        </div>
        <div className="chart-toggle">
          <button
            type="button"
            className={`toggle-btn ${activeMetric === 'velocity' ? 'active' : ''}`}
            onClick={() => setActiveMetric('velocity')}
          >
            Volume View
          </button>
          <button
            type="button"
            className={`toggle-btn ${activeMetric === 'leadTime' ? 'active' : ''}`}
            onClick={() => setActiveMetric('leadTime')}
          >
            Efficiency Index
          </button>
        </div>
      </div>

      <div className="bars-container">
        {days.map((day, i) => {
          const commitH = (commits[i] / maxVal) * 120;
          const prH = ((prs[i] * 4) / maxVal) * 120;

          return (
            <div key={day} className="bar-column">
              <div className="bar-track">
                <div
                  className="bar bar-commit"
                  style={{ height: `${commitH}px` }}
                  title={`${commits[i]} commits`}
                ></div>
                <div
                  className="bar bar-pr"
                  style={{ height: `${prH}px` }}
                  title={`${prs[i]} PRs`}
                ></div>
              </div>
              <span className="day-label">{day}</span>
              <span className="day-stat">{commits[i]}c / {prs[i]}p</span>
            </div>
          );
        })}
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot commit-dot"></span>
          <span>Commits pushed ({commits.reduce((a, b) => a + b, 0)} total)</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot pr-dot"></span>
          <span>PRs merged ({prs.reduce((a, b) => a + b, 0)} total)</span>
        </div>
      </div>
    </div>
  );
};
