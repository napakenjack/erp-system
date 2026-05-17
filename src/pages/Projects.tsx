import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Search, Plus, Filter, MoreVertical } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const mockProjects = [
  { id: 'PRJ-101', name: 'Skyline Tower', client: 'City Dev Group', location: 'Downtown', start: '2025-01-10', end: '2026-06-30', budget: 45000000, actual: 12500000, status: 'In Progress', progress: 28, manager: 'Alex Petrov' },
  { id: 'PRJ-102', name: 'Riverfront Oasis', client: 'Luxe Living', location: 'West End', start: '2024-03-15', end: '2025-12-01', budget: 78000000, actual: 65000000, status: 'Delayed', progress: 82, manager: 'Sarah Lee' },
  { id: 'PRJ-103', name: 'Tech Park Phase 2', client: 'Innovate Corp', location: 'North District', start: '2025-06-01', end: '2026-11-15', budget: 120000000, actual: 4000000, status: 'Planning', progress: 5, manager: 'Mike Johnson' },
  { id: 'PRJ-104', name: 'City Hospital Annex', client: 'Dept of Health', location: 'Medical Center', start: '2023-09-01', end: '2025-04-30', budget: 35000000, actual: 33000000, status: 'Near Completion', progress: 95, manager: 'Elena Rostoff' },
];

export function Projects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState(mockProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // New Project Form State
  const [formData, setFormData] = useState({
    name: '', client: '', location: '', budget: '', start: '', end: '', manager: '', status: 'Planning'
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'In Progress': return 'info';
      case 'Planning': return 'default';
      case 'Delayed': return 'danger';
      case 'Near Completion': return 'success';
      default: return 'default';
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: `PRJ-${Math.floor(Math.random() * 1000)}`,
      name: formData.name,
      client: formData.client,
      location: formData.location,
      start: formData.start,
      end: formData.end,
      budget: Number(formData.budget),
      actual: 0,
      status: formData.status,
      progress: 0,
      manager: formData.manager
    };
    setProjects([newProject, ...projects]);
    setIsModalOpen(false);
    setFormData({ name: '', client: '', location: '', budget: '', start: '', end: '', manager: '', status: 'Planning' });
  };

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('projects.title')}</h1>
          <p className="text-sm text-slate-500">{t('projects.subtitle')}</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          {t('projects.createBtn')}
        </Button>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder={t('projects.search')} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all bg-slate-50"
            />
          </div>
          <Button variant="outline" className="gap-2 shrink-0">
            <Filter className="w-4 h-4" />
            {t('projects.filters')}
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600 font-medium">
              <tr>
                <th className="px-5 py-3">{t('projects.projectId')}</th>
                <th className="px-5 py-3">{t('projects.details')}</th>
                <th className="px-5 py-3">{t('projects.budgetActual')}</th>
                <th className="px-5 py-3">{t('projects.timeline')}</th>
                <th className="px-5 py-3">{t('projects.manager')}</th>
                <th className="px-5 py-3">{t('projects.status')}</th>
                <th className="px-5 py-3 text-right">{t('projects.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProjects.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900">{p.id}</td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-slate-800">{p.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{p.client} • {p.location}</div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-slate-800">${(p.budget/1000000).toFixed(1)}M</div>
                    <div className="text-xs text-slate-500 mt-0.5">{t('projects.spent')}: ${(p.actual/1000000).toFixed(1)}M</div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-slate-800">{p.start}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{t('projects.to')} {p.end}</div>
                  </td>
                  <td className="px-5 py-4 text-slate-700">{p.manager}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-2">
                      <Badge variant={getStatusBadge(p.status) as any} className="w-fit">
                        {p.status}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-primary" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{p.progress}%</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProjects.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-500">
                    {t('projects.noProjects')}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={t('projects.createNew')}>
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">{t('projects.projectName')}</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm" placeholder={i18n.language === 'ru' ? 'напр. Skyline Tower' : 'e.g. Skyline Tower'} />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">{t('projects.clientName')}</label>
              <input required type="text" value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">{t('projects.location')}</label>
              <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">{t('projects.startDate')}</label>
              <input required type="date" value={formData.start} onChange={e => setFormData({...formData, start: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm text-slate-700" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">{t('projects.deadline')}</label>
              <input required type="date" value={formData.end} onChange={e => setFormData({...formData, end: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm text-slate-700" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">{t('projects.budget')}</label>
              <input required type="number" min="0" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">{t('projects.projectManager')}</label>
              <input type="text" value={formData.manager} onChange={e => setFormData({...formData, manager: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm" />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end gap-3 mt-6">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>{t('projects.cancel')}</Button>
            <Button type="submit">{t('projects.createBtn')}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
