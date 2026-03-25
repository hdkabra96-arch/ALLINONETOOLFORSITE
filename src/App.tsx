/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ToolView } from './pages/ToolView';

export default function App() {
  const [currentTool, setCurrentTool] = useState<string | null>(null);

  return (
    <Layout onNavigateHome={() => setCurrentTool(null)}>
      {currentTool ? (
        <ToolView toolId={currentTool} onBack={() => setCurrentTool(null)} />
      ) : (
        <Home onSelectTool={setCurrentTool} />
      )}
    </Layout>
  );
}

