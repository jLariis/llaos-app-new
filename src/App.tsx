import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '@/components/Login';
//import Dashboard from '@/components/Dashboard2';
import PrivateRoute from '@/components/PrivateRoute';
import Requisicion from '@/components/Requisicion';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login onLogin={ ()=> {}}/>} />
          <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>} />
          <Route path="/requisicion" element={<PrivateRoute><Requisicion /></PrivateRoute>} />
          {/*<Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
          <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
          <Route path="/grades" element={<PrivateRoute><Grades /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;