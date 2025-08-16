'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Chart from '@/components/Chart';

interface ReadingStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface ReadingStatsProps {
  stats: ReadingStat[];
  historyData: {
    label: string;
    value: number;
    color: string;
  }[];
}

export default function ReadingStats({ stats, historyData }: ReadingStatsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Reading Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white/5 rounded-lg relative group"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Content */}
            <div className="relative">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
              <div className={`mt-2 text-sm flex items-center ${
                stat.trend === 'up' ? 'text-green-400' :
                stat.trend === 'down' ? 'text-red-400' :
                'text-blue-300'
              }`}>
                {stat.trend === 'up' && (
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {stat.trend === 'down' && (
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                  </svg>
                )}
                {stat.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Reading History Chart */}
      <div className="mt-8 h-64">
        <Chart
          data={historyData}
          type="bar"
          title="Reading Activity"
        />
      </div>

      {/* Additional Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-white font-medium mb-4">Popular Topics</h4>
          <div className="space-y-2">
            {['Cellular Biology', 'AI/ML', 'Genetics'].map((topic, index) => (
              <div key={topic} className="flex items-center justify-between">
                <span className="text-blue-200">{topic}</span>
                <span className="text-blue-300">{90 - index * 10}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-white font-medium mb-4">Reading Times</h4>
          <div className="space-y-2">
            {['Morning', 'Afternoon', 'Evening'].map((time, index) => (
              <div key={time} className="flex items-center justify-between">
                <span className="text-blue-200">{time}</span>
                <span className="text-blue-300">{5 + index * 2}h</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-lg">
          <h4 className="text-white font-medium mb-4">Completion Rate</h4>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-600/20">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-200">
                  85%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-900/20">
              <motion.div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 