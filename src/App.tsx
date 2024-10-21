import './App.css'
import PostPage from './pages/PostPage';
import Posts from './pages/Posts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/user/:id' element={<UserPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  )
}

export default App
