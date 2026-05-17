import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Download, Filter, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { useTranslation } from 'react-i18next';

const expenseData = [
  { name: 'Materials', value: 4500000 },
  { name: 'Labor', value: 3200000 },
  { name: 'Equipment', value: 1500000 },
  { name: 'Subcontractors', value: 2800000 },
  { name: 'Other', value: 500000 },
];

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#6366f1', '#94a3b8'];

export function Finance() {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('finance.title')}</h1>
          <p className="text-sm text-slate-500">{t('finance.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            {t('finance.export')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: t('finance.totalBudget'), value: '$250.0M', trend: '+5.2%', up: true, icon: DollarSign },
          { label: t('finance.actualExp'), value: '$125.0M', trend: '+12.4%', up: false, icon: TrendingDown },
          { label: t('finance.remBudget'), value: '$125.0M', trend: t('finance.onTrack'), up: true, icon: TrendingUp },
          { label: t('finance.estProfit'), value: '18.5%', trend: '+1.2%', up: true, icon: TrendingUp },
        ].map((kpi, i) => (
          <Card key={i}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <kpi.icon className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{kpi.value}</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className={kpi.up ? 'text-emerald-600' : 'text-red-600 font-medium'}>
                  {kpi.trend}
                </span>
                <span className="text-slate-400">{t('finance.vsLastYear')}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>{t('finance.expBreakdown')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value) => `$${(Number(value)/1000000).toFixed(1)}M`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>{t('finance.recentPayments')}</CardTitle>
            <Button variant="ghost" size="sm">{t('finance.viewAll')}</Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-medium">
                <tr>
                  <th className="px-5 py-3 border-y border-slate-100">{t('finance.invoice')}</th>
                  <th className="px-5 py-3 border-y border-slate-100">{t('finance.contractor')}</th>
                  <th className="px-5 py-3 border-y border-slate-100">{t('finance.project')}</th>
                  <th className="px-5 py-3 border-y border-slate-100 text-right">{t('finance.amount')}</th>
                  <th className="px-5 py-3 border-y border-slate-100">{t('finance.date')}</th>
                  <th className="px-5 py-3 border-y border-slate-100">{t('finance.status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { id: 'INV-2023-001', contractor: 'SteelTech LLC', proj: 'Skyline Tower', amount: 150000, date: 'Oct 01, 2025', status: 'Paid' },
                  { id: 'INV-2023-002', contractor: 'Cemex Corp', proj: 'Riverfront Oasis', amount: 75000, date: 'Oct 03, 2025', status: 'Pending' },
                  { id: 'INV-2023-003', contractor: 'VoltWire Inc', proj: 'Tech Park Phase 2', amount: 20000, date: 'Oct 05, 2025', status: 'Processing' },
                  { id: 'INV-2023-004', contractor: 'Knauf Ltd', proj: 'City Hospital Annex', amount: 12000, date: 'Oct 06, 2025', status: 'Paid' },
                  { id: 'INV-2023-005', contractor: 'HeavyLift Crane Service', proj: 'Skyline Tower', amount: 45000, date: 'Oct 08, 2025', status: 'Overdue' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-5 py-4 font-medium text-slate-900">{row.id}</td>
                    <td className="px-5 py-4 text-slate-700">{row.contractor}</td>
                    <td className="px-5 py-4 text-slate-600">{row.proj}</td>
                    <td className="px-5 py-4 text-right font-medium text-slate-900">${row.amount.toLocaleString()}</td>
                    <td className="px-5 py-4 text-slate-600">{row.date}</td>
                    <td className="px-5 py-4">
                      <Badge variant={
                        row.status === 'Paid' ? 'success' : 
                        row.status === 'Pending' ? 'warning' :
                        row.status === 'Overdue' ? 'danger' : 'default'}
                      >
                        {row.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
