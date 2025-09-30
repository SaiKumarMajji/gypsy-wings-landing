import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  loadingInfo?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isLoading = false,
  loadingInfo = 'Loading'
}) => {
  return (
    isLoading && (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-backDrop">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        <p className="text-white mt-4">{loadingInfo}</p>
      </div>
    )
  );
};

export default LoadingScreen;
