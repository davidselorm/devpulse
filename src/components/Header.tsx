import React from 'react';
import { TimeFrame } from '../types/metrics';

interface HeaderProps {
  selectedTimeframe: TimeFrame;
  onSelectTimeframe: (tf: TimeFrame) => void;
  selectedRepo: string;
  onSelectRepo: (repo: string) => void;
  repos: string[];
}

export const Header: React.FC<HeaderProps> = ({
  selectedTimeframe,
  onSelectTimeframe,
  selectedRepo,
  onSelectRepo,
  repos,
}) => {
  return (
    <header className="pulse-header">
      <div className="header-left">
        <div className="brand">
          <div className="brand-logo-glow">
            <span className="pulse-indicator"></span>
          </div>
          <div>
            <div className="brand-title-wrap">
              <span className="brand-name">DevPulse</span>
              <span className="brand-version">v2.4</span>
            </div>
            <p className="brand-tagline">Autonomous Developer Telemetry & DORA Engine</p>
          </div>
        </div>

        <div className="repo-selector-wrap">
          <label htmlFor="repo-select" className="selector-label">Repository</label>
          <select
            id="repo-select"
            className="repo-select"
            value={selectedRepo}
            onChange={(e) => onSelectRepo(e.target.value)}
          >
            {repos.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="header-right">
        <div className="timeframe-group">
          {(['24h', '7d', '30d', '90d'] as TimeFrame[]).map((tf) => (
            <button
              key={tf}
              type="button"
              className={`timeframe-btn ${selectedTimeframe === tf ? 'active' : ''}`}
              onClick={() => onSelectTimeframe(tf)}
            >
              {tf.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="telemetry-badge">
          <span className="badge-dot"></span>
          <span>Live Ingestion: 24.8 evt/s</span>
        </div>
      </div>
    </header>
  );
};
