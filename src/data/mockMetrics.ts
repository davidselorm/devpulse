import { DoraMetric, PullRequest, ActivityEvent, ServiceHealth, TimeFrame } from '../types/metrics';

export const getDoraMetrics = (tf: TimeFrame): DoraMetric[] => {
  const multiplier = tf === '24h' ? 0.2 : tf === '7d' ? 1 : tf === '30d' ? 4 : 12;
  return [
    {
      id: 'deploy-freq',
      name: 'Deployment Frequency',
      value: (14.2 * (tf === '24h' ? 0.8 : 1)).toFixed(1),
      unit: 'deploys / week',
      change: +18.4,
      trend: 'up',
      rating: 'Elite',
      description: 'Production deployments automated via CI/CD pipelines',
      sparkline: [8, 10, 11, 14, 12, 16, 15, 14]
    },
    {
      id: 'lead-time',
      name: 'Lead Time for Changes',
      value: (1.4 * (tf === '30d' ? 1.1 : 1)).toFixed(1),
      unit: 'hours (commit to prod)',
      change: -24.5,
      trend: 'down',
      rating: 'Elite',
      description: 'Median elapsed time from first commit to production deployment',
      sparkline: [3.2, 2.8, 2.1, 1.9, 1.8, 1.5, 1.4, 1.4]
    },
    {
      id: 'change-fail-rate',
      name: 'Change Failure Rate',
      value: '2.8%',
      unit: 'hotfix / rollback rate',
      change: -3.2,
      trend: 'down',
      rating: 'Elite',
      description: 'Percentage of changes to production that require remediation',
      sparkline: [6.5, 5.2, 4.8, 3.9, 3.4, 3.1, 2.9, 2.8]
    },
    {
      id: 'mttr',
      name: 'Mean Time to Restore (MTTR)',
      value: '18.5',
      unit: 'minutes',
      change: -41.2,
      trend: 'down',
      rating: 'Elite',
      description: 'Average time taken to resolve unplanned production incidents',
      sparkline: [45, 38, 32, 28, 24, 20, 19, 18.5]
    }
  ];
};

export const MOCK_PRS: PullRequest[] = [
  {
    id: 'PR-108',
    title: 'feat(auth): Add zero-trust biometric OAuth2 challenge',
    author: 'davidselorm',
    branch: 'feat/auth-biometric',
    commitsCount: 4,
    additions: 432,
    deletions: 89,
    reviewStatus: 'approved',
    ciStatus: 'success',
    turnaroundHours: 1.8,
    createdAt: '35m ago'
  },
  {
    id: 'PR-107',
    title: 'perf(telemetry): Stream real-time kernel metrics over WebSockets',
    author: 'sarah-dev',
    branch: 'perf/ws-telemetry',
    commitsCount: 6,
    additions: 814,
    deletions: 142,
    reviewStatus: 'in_review',
    ciStatus: 'running',
    turnaroundHours: 3.2,
    createdAt: '2h ago'
  },
  {
    id: 'PR-106',
    title: 'fix(pipeline): Resolve race condition in staging deployment lock',
    author: 'alex-k',
    branch: 'fix/pipeline-lock',
    commitsCount: 2,
    additions: 68,
    deletions: 51,
    reviewStatus: 'approved',
    ciStatus: 'success',
    turnaroundHours: 0.9,
    createdAt: '4h ago'
  },
  {
    id: 'PR-105',
    title: 'refactor(db): Migrate read replicas to async connection pooling',
    author: 'chen-wei',
    branch: 'refactor/db-replicas',
    commitsCount: 8,
    additions: 1240,
    deletions: 680,
    reviewStatus: 'changes_requested',
    ciStatus: 'failed',
    turnaroundHours: 5.4,
    createdAt: '6h ago'
  }
];

export const MOCK_ACTIVITY: ActivityEvent[] = [
  {
    id: 'act-1',
    hash: 'a7b3c91',
    author: 'davidselorm',
    authorAvatar: 'DS',
    message: 'chore: configure automated DORA ingestion workflow',
    branch: 'main',
    additions: 124,
    deletions: 18,
    timestamp: '12 mins ago'
  },
  {
    id: 'act-2',
    hash: 'f94d102',
    author: 'sarah-dev',
    authorAvatar: 'SD',
    message: 'perf: optimize reactive state hydration in metrics dashboard',
    branch: 'perf/ws-telemetry',
    additions: 245,
    deletions: 64,
    timestamp: '42 mins ago'
  },
  {
    id: 'act-3',
    hash: '3e8a49c',
    author: 'alex-k',
    authorAvatar: 'AK',
    message: 'test: add integration test suite for GitHub webhooks',
    branch: 'fix/pipeline-lock',
    additions: 390,
    deletions: 12,
    timestamp: '1 hour ago'
  },
  {
    id: 'act-4',
    hash: 'c81b7a2',
    author: 'davidselorm',
    authorAvatar: 'DS',
    message: 'feat: add telemetry sparklines and status badge components',
    branch: 'feature/dora-metrics-dashboard',
    additions: 512,
    deletions: 34,
    timestamp: '2 hours ago'
  }
];

export const MOCK_SERVICES: ServiceHealth[] = [
  { name: 'Telemetry Ingestion API', status: 'operational', latencyMs: 14, uptimePercentage: 99.98 },
  { name: 'GitHub Webhook Bridge', status: 'operational', latencyMs: 22, uptimePercentage: 99.95 },
  { name: 'CI/CD Pipeline Runner', status: 'operational', latencyMs: 45, uptimePercentage: 99.91 },
  { name: 'Production Cluster (US-East)', status: 'operational', latencyMs: 18, uptimePercentage: 99.99 }
];
