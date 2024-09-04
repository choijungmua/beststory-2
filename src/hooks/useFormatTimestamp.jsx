// hooks/useFormatTimestamp.js

const useFormatTimestamp = () => {
  const formatTimestamp = (timestamp) => {
    if (timestamp?.seconds) {
      const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }
    return ""; // Default value
  };

  return { formatTimestamp };
};

export default useFormatTimestamp;
