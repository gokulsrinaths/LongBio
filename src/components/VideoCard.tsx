'use client';

import React from 'react';

interface VideoCardProps {
  title: string;
  speaker: string;
  date: string;
  description: string;
  url: string;
}

export default function VideoCard({ title, speaker, date, description, url }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity"
      >
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
          <div className="text-blue-600">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Speaker: {speaker}</p>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Date: {date}</p>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">{description}</p>
          <div className="mt-3 sm:mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base">
            Watch Video
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
} 