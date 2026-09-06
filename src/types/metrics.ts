export type TimeFrame = '24h' | '7d' | '30d' | '90d';

export type DoraRating = 'Elite' | 'High' | 'Medium' | 'Low';

export interface DoraMetric {
  id: string;
  name: string;
  value: string;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  rating: DoraRating;
  description: string;
  sparkline: number[];
}

export interface PullRequest {
  id: string;
  title: string;
  author: string;
  branch: string;
  commitsCount: number;
  additions: number;
  deletions: number;
  reviewStatus: 'approved' | 'changes_requested' | 'in_review' | 'pending';
  ciStatus: 'success' | 'running' | 'failed';
  turnaroundHours: number;
  createdAt: string;
}

export interface ActivityEvent {
  id: string;
  hash: string;
  author: string;
  authorAvatar: string;
  message: string;
  branch: string;
  additions: number;
  deletions: number;
  timestamp: string;
}

export interface ServiceHealth {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  latencyMs: number;
  uptimePercentage: number;
}
