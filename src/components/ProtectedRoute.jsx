import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "../store/Auth";
import ClipLoader from "react-spinners/ClipLoader"; // ClipLoader 스피너 가져오기

const ProtectedRoute = ({ children }) => {
  const { user } = useUserStore((state) => state);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => setLoading(false), 500); // Simulate loading time
      alert("로그인 후 이용 가능합니다.");

      return () => {
        clearTimeout(timer);
      };
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#3498db" size={50} /> {/* 스피너 표시 */}
      </div>
    ); // Optionally, show a loading spinner
  }

  return user ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
