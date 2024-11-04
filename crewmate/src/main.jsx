import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import CreateGroup from './pages/createGroup.jsx'
import Group from './pages/group.jsx'
import Groups from './pages/groups.jsx';
import UpdateGroup from './pages/updateGroup.jsx';
import NotFound from './pages/NotFound.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/update-group/:id" element={<UpdateGroup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
