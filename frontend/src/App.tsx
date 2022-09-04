import { ChangeEvent, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { themeChange } from "theme-change";
import { connect, sendMessage } from "./api";
import Header from "./lib/components/Header";
import { Home } from "./pages/Home";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="mx-auto w-screen min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
