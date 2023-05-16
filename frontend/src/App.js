import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import User from "./components/startup";
import UserProfile from "./components/startup/StartupProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import Startup from "./components/startup";
import StartupListing from "./components/main/StartupListing";
import StartupSignin from "./components/main/StartupSignin";
import StartupSignup from "./components/main/StartupSignup";
import Contact from "./components/main/Contact";
import About from "./components/main/About";
import StartupDetails from "./components/main/StartupDetails";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<About />} path="AboutUs" />
              <Route element={<Contact />} path="Contact" />
              <Route element={<StartupSignin />} path="startupsignin" />
              <Route element={<StartupSignup />} path="startupsignup" />
              <Route element={<StartupDetails />} path="startupdetails/:id" />
              <Route element={<StartupListing />} path="startuplisting" />
            </Route>

            <Route
              element={
                // <UserAuth>
                // </UserAuth>
                <Startup />
              }
              path="startup"
            >
              {/* <Route path="browse" element={<StartupListing />} /> */}
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
