import { useState } from "react";
import Header from "./components/commons/Header";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TodoRegistPage from "./pages/TodoRegistPage";
import TodoInfoPage from "./pages/TodoInfoPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/regist" element={<TodoRegistPage />} />
        <Route path="/info/:todoNo" element={<TodoInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
