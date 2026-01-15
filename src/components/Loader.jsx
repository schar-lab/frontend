import React from 'react';

const Loader = ({ size = 'medium', color = 'black' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const colorClasses = {
    black: 'border-schar-black',
    white: 'border-schar-white',
    gray: 'border-schar-gray',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
};

export default Loader;
