import { Routes,Route } from "react-router-dom"
import MainPage from "./Pages/MainPage"
import Room from "./Pages/Room"
import Footer from "./components/semantics/Footer"
import Navigation from "./components/semantics/Navigation"
import Login from "./Pages/Login"
import SignIn from "./Pages/SignIn"
import LoginAgree from "./Pages/LoginAgree"
import RoomMainContent from "./Pages/RoomMainContent"
import MainChat from "./Pages/MainChat"

function App() {

  return (
    <>
      <Navigation/>
    <Routes>

      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/loginCheck" element={<LoginAgree/>}></Route>
      <Route path="/signIn" element={<SignIn/>}></Route>
      <Route path="/Room" element={<Room/>}></Route>
      <Route path="/MainChat" element={<MainChat/>}></Route>
      <Route path="/RoomMainContent" element={<RoomMainContent/>}></Route>
      <Route path="/*" element={<>페이지를 찾을 수 없습니다.</>}></Route>
    </Routes>
    </>

  )
}

export default App
