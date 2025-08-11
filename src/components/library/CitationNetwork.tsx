import { useState } from 'react';
import { NetworkGraph } from '@/components/NetworkGraph';

type NodeType = 'paper' | 'author' | 'topic';

interface Node {
  id: string;
  type: NodeType;
  name: string;
}

interface Edge {
  source: string;
  target: string;
  type: string;
}

interface CitationNetworkProps {
  initialNodes?: Node[];
  initialEdges?: Edge[];
}

export function CitationNetwork({ initialNodes = [], initialEdges = [] }: CitationNetworkProps) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  // Convert library nodes to network nodes
  const networkNodes = nodes.map(node => ({
    id: node.id,
    type: node.type === 'paper' ? 'company' :
          node.type === 'author' ? 'researcher' :
          'technology',
    name: node.name
  }));

  // Convert library edges to network edges
  const networkEdges = edges.map(edge => ({
    source: edge.source,
    target: edge.target,
    type: edge.type
  }));

  return (
    <div className="w-full h-[600px] bg-blue-950/30 backdrop-blur-sm rounded-2xl overflow-hidden">
      <NetworkGraph
        nodes={networkNodes}
        edges={networkEdges}
        onNodeClick={(node) => {
          console.log('Node clicked:', node);
        }}
      />
    </div>
  );
}