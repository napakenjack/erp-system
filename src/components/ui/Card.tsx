import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={clsx("bg-white border border-slate-200 rounded-xl shadow-sm", className)}>
      {children}
    </div>
  );
}

export const CardHeader: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={clsx("px-5 py-4 border-b border-slate-100 flex items-center justify-between", className)}>
      {children}
    </div>
  );
}

export const CardTitle: React.FC<CardProps> = ({ className, children }) => {
  return (
    <h3 className={clsx("text-base font-semibold text-slate-800", className)}>
      {children}
    </h3>
  );
}

export const CardContent: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={clsx("p-5", className)}>
      {children}
    </div>
  );
}
