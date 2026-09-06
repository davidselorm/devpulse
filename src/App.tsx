import { useState } from 'react';
import { TimeFrame } from './types/metrics';
import { getDoraMetrics, MOCK_PRS, MOCK_ACTIVITY, MOCK_SERVICES } from './data/mockMetrics';
import { Header } from './components/Header';
import { DoraCards } from './components/DoraCards';
import { VelocityChart } from './components/VelocityChart';
import { PRTelemetry } from './components/PRTelemetry';
import { ActivityStream } from './components/ActivityStream';
import { ServiceStatus } from './components/ServiceStatus';
import './App.css';

function App() {
  const [timeframe, setTimeframe] = useState<TimeFrame>('7d');
  const [selectedRepo, setSelectedRepo] = useState('davidselorm/devpulse');
  const [notification, setNotification] = useState<string | null>(null);

  const repos = [
    'davidselorm/devpulse',
    'davidselorm/shebeautyservices',
    'davidselorm/website.admission',
    'davidselorm/snapchat-clone',
  ];

  const doraMetrics = getDoraMetrics(timeframe);

  const triggerSync = () => {
    setNotification('Telemetry re-synced across GitHub Webhooks and CI pipelines.');
    setTimeout(() => setNotification(null), 3500);
  };

  return (
    <div className="devpulse-container">
      {notification && (
        <div className="notification-toast">
          <span className="toast-icon">⚡</span>
          <span>{notification}</span>
        </div>
      )}

      <Header
        selectedTimeframe={timeframe}
        onSelectTimeframe={setTimeframe}
        selectedRepo={selectedRepo}
        onSelectRepo={setSelectedRepo}
        repos={repos}
      />

      <main className="dashboard-content">
        <div className="control-bar">
          <div className="control-stats">
            <span className="stat-pill active">● Live Telemetry Pipeline</span>
            <span className="stat-pill">DORA Status: <strong>Tier 1 Elite</strong></span>
            <span className="stat-pill">Active Developers: <strong>14</strong></span>
          </div>

          <div className="control-actions">
            <button type="button" className="btn-sync" onClick={triggerSync}>
              🔄 Sync GitHub Telemetry
            </button>
          </div>
        </div>

        <ServiceStatus services={MOCK_SERVICES} />

        <DoraCards metrics={doraMetrics} />

        <div className="telemetry-split-layout">
          <VelocityChart />
        </div>

        <div className="dual-panel-grid">
          <PRTelemetry prs={MOCK_PRS} />
          <ActivityStream events={MOCK_ACTIVITY} />
        </div>
      </main>

      <footer className="dashboard-footer">
        <div>
          <strong>DevPulse</strong> — Built with TypeScript, React, and automated GitHub Telemetry.
        </div>
        <div>
          Autonomous Agentic Engineering System &copy; 2026 davidselorm
        </div>
      </footer>
    </div>
  );
}

export default App;
