import React, { useState } from 'react';
import NetworkGraph from '../NetworkGraph';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Paper {
  id: string;
  title: string;
  authors: string[];
  topics: string[];
  citations: string[];
}

interface Node {
  id: string;
  type: 'company' | 'researcher' | 'technology';
  name: string;
}

interface Edge {
  source: string;
  target: string;
  type: 'cites' | 'authored' | 'researches';
}

const CitationNetwork: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  // Mock data - replace with real data
  const papers: Paper[] = [
    {
      id: '1',
      title: 'Longevity Research Overview',
      authors: ['John Doe', 'Jane Smith'],
      topics: ['aging', 'biotech'],
      citations: ['2', '3']
    },
    // Add more papers...
  ];

  // Convert papers to graph data
  const nodes: Node[] = papers.map(paper => ({
    id: paper.id,
    type: 'researcher', // Changed from 'paper' to match Node type
    name: paper.title
  }));

  const edges: Edge[] = papers.flatMap(paper =>
    paper.citations.map(citationId => ({
      source: paper.id,
      target: citationId,
      type: 'cites'
    }))
  );

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">Citation Network</h2>
      <div className="h-[400px] relative">
        <NetworkGraph
          nodes={nodes}
          edges={edges}
          onNodeClick={(node) => {
            const paper = papers.find(p => p.id === node.id);
            if (paper) setSelectedPaper(paper);
          }}
        />
      </div>
      {selectedPaper && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">{selectedPaper.title}</h3>
          <p>Authors: {selectedPaper.authors.join(', ')}</p>
          <p>Topics: {selectedPaper.topics.join(', ')}</p>
          <Button
            onClick={() => setSelectedPaper(null)}
            className="mt-2"
          >
            Close
          </Button>
        </div>
      )}
    </Card>
  );
};

export default CitationNetwork;