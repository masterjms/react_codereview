import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import ReviewLayout from './layouts/ReviewLayout';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage - HomeLayout 사용 */}
        <Route path="/" element={<HomeLayout><HomePage /></HomeLayout>} />
        
        {/* LoginPage - HomeLayout 사용 */}
        <Route path="/login" element={<HomeLayout><LoginPage /></HomeLayout>} />
        
        {/* ReviewPage - ReviewLayout 사용 */}
        <Route path="/review" element={<ReviewLayout><ReviewPage /></ReviewLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
