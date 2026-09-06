import React from 'react';
import { ServiceHealth } from '../types/metrics';

interface ServiceStatusProps {
  services: ServiceHealth[];
}

export const ServiceStatus: React.FC<ServiceStatusProps> = ({ services }) => {
  return (
    <div className="services-strip">
      <div className="services-title">
        <span className="status-globe">●</span>
        <span>Infrastructure Health</span>
      </div>
      <div className="services-grid">
        {services.map((svc) => (
          <div key={svc.name} className="service-card">
            <div className="service-header">
              <span className="service-name">{svc.name}</span>
              <span className={`status-pill ${svc.status}`}>{svc.status}</span>
            </div>
            <div className="service-metrics">
              <span>Latency: <strong>{svc.latencyMs}ms</strong></span>
              <span>Uptime: <strong>{svc.uptimePercentage}%</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
