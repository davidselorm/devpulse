import React, { useState } from 'react';
import { PullRequest } from '../types/metrics';

interface PRTelemetryProps {
  prs: PullRequest[];
}

export const PRTelemetry: React.FC<PRTelemetryProps> = ({ prs }) => {
  const [filter, setFilter] = useState<'all' | 'approved' | 'in_review'>('all');

  const filteredPrs = prs.filter((p) => {
    if (filter === 'all') return true;
    return p.reviewStatus === filter;
  });

  return (
    <div className="telemetry-panel">
      <div className="panel-header">
        <div className="panel-title-wrap">
          <h3 className="panel-title">Active Pull Requests & Reviews</h3>
          <span className="count-chip">{prs.length} active</span>
        </div>

        <div className="filter-tabs">
          <button
            type="button"
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-tab ${filter === 'approved' ? 'active' : ''}`}
            onClick={() => setFilter('approved')}
          >
            Approved
          </button>
          <button
            type="button"
            className={`filter-tab ${filter === 'in_review' ? 'active' : ''}`}
            onClick={() => setFilter('in_review')}
          >
            In Review
          </button>
        </div>
      </div>

      <div className="prs-list">
        {filteredPrs.map((pr) => (
          <div key={pr.id} className="pr-item">
            <div className="pr-left">
              <span className="pr-id">{pr.id}</span>
              <div className="pr-details">
                <span className="pr-title">{pr.title}</span>
                <div className="pr-meta">
                  <span className="branch-tag"> {pr.branch}</span>
                  <span className="author-tag">by @{pr.author}</span>
                  <span className="time-tag">{pr.createdAt}</span>
                </div>
              </div>
            </div>

            <div className="pr-right">
              <div className="diff-stats">
                <span className="additions">+{pr.additions}</span>
                <span className="deletions">-{pr.deletions}</span>
              </div>
              <span className={`ci-badge ci-${pr.ciStatus}`}>{pr.ciStatus}</span>
              <span className={`review-badge review-${pr.reviewStatus}`}>
                {pr.reviewStatus.replace('_', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
