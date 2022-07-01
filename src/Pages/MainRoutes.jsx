import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Books from "./Books";
import EditBook from "./EditBook";
import SingleBook from "./SingleBook";
import AuthRequire from "../hoc/AuthRequire";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route
          path="/books/:id/edit"
          element={
            <AuthRequire>
              <EditBook />
            </AuthRequire>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
