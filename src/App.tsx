import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";
import UserPage from "./pages/UserPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import Header from "./components/Header";

function App() { 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/" element={<Navigate to="/posts" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
