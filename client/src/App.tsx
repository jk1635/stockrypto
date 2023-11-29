import React from "react";

import { Navigate, Routes as ReactRouterRoutes, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "./layouts/mainLayout";
import StartPage from "./pages";
import DashBoardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Layout>
        <ReactRouterRoutes>
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/" element={<StartPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </ReactRouterRoutes>
      </Layout>
    </Router>
  );
}

export default App;
