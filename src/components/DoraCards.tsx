import React from 'react';
import { DoraMetric } from '../types/metrics';

interface DoraCardsProps {
  metrics: DoraMetric[];
}

export const DoraCards: React.FC<DoraCardsProps> = ({ metrics }) => {
  return (
    <div className="dora-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">DORA Engineering Metrics</h2>
          <p className="section-subtitle">Industry standard benchmarks for DevOps & Software Delivery Performance</p>
        </div>
        <div className="overall-rating-badge">
          <span>Target Standard:</span>
          <span className="rating-tag elite">ELITE TIER</span>
        </div>
      </div>

      <div className="dora-grid">
        {metrics.map((metric) => {
          const isPositiveChange = metric.id === 'deploy-freq' ? metric.change > 0 : metric.change < 0;
          return (
            <div key={metric.id} className="dora-card">
              <div className="dora-card-top">
                <span className="metric-title">{metric.name}</span>
                <span className={`rating-pill ${metric.rating.toLowerCase()}`}>
                  {metric.rating}
                </span>
              </div>

              <div className="metric-value-row">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-unit">{metric.unit}</span>
              </div>

              <div className="trend-row">
                <span className={`trend-badge ${isPositiveChange ? 'positive' : 'negative'}`}>
                  {metric.change > 0 ? `+${metric.change}%` : `${metric.change}%`}
                </span>
                <span className="trend-label">vs prior window</span>
              </div>

              {/* SVG Sparkline */}
              <div className="sparkline-container">
                <svg viewBox="0 0 160 36" className="sparkline-svg">
                  {(() => {
                    const min = Math.min(...metric.sparkline);
                    const max = Math.max(...metric.sparkline);
                    const range = max - min || 1;
                    const points = metric.sparkline
                      .map((val, idx) => {
                        const x = (idx / (metric.sparkline.length - 1)) * 160;
                        const y = 32 - ((val - min) / range) * 26;
                        return `${x.toFixed(1)},${y.toFixed(1)}`;
                      })
                      .join(' ');

                    return (
                      <>
                        <polyline
                          fill="none"
                          stroke="url(#spark-grad)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={points}
                        />
                        <defs>
                          <linearGradient id="spark-grad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </>
                    );
                  })()}
                </svg>
              </div>

              <p className="metric-desc">{metric.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
