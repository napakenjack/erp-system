import React from 'react';
import { 
  Building2, LayoutDashboard, HardHat, CheckSquare, 
  Package, ShoppingCart, Landmark, FileText, 
  Users, UsersRound, BarChart3, Settings, LogOut
} from 'lucide-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { id: 'dashboard', i18nKey: 'dashboard', icon: LayoutDashboard },
  { id: 'projects', i18nKey: 'projects', icon: Building2 },
  { id: 'sites', i18nKey: 'sites', icon: HardHat },
  { id: 'tasks', i18nKey: 'tasks', icon: CheckSquare },
  { id: 'materials', i18nKey: 'materials', icon: Package },
  { id: 'procurement', i18nKey: 'procurement', icon: ShoppingCart },
  { id: 'finance', i18nKey: 'finance', icon: Landmark },
  { id: 'documents', i18nKey: 'documents', icon: FileText },
  { id: 'contractors', i18nKey: 'contractors', icon: UsersRound },
  { id: 'employees', i18nKey: 'employees', icon: Users },
  { id: 'reports', i18nKey: 'reports', icon: BarChart3 },
  { id: 'settings', i18nKey: 'settings', icon: Settings }
];

export function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={clsx(
        "fixed lg:static inset-y-0 left-0 z-30 w-64 bg-brand-sidebar text-slate-300 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center px-6 bg-slate-900/50 border-b border-white/5">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-brand-primary p-1.5 rounded relative overflow-hidden">
               <HardHat className="w-5 h-5 relative z-10" />
            </div>
            <span className="font-bold text-lg tracking-tight">BuildLine ERP</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === item.id 
                  ? "bg-brand-primary text-white" 
                  : "hover:bg-brand-sidebar-hover hover:text-white"
              )}
            >
              <item.icon className={clsx("w-5 h-5", activeTab === item.id ? "text-white" : "text-slate-400")} />
              {t(`sidebar.${item.i18nKey}`)}
            </button>
          ))}
        </div>
        
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-brand-sidebar-hover cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex flex-shrink-0 items-center justify-center text-white overflow-hidden">
               <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent" alt="User" className="w-full h-full object-cover bg-slate-200" />
            </div>
            <div className="flex flex-col text-left flex-1 overflow-hidden">
              <span className="text-white truncate">Alex Petrov</span>
              <span className="text-xs text-slate-500 truncate">Project Manager</span>
            </div>
            <LogOut className="w-4 h-4 ml-auto text-slate-500" />
          </div>
        </div>
      </aside>
    </>
  );
}
