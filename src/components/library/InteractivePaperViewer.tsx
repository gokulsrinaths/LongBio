import React, { useState } from 'react';

interface Highlight {
  id: string;
  text: string;
  color: string;
  note?: string;
}

interface InteractivePaperViewerProps {
  pdfUrl: string;
  title: string;
}

const InteractivePaperViewer: React.FC<InteractivePaperViewerProps> = ({
  pdfUrl,
  title
}) => {
  const [highlights] = useState<Highlight[]>([]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex">
        <div className="flex-1 h-[800px] bg-gray-100">
          <iframe
            src={pdfUrl}
            title={title}
            className="w-full h-full"
          />
        </div>
        <div className="w-64 border-l p-4">
          <h3 className="font-semibold mb-4">Highlights</h3>
          <div className="space-y-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="p-3 rounded-lg"
                style={{ backgroundColor: highlight.color + '20' }}
              >
                <p className="text-sm">{highlight.text}</p>
                {highlight.note && (
                  <p className="text-xs text-gray-600 mt-2">{highlight.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePaperViewer;