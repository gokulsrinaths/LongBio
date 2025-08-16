'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import NetworkGraph from '@/components/NetworkGraph';

interface CitationNode {
  id: string;
  title: string;
  type: 'paper' | 'author' | 'topic';
}

interface CitationEdge {
  source: string;
  target: string;
  type: 'cites' | 'authored' | 'related';
}

interface CitationNetworkProps {
  nodes: CitationNode[];
  edges: CitationEdge[];
  onNodeClick?: (node: CitationNode) => void;
  onEdgeClick?: (edge: CitationEdge) => void;
}

export default function CitationNetwork({
  nodes,
  edges,
  _onNodeClick,
  _onEdgeClick,
}: CitationNetworkProps) {
  const [_zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Citation Network</h3>
      <div className="h-[400px] relative">
        <NetworkGraph
          nodes={nodes.map(node => ({
            id: node.id,
            type: node.type,
            name: node.title,
          }))}
          edges={edges.map(edge => ({
            source: edge.source,
            target: edge.target,
          }))}
        />
        <div className="absolute bottom-4 right-4 space-x-2">
          <Button variant="outline" size="sm" onClick={handleZoomIn}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm" onClick={handleZoomOut}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset}>Reset</Button>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm text-blue-200">Papers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-sm text-blue-200">Authors</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-sm text-blue-200">Topics</span>
        </div>
      </div>
    </Card>
  );
} 