import React from 'react';

const LoadingScreen = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="flex flex-col items-center w-64">
        <div className="text-white text-xl mb-2">Memuat data...</div>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-purple-500 h-4 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-white text-sm mt-2">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;