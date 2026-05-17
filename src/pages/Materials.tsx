import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Search, Plus, Filter, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const mockMaterials = [
  { id: 'MAT-001', name: 'Portland Cement M500', category: 'Concrete', unit: 'Bags', inStock: 120, min: 200, reserved: 50, supplier: 'Cemex', site: 'Warehouse A' },
  { id: 'MAT-002', name: 'Steel Rebar 12mm', category: 'Metal', unit: 'Tons', inStock: 15, min: 10, reserved: 8, supplier: 'SteelTech', site: 'Skyline Tower' },
  { id: 'MAT-003', name: 'Electrical Cables 3x2.5', category: 'Electrical', unit: 'Meters', inStock: 500, min: 1000, reserved: 500, supplier: 'VoltWire', site: 'Warehouse B' },
  { id: 'MAT-004', name: 'Gypsum Board 12.5mm', category: 'Finishing', unit: 'Sheets', inStock: 450, min: 300, reserved: 150, supplier: 'Knauf', site: 'City Hospital' },
];

export function Materials() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const getStatus = (inStock: number, min: number) => {
    if (inStock === 0) return { label: 'Out of Stock', variant: 'danger' as const };
    if (inStock <= min) return { label: t('materials.lowStock'), variant: 'warning' as const };
    return { label: t('materials.inStock'), variant: 'success' as const };
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('materials.title')}</h1>
          <p className="text-sm text-slate-500">{t('materials.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            {t('materials.matReq')}
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            {t('materials.addMat')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-brand-primary text-white border-none">
          <div className="p-5">
            <Package className="w-6 h-6 mb-3 opacity-80" />
            <h3 className="text-2xl font-bold">1,240</h3>
            <p className="text-sm opacity-80">{t('materials.total')}</p>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <div className="w-10 h-10 rounded bg-red-50 text-red-600 flex items-center justify-center mb-3">
              <span className="font-bold">12</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">12</h3>
            <p className="text-sm text-slate-500">{t('materials.lowStock')}</p>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <div className="w-10 h-10 rounded bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <span className="font-bold">34</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">34</h3>
            <p className="text-sm text-slate-500">{t('materials.pendingReq')}</p>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <span className="font-bold">8</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">8</h3>
            <p className="text-sm text-slate-500">{t('materials.delivToday')}</p>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder={t('materials.search')} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all bg-slate-50"
            />
          </div>
          <Button variant="outline" className="gap-2 shrink-0">
            <Filter className="w-4 h-4" />
            {t('materials.filter')}
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600 font-medium">
              <tr>
                <th className="px-5 py-3">{t('materials.material')}</th>
                <th className="px-5 py-3">{t('materials.category')}</th>
                <th className="px-5 py-3 text-right">{t('materials.inStock')}</th>
                <th className="px-5 py-3 text-right">{t('materials.reserved')}</th>
                <th className="px-5 py-3 text-right">{t('materials.available')}</th>
                <th className="px-5 py-3">{t('materials.location')}</th>
                <th className="px-5 py-3">{t('materials.status')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockMaterials.map((m) => {
                const status = getStatus(m.inStock, m.min);
                const available = m.inStock - m.reserved;
                
                return (
                  <tr key={m.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-slate-900">{m.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{m.id} • {t('materials.unit')}: {m.unit}</div>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{m.category}</td>
                    <td className="px-5 py-4 text-right font-medium">{m.inStock}</td>
                    <td className="px-5 py-4 text-right text-slate-500">{m.reserved}</td>
                    <td className="px-5 py-4 text-right font-medium text-slate-900">{available} {m.unit}</td>
                    <td className="px-5 py-4">
                      <div className="text-slate-800">{m.site}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{m.supplier}</div>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant={status.variant}>{status.label}</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
