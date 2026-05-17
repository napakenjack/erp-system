import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Plus, GripVertical, CheckSquare, Clock } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { useTranslation } from 'react-i18next';

type TaskStatus = 'New' | 'In Progress' | 'Waiting Approval' | 'Completed';

interface Task {
  id: string;
  title: string;
  project: string;
  assignee: string;
  priority: 'High' | 'Medium' | 'Low';
  deadline: string;
  status: TaskStatus;
}

const initialTasks: Task[] = [
  { id: 'TSK-1', title: 'Approve foundation drawings', project: 'Skyline Tower', assignee: 'Mike J.', priority: 'High', deadline: 'Today', status: 'New' },
  { id: 'TSK-2', title: 'Order steel rebar batch', project: 'Skyline Tower', assignee: 'Elena R.', priority: 'High', deadline: 'Tomorrow', status: 'In Progress' },
  { id: 'TSK-3', title: 'Review Q1 budget variance', project: 'Tech Park Phase 2', assignee: 'Alex P.', priority: 'Medium', deadline: 'Oct 15', status: 'In Progress' },
  { id: 'TSK-4', title: 'Site safety inspection', project: 'Riverfront Oasis', assignee: 'Sarah L.', priority: 'High', deadline: 'Oct 12', status: 'Waiting Approval' },
  { id: 'TSK-5', title: 'Sign HVAC contractor agreement', project: 'City Hospital Annex', assignee: 'Alex P.', priority: 'Medium', deadline: 'Oct 10', status: 'Completed' },
];

export function Tasks() {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns: TaskStatus[] = ['New', 'In Progress', 'Waiting Approval', 'Completed'];

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('tasks.title')}</h1>
          <p className="text-sm text-slate-500">{t('tasks.subtitle')}</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          {t('tasks.addTask')}
        </Button>
      </div>

      <div className="flex-1 flex gap-4 overflow-x-auto pb-4">
        {columns.map(status => (
          <div key={status} className="flex-shrink-0 w-80 bg-slate-100/50 rounded-xl border border-slate-200 flex flex-col max-h-full">
            <div className="p-3 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                {status}
                <span className="text-xs bg-white text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
                  {tasks.filter(t => t.status === status).length}
                </span>
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
              {tasks.filter(t => t.status === status).map(task => (
                <div key={task.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-grab group">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={
                      task.priority === 'High' ? 'danger' : 
                      task.priority === 'Medium' ? 'warning' : 'default'}
                    >
                      {task.priority}
                    </Badge>
                    <GripVertical className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h4 className="font-medium text-slate-900 mb-1">{task.title}</h4>
                  <p className="text-xs text-slate-500 mb-3">{task.project}</p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-bold">
                         {task.assignee.charAt(0)}
                       </div>
                       <span className="text-xs text-slate-600">{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {task.deadline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
