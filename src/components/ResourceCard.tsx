import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { resourceCardInteraction } from './animations';

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  category: 'pdf' | 'video' | 'course' | 'podcast';
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  category
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      variants={resourceCardInteraction}
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {imageUrl && (
          <div className="relative h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-blue-600 capitalize">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default ResourceCard;