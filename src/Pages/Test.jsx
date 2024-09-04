import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DynamicToast = ({
  message = "성공 처리 되었습니다.",
  type,
  duration,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Fade-out 애니메이션이 끝난 후에 onClose 호출
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyle = () => {
    switch ("warning") {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 w-80 p-4 rounded-lg shadow-lg transition-transform transform ${
        isVisible ? "translate-y-0" : "translate-y-20"
      } ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getToastStyle()} text-white`}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // Fade-out 애니메이션이 끝난 후에 onClose 호출
          }}
          className="text-white text-2xl ml-4"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

DynamicToast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

DynamicToast.defaultProps = {
  type: "info",
  duration: 3000,
};

export default DynamicToast;
