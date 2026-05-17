import React from 'react';
import { Menu, Search, Bell, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const today = new Intl.DateTimeFormat(i18n.language === 'ru' ? 'ru-RU' : 'en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  }).format(new Date());

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 z-10 shrink-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="hidden sm:block">
          <div className="text-sm font-semibold text-slate-800">BuildLine Construction</div>
          <div className="text-xs text-slate-500">{today}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder={t('header.searchPlaceholder')} 
            className="w-64 lg:w-80 pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-shadow"
          />
        </div>
        
        <button onClick={toggleLanguage} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium">
          <Languages className="w-4 h-4" />
          <span className="hidden sm:inline">{i18n.language === 'en' ? 'EN' : 'RU'}</span>
        </button>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-danger rounded-full border-2 border-white" />
        </button>
      </div>
    </header>
  );
}

