import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { TagsPage } from "./pages/TagsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CalibrationPage } from "./pages/CalibrationPage";
import { MIVPage } from "./pages/MIVPage";
import { UsersPage } from "./pages/UsersPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard\" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/calibration" element={<CalibrationPage />} />
        <Route path="/miv" element={<MIVPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;