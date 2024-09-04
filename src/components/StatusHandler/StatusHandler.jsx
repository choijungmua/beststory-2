// StatusHandler.jsx
import React from "react";
import PropTypes from "prop-types";

const StatusHandler = ({
  isLoading,
  error,
  children,
  loadingMessage,
  errorMessage,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full space-y-4">
        <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-opacity-50 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-700">
          {loadingMessage || "Loading..."}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full p-4 bg-red-100 border border-red-300 rounded-md">
        <p className="text-red-600 text-lg font-semibold">
          {errorMessage || error}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

StatusHandler.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
  loadingMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

StatusHandler.defaultProps = {
  isLoading: false,
  error: null,
  loadingMessage: "Loading...",
  errorMessage: "An error occurred",
};

export default StatusHandler;
