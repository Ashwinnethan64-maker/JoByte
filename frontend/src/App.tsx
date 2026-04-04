import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Authentication from './pages/Authentication';
import ApplicantDashboard from './pages/ApplicantDashboard';
import ApplicantOnboarding from './pages/ApplicantOnboarding';
import EmployerDashboard from './pages/EmployerDashboard';
import EmployerOnboarding from './pages/EmployerOnboarding';
import JobListings from './pages/JobListings';
// import JobyteProfessional from './pages/JobyteProfessional';
import PostAJob from './pages/PostAJob';
import SebAssessment from './pages/SebAssessment';
import Companies from './pages/Companies';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="jobs" element={<JobListings />} />
          <Route path="post-job" element={<PostAJob />} />
          <Route path="companies" element={<Companies />} />
          <Route path="about" element={<About />} />
        </Route>
        
        {/* We place auth outside of layout because it's a full takeover page */}
        <Route path="/auth" element={<Authentication />} />
        <Route path="/dashboard/applicant" element={<ApplicantDashboard />} />
        <Route path="/onboarding/applicant" element={<ApplicantOnboarding />} />
        <Route path="/dashboard/employer" element={<EmployerDashboard />} />
        <Route path="/onboarding/employer" element={<EmployerOnboarding />} />
        <Route path="/assessments" element={<SebAssessment />} />
      </Routes>
    </BrowserRouter>
  );
}
