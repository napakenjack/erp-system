import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Building2, HardHat, TrendingDown, AlertCircle, 
  Clock, FileText, CheckCircle2 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { useTranslation } from 'react-i18next';

const budgetData = [
  { name: 'Jan', planned: 4000, actual: 2400 },
  { name: 'Feb', planned: 3000, actual: 1398 },
  { name: 'Mar', planned: 2000, actual: 9800 },
  { name: 'Apr', planned: 2780, actual: 3908 },
  { name: 'May', planned: 1890, actual: 4800 },
  { name: 'Jun', planned: 2390, actual: 3800 },
];

export function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('dashboard.title')}</h1>
          <p className="text-sm text-slate-500">{t('dashboard.subtitle')}</p>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: t('dashboard.activeProjects'), value: '12', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: t('dashboard.activeSites'), value: '8', icon: HardHat, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: t('dashboard.pendingMaterials'), value: '24', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: t('dashboard.criticalTasks'), value: '5', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((kpi, i) => (
          <Card key={i}>
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{kpi.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${kpi.bg}`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t('dashboard.budgetTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}} 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="planned" fill="#94a3b8" radius={[4, 4, 0, 0]} name={t('dashboard.plannedBudget')} />
                  <Bar dataKey="actual" fill="#2563eb" radius={[4, 4, 0, 0]} name={t('dashboard.actualExpenses')} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Small List Widget */}
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.lowStock')}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {[
                { item: 'Steel Rebar A500', site: 'Skyline Tower', qty: '2 tons left', status: 'danger' },
                { item: 'Cement M500', site: 'Riverfront Oasis', qty: '15 bags left', status: 'danger' },
                { item: 'Scaffolding Pipes', site: 'Tech Park Phase 2', qty: '400 pcs left', status: 'warning' },
                { item: 'Roofing Tiles', site: 'Skyline Tower', qty: 'Low stock', status: 'warning' },
              ].map((alert, i) => (
                <div key={i} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{alert.item}</p>
                    <p className="text-xs text-slate-500">{alert.site}</p>
                  </div>
                  <Badge variant={alert.status as any}>{alert.qty}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables section */}
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.dailyReports')}</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-y border-slate-200">
              <tr>
                <th className="px-5 py-3">{t('dashboard.project')}</th>
                <th className="px-5 py-3">{t('dashboard.supervisor')}</th>
                <th className="px-5 py-3">{t('dashboard.date')}</th>
                <th className="px-5 py-3">{t('dashboard.status')}</th>
                <th className="px-5 py-3">{t('dashboard.notes')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { proj: 'Skyline Tower', user: 'Mike J.', date: 'Today, 18:00', status: 'On Track', notes: 'Foundation poured.' },
                { proj: 'Riverfront Oasis', user: 'Sarah L.', date: 'Today, 17:45', status: 'Delayed', notes: 'Material delivery late.' },
                { proj: 'Tech Park Phase 2', user: 'Alex P.', date: 'Yesterday', status: 'On Track', notes: 'Wiring 80% done.' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-5 py-4 font-medium text-slate-900">{row.proj}</td>
                  <td className="px-5 py-4 text-slate-600">{row.user}</td>
                  <td className="px-5 py-4 text-slate-600">{row.date}</td>
                  <td className="px-5 py-4">
                    <Badge variant={row.status === 'On Track' ? 'success' : 'danger'}>
                      {row.status === 'On Track' ? t('dashboard.onTrack') : t('dashboard.delayed')}
                    </Badge>
                  </td>
                  <td className="px-5 py-4 text-slate-600 text-xs truncate max-w-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
