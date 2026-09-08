export type DoraRating = 'Elite' | 'High' | 'Medium' | 'Low';

export interface DoraMetricsInput {
  deploymentsPerDay: number;
  leadTimeHours: number;
  failureRatePercent: number;
  mttrHours: number;
}

export interface DoraClassification {
  deploymentFrequencyRating: DoraRating;
  leadTimeRating: DoraRating;
  changeFailureRateRating: DoraRating;
  mttrRating: DoraRating;
  overallRating: DoraRating;
}

export function classifyDoraMetrics(metrics: DoraMetricsInput): DoraClassification {
  // 1. Deployment Frequency
  const dfRating: DoraRating = 
    metrics.deploymentsPerDay >= 1 ? 'Elite' :
    metrics.deploymentsPerDay >= 0.14 ? 'High' : // >= once per week
    metrics.deploymentsPerDay >= 0.03 ? 'Medium' : 'Low';

  // 2. Lead Time for Changes
  const ltRating: DoraRating = 
    metrics.leadTimeHours <= 24 ? 'Elite' :
    metrics.leadTimeHours <= 168 ? 'High' : // <= 1 week
    metrics.leadTimeHours <= 720 ? 'Medium' : 'Low';

  // 3. Change Failure Rate
  const cfrRating: DoraRating = 
    metrics.failureRatePercent <= 5 ? 'Elite' :
    metrics.failureRatePercent <= 10 ? 'High' :
    metrics.failureRatePercent <= 15 ? 'Medium' : 'Low';

  // 4. Mean Time to Restore (MTTR)
  const mttrRating: DoraRating = 
    metrics.mttrHours <= 1 ? 'Elite' :
    metrics.mttrHours <= 24 ? 'High' :
    metrics.mttrHours <= 168 ? 'Medium' : 'Low';

  // Compute composite score (Elite=4, High=3, Medium=2, Low=1)
  const scoreMap: Record<DoraRating, number> = { Elite: 4, High: 3, Medium: 2, Low: 1 };
  const avgScore = (scoreMap[dfRating] + scoreMap[ltRating] + scoreMap[cfrRating] + scoreMap[mttrRating]) / 4;

  const overallRating: DoraRating = 
    avgScore >= 3.5 ? 'Elite' :
    avgScore >= 2.5 ? 'High' :
    avgScore >= 1.5 ? 'Medium' : 'Low';

  return {
    deploymentFrequencyRating: dfRating,
    leadTimeRating: ltRating,
    changeFailureRateRating: cfrRating,
    mttrRating: mttrRating,
    overallRating
  };
}
