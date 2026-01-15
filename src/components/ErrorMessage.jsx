import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <svg
        className="w-16 h-16 text-schar-gray mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-xl font-semibold mb-2">Algo deu errado</h3>
      <p className="text-schar-gray mb-6 text-center max-w-md">
        {message || 'Ocorreu um erro ao carregar os dados. Por favor, tente novamente.'}
      </p>
      {onRetry && (
        <button onClick={onRetry} className="btn-primary">
          Tentar Novamente
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
