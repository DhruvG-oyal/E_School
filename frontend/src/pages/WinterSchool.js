import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer";
import About from "./componentforfrontpage/about"; // Adjust the import path if necessary
import WhatisADashboard from "./componentforfrontpage/WhatisADashboard";
import Features from "./componentforfrontpage/Features";
import WhatAreTags from "./componentforfrontpage/WhatAreTags";
import ConnectToOtherPeopleWithRealtimeChatting from "./componentforfrontpage/Connect";
import WhatIsACard from "./componentforfrontpage/Whatiscard";
import HowToAddACard from "./componentforfrontpage/Howtoaddacard";
import HowOurContentPageLooks from "./componentforfrontpage/Howourcntentpagelooks";
import HowToAddContentForAModule from "./componentforfrontpage/HowtoaddContent";
const WinterSchool = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-gradient-to-r from-blue-200 to-blue-200">
      <Navbar />
    
      <main className="flex-grow ">
        <About />
        <WhatisADashboard />
        <Features />
        <WhatAreTags />
        <ConnectToOtherPeopleWithRealtimeChatting />
        <WhatIsACard/>
        <HowToAddACard/>
        <HowOurContentPageLooks/>
        <HowToAddContentForAModule/>
      </main>
      
      <Footer />
    </div>
  );
};

export default WinterSchool;
