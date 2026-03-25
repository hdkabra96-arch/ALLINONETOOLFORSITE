/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ToolView } from './pages/ToolView';

export type ToolFilter = 'ALL' | 'IMAGE' | 'PDF';

export default function App() {
  const [currentTool, setCurrentTool] = useState<string | null>(null);
  const [currentFilter, setCurrentFilter] = useState<ToolFilter>('ALL');

  return (
    <Layout 
      onNavigateHome={() => {
        setCurrentTool(null);
        setCurrentFilter('ALL');
      }}
      currentFilter={currentFilter}
      onFilterChange={(filter) => {
        setCurrentFilter(filter);
        setCurrentTool(null);
      }}
    >
      {currentTool ? (
        <ToolView toolId={currentTool} onBack={() => setCurrentTool(null)} />
      ) : (
        <Home onSelectTool={setCurrentTool} currentFilter={currentFilter} />
      )}
    </Layout>
  );
}

