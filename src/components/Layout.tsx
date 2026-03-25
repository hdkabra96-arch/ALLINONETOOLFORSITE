import React from 'react';
import { FileText, Github, Menu } from 'lucide-react';
import type { ToolFilter } from '../App';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  onNavigateHome: () => void;
  currentFilter: ToolFilter;
  onFilterChange: (filter: ToolFilter) => void;
}

export function Layout({ children, onNavigateHome, currentFilter, onFilterChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-900 font-sans flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
              <div className="bg-red-600 p-2 rounded-lg mr-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">PDF Master Pro</span>
            </div>
            <div className="flex space-x-8 items-center">
              <button 
                onClick={() => onFilterChange('IMAGE')} 
                className={cn("text-sm font-bold transition-colors", currentFilter === 'IMAGE' ? "text-red-600" : "text-slate-600 hover:text-slate-900")}
              >
                IMAGE
              </button>
              <button 
                onClick={() => onFilterChange('PDF')} 
                className={cn("text-sm font-bold transition-colors", currentFilter === 'PDF' ? "text-red-600" : "text-slate-600 hover:text-slate-900")}
              >
                PDF
              </button>
              <button 
                onClick={() => onFilterChange('ALL')} 
                className={cn("text-sm font-bold transition-colors", currentFilter === 'ALL' ? "text-red-600" : "text-slate-600 hover:text-slate-900")}
              >
                ALL TOOLS
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FileText className="w-5 h-5 text-red-600 mr-2" />
            <span className="font-semibold text-slate-900">PDF Master Pro</span>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} PDF Master Pro. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-slate-600">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
