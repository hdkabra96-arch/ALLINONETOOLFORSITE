import React from 'react';
import { motion } from 'motion/react';
import { TOOLS, type ToolCategory } from '../lib/tools';
import { cn } from '../lib/utils';

export function Home({ onSelectTool }: { onSelectTool: (id: string) => void }) {
  const categories: ToolCategory[] = [
    'Organize', 'Optimize', 'Convert to PDF', 'Convert from PDF', 'Edit', 'Security', 'AI Tools'
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-24 -left-24 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Every tool you need to work with PDFs in one place
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            All are 100% FREE and easy to use! Merge, split, compress, convert, edit, and power up your PDFs with AI.
          </motion.p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {categories.map((category, idx) => {
          const categoryTools = TOOLS.filter(t => t.category === category);
          if (categoryTools.length === 0) return null;
          
          return (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                {category}
                <div className="ml-4 h-px bg-slate-200 flex-1"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryTools.map((tool, toolIdx) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx * 0.1) + (toolIdx * 0.05) }}
                    onClick={() => onSelectTool(tool.id)}
                    className={cn(
                      "group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col h-full",
                      tool.category === 'AI Tools' && "border-indigo-100 hover:border-indigo-300 bg-gradient-to-b from-white to-indigo-50/30"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                      tool.category === 'AI Tools' ? "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white" : "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                    )}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                      {tool.name}
                      {!tool.implemented && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-semibold">
                          Soon
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-slate-500 flex-1">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
