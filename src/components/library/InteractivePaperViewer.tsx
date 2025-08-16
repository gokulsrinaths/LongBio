'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Note {
  id: string;
  page: number;
  content: string;
  timestamp: string;
}

interface Highlight {
  id: string;
  text: string;
  page: number;
  color: string;
}

interface InteractivePaperViewerProps {
  notes: Note[];
  highlights: Highlight[];
  onAddNote: (page: number, content: string) => void;
  onAddHighlight: (text: string, page: number) => void;
}

export default function InteractivePaperViewer({
  notes,
  highlights,
  onAddNote,
  _onAddHighlight,
}: InteractivePaperViewerProps) {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [newNoteContent, setNewNoteContent] = useState('');

  return (
    <Card className="p-6">
      <div className="flex items-start gap-6">
        {/* PDF Viewer */}
        <div className="flex-1 h-[800px] bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <span className="text-blue-200">Page 1 of 32</span>
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
              <select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-blue-200">
                <option>100%</option>
                <option>125%</option>
                <option>150%</option>
                <option>200%</option>
              </select>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg h-full"></div>
        </div>
        
        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Notes */}
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-white font-medium mb-4">Your Notes</h4>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {notes.map(note => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-3 rounded-lg transition-colors cursor-pointer ${
                    selectedNote === note.id ? 'bg-blue-600/20' : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedNote(note.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-300 text-sm">Page {note.page}</span>
                    <span className="text-xs text-blue-400">{note.timestamp}</span>
                  </div>
                  <p className="text-blue-100 text-sm">{note.content}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4">
              <textarea
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Add a note..."
                rows={3}
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
              />
              <Button
                variant="secondary"
                size="sm"
                className="w-full mt-2"
                onClick={() => {
                  if (newNoteContent.trim()) {
                    onAddNote(1, newNoteContent);
                    setNewNoteContent('');
                  }
                }}
              >
                Add Note
              </Button>
            </div>
          </div>
          
          {/* Highlights */}
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="text-white font-medium mb-4">Highlights</h4>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {highlights.map(highlight => (
                <motion.div
                  key={highlight.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: highlight.color }}
                    />
                    <span className="text-blue-300 text-sm">Page {highlight.page}</span>
                  </div>
                  <p className="text-blue-100 text-sm">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 