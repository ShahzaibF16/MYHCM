import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import Blog from "./pages/Blog";
// import BlogDetails from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import HomeOne from "./pages/HomeOne";
import HomeThree from "./pages/HomeThree";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import EmployeeProfile from "./pages/modules/EmployeeProfile";
import HrAnalytics from "./pages/modules/HrAnalytics";
import LearningManagement from "./pages/modules/LearningManagement";
import LeaveManagement from "./pages/modules/LeaveManagement";
import MobileApp from "./pages/modules/MobileApp";
import OrganizationCharts from "./pages/modules/OrganizationCharts";
import Payroll from "./pages/modules/Payroll";
import PerformanceManagement from "./pages/modules/PerformanceManagement";
import Recruitment from "./pages/modules/Recruitment";
import SelfEmployee from "./pages/modules/SelfEmployee";
import TimeManagement from "./pages/modules/TimeManagement";
import VoiceEnabled from "./pages/modules/VoiceEnabled";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeTwo />} />
        <Route exact path='/index-2' element={<HomeOne />} />
        <Route exact path='/index-3' element={<HomeThree />} />
        <Route exact path='/index-4' element={<HomeFour />} />
        <Route exact path='/index-5' element={<HomeFive />} />
        <Route exact path='/about' element={<About />} />
        {/* <Route exact path='/blogold' element={<Blog />} /> */}
        {/* <Route exact path='/blog-details' element={<BlogDetails />} /> */}
        <Route
          exact
          path='/case-study-details'
          element={<CaseStudyDetails />}
        />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/service-details' element={<ServiceDetails />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />
        <Route exact path='/employee-profile' element={<EmployeeProfile />} />
        <Route exact path='/employee-self-service' element={<SelfEmployee />} />
        <Route exact path='/hr-analytics' element={<HrAnalytics />} />
        <Route exact path='/learning-management' element={<LearningManagement />} />
        <Route exact path='/leave-management' element={<LeaveManagement />} />
        <Route exact path='/mobile-app' element={<MobileApp />} />
        <Route exact path='/organization-charts' element={<OrganizationCharts />} />
        <Route exact path='/payroll' element={<Payroll />} />
        <Route exact path='/performance-management' element={<PerformanceManagement />} />
        <Route exact path='/recruitment' element={<Recruitment />} />
        <Route exact path='/time-management' element={<TimeManagement />} />
        <Route exact path='/voice-enabled' element={<VoiceEnabled />} />
      </Routes>
      {/* <ScrollToTop smooth color='#F77F11' /> */}
    </BrowserRouter>
  );
}

export default App;
