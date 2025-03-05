import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App';
import TaskShow from './pages/TaskShow';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/taskShow" element={<TaskShow />} />
    </Routes>
  </BrowserRouter>
);
