import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';
import HomePage1 from './HomePage1';
import Features from './Features';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginParticipant from './LoginParticipant';
import QuestionPage from './QuestionPage';
import AdminDashboard from './AdminDashboard';
import PollCreationPage from './PollCreationPage';
import svglogin from './svgLogin';
import Surveycomponent from './CreateSurvey/SurveyComponent';
import Pollcomponent from './CreateSurvey/PollComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/loginparticipant" element={<LoginParticipant />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/pollcreationpage" element={<PollCreationPage />} />
        <Route path="/surveycomponent" element={<Surveycomponent />} />
        <Route path="/pollcomponent" element={<Pollcomponent />} />
      </Routes>
    </Router>
  );
}

export default App;
