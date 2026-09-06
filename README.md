# DevPulse ⚡
> Autonomous Developer Telemetry, DORA Metrics & Engineering Health Dashboard.

![DevPulse Status](https://img.shields.io/badge/DORA_Status-Tier_1_Elite-10b981?style=for-the-badge)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

DevPulse is a high-performance, real-time developer productivity and engineering velocity dashboard designed for modern software teams. It provides continuous visibility into DORA delivery metrics, PR review throughput, CI pipeline bottlenecks, and commit velocity.

---

## 🚀 Core Features

- **DORA Engineering Performance Metrics:**
  - **Deployment Frequency**: Automated production release velocity tracker with sparkline trajectory.
  - **Lead Time for Changes**: Median duration from commit initiation to production deployment.
  - **Change Failure Rate**: Real-time rollback, hotfix, and incident regression tracking.
  - **Mean Time to Restore (MTTR)**: Service outage recovery telemetry.
- **Weekly Commit & PR Throughput Visualization**: Dual-bar velocity graph tracking merged PRs and commit activity.
- **Active Pull Request Radar**: Live turnaround tracking, review statuses (`approved`, `in_review`, `changes_requested`), and CI/CD validation results.
- **Real-Time Commit Activity Stream**: Instant stream of commits across repositories with interactive search and line diff stats.
- **Service & Infrastructure Health Monitor**: Latency and uptime telemetry across ingestion gateways and CI pipelines.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8 with fast HMR
- **Linter**: Oxlint
- **Styling**: Cyber-Dark Developer Theme (Glassmorphism + CSS Custom Properties)

---

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm / pnpm / yarn

### Installation & Local Run

```bash
# Clone the repository
git clone https://github.com/davidselorm/devpulse.git
cd devpulse

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/davidselorm/devpulse/issues).

---

## 📄 License

MIT © 2026 [davidselorm](https://github.com/davidselorm)
