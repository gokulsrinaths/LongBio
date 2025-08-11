import React from 'react';
import { motion } from 'framer-motion';
import { easings } from './animations';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnailUrl,
  videoUrl
}) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-gray-900"
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: easings.spring
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: easings.accelerate
        }
      }}
    >
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <div className="aspect-w-16 aspect-h-9 relative">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default VideoCard;