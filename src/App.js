import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<SignIn />} /> */}

        <Route path="/" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Homepage" element={ <ProSidebarProvider>
          <Homepage />
          </ProSidebarProvider>} />
        
        {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
