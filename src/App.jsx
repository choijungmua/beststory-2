// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Aside from "./components/semantics/Aside";
import Navigation from "./components/semantics/Navigation";
import MainPage from "./Pages/MainPage";
import Room from "./Pages/Room";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import LoginAgree from "./Pages/LoginAgree";
import RoomMainContent from "./Pages/RoomMainContent";
import MainChat from "./Pages/MainChat";
import Admin from "./Pages/Admin";
import MyInformation from "./Pages/MyInformation";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import Notification from "./Pages/Notification";
import PasswordResetPage from "./Pages/PasswordResetPage";
import About from "./Pages/About";
import Test from "./Pages/Test";
import "./i18n"; // i18next 설정 불러오기
function App() {
  const { user } = useAuth();

  return (
    <>
      <Aside />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginCheck" element={<LoginAgree />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/room"
          element={
            <ProtectedRoute user={user}>
              <Room />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mainchat/:id"
          element={
            <ProtectedRoute user={user}>
              <MainChat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roomMainContent/:id"
          element={
            <ProtectedRoute user={user}>
              <RoomMainContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myInformation"
          element={
            <ProtectedRoute user={user}>
              <MyInformation />
            </ProtectedRoute>
          }
        />
        <Route path="PasswordResetPage" element={<PasswordResetPage />} />

        {/* Add a catch-all route for undefined paths */}
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </>
  );
}

export default App;
