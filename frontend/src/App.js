import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WinterSchool from "./pages/WinterSchool";
import LoginPage from "./pages/login.jsx"
import SignupPage from "./pages/signup.jsx";
import Dashboard from "./pages/dashboard";
import Adminboard from "./pages/adminboard.jsx";
import Page from "./pages/Coursecontent/page";
import MyDashboard from "./pages/mydashboard.jsx";
import CreateCardboard from "./pages/createCardboard.jsx";

// import MessageContain from "./components/messages/MessageContain";
import Createcontent from "./pages/Coursecontent/Createcontent.jsx";
import CreatecontentP from "./pages/Coursecontent/CreatecontentP.jsx";
import CreateCardboardP from "./components/PersonalCard/createCardboardP.jsx";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "E-Learning School";
        metaDescription = "Welcome to Winter School";
        break;
      case "/login":
        title = "Login";
        metaDescription = "Login to your account";
        break;
      case "/signup":
        title = "Sign Up";
        metaDescription = "Create a new account";
        break;
      case "/dashboard":
        title = "Dashboard";
        metaDescription = "Your dashboard overview";
        break;
      case pathname.match(/^\/dashboard\/\d+$/)?.input:
        title = "Course Detail";
        metaDescription = "Details of the selected course";
        break;
      default:
        title = "E-Learning School";
        metaDescription = "Welcome to Winter School";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      
      <Route path="/" element={<WinterSchool />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard/:id" element={<Page/>} />
      <Route path="/dashboards/:id" element={<MyDashboard/>} />
      <Route path="/createCardboard/:id" element={<CreateCardboard/>} />
      <Route path="/createCardboardP/:id" element={<CreateCardboardP/>} />
      <Route path="/createContentP/:id" element={<CreatecontentP/>} />
      
      <Route path="/adminboard" element={<Adminboard/>} />
      <Route path="/adminboard/:id" element={<Createcontent/>} />
      
      {/* <Route path="/dashboard/:id/chat" element={<MessageContain/>}/> */}
      
    </Routes>
  );
}
export default App;
