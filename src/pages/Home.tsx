import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TOOLS, type ToolCategory } from '../lib/tools';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';
import type { ToolFilter } from '../App';

export function Home({ onSelectTool, currentFilter }: { onSelectTool: (id: string) => void, currentFilter: ToolFilter }) {
  const [searchQuery, setSearchQuery] = useState('');

  const pdfCategories: ToolCategory[] = [
    'Organize', 'Optimize', 'Convert to PDF', 'Convert from PDF', 'Edit', 'Security', 'AI Tools'
  ];

  const imageCategories: ToolCategory[] = [
    'Most Used Tools', 'Basic Editing', 'Blur, Pixlate and Special Effects', 'DPI & Quality',
    'General Resizing', 'Resize Other Official Sizes', 'Passport & ID Photo Sizes',
    'Resize For Social Media', 'Format Conversions', 'Image to PDF', 'General Compression',
    'Exact Target Sizes', 'GIF Tools', 'Pi7 Tools', 'Other Tools', 'Convert Images'
  ];

  let categoriesToDisplay: ToolCategory[] = [];
  if (currentFilter === 'ALL') {
    categoriesToDisplay = [...pdfCategories, ...imageCategories];
  } else if (currentFilter === 'PDF') {
    categoriesToDisplay = pdfCategories;
  } else if (currentFilter === 'IMAGE') {
    categoriesToDisplay = imageCategories;
  }

  const filteredTools = TOOLS.filter(tool => 
    categoriesToDisplay.includes(tool.category) &&
    (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-2xl border-0 ring-1 ring-inset ring-slate-700 bg-slate-800/50 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-lg sm:leading-6 backdrop-blur-md transition-all"
              placeholder="Search for tools (e.g., 'merge', 'word to pdf')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {filteredTools.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No tools found</h3>
            <p className="text-slate-500">Try adjusting your search query to find what you're looking for.</p>
          </div>
        ) : (
          categoriesToDisplay.map((category, idx) => {
            const categoryTools = filteredTools.filter(t => t.category === category);
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
        })
        )}
      </section>
    </div>
  );
}
