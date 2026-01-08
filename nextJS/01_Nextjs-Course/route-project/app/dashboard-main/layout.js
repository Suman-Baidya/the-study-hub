export default function DashboardMainLayout({ feed, stats }) {
  return (
    <div>
      <h1>Dashboard Main Layout</h1>
      <main className="flex gap-8">
        <div className="flex-2">{feed}</div>
        <div className="flex-1">{stats}</div>
      </main>
    </div>
  );
}