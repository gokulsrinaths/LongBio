import React from 'react';
import { motion } from 'framer-motion';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

interface ChartProps {
  data: ChartData;
  type: 'bar' | 'line' | 'pie';
  height?: number;
  width?: number;
}

const Chart: React.FC<ChartProps> = ({ data, type, height = 400, width = 600 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-lg shadow"
      style={{ height, width }}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Chart visualization would go here</p>
      </div>
    </motion.div>
  );
};

export default Chart;