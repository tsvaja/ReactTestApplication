import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CallRecording from "./components/CallRecording"
import Profile from "./components/Profile"
import Home from "./components/Home"
import React from "react";
import NavigationRouter from "./components/NavigationRouter";
import { AuthProvider } from "./components/Auth";
import { RequiredAuth } from "./components/RequiredAuth";

function App() {
  return (
    <AuthProvider>
      <NavigationRouter />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="call-recording" element={<CallRecording />}></Route>
        <Route path="profile" element={
          <RequiredAuth>
            <Profile>
            </Profile>
          </RequiredAuth>
        }></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
