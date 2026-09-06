import React, { useState } from 'react';
import { ActivityEvent } from '../types/metrics';

interface ActivityStreamProps {
  events: ActivityEvent[];
}

export const ActivityStream: React.FC<ActivityStreamProps> = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = events.filter(
    (ev) =>
      ev.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.hash.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="telemetry-panel">
      <div className="panel-header">
        <div className="panel-title-wrap">
          <h3 className="panel-title">Real-Time Commit Stream</h3>
          <span className="count-chip live-chip">LIVE</span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search commits, authors, SHAs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="activity-list">
        {filtered.map((item) => (
          <div key={item.id} className="activity-card">
            <div className="avatar-wrap">
              <div className="avatar">{item.authorAvatar}</div>
            </div>
            <div className="activity-body">
              <div className="activity-top">
                <span className="commit-hash">{item.hash}</span>
                <span className="commit-author">@{item.author}</span>
                <span className="activity-time">{item.timestamp}</span>
              </div>
              <p className="commit-msg">{item.message}</p>
              <div className="activity-footer">
                <span className="commit-branch">branch: {item.branch}</span>
                <div className="activity-diff">
                  <span className="additions">+{item.additions}</span>
                  <span className="deletions">-{item.deletions}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
