import MainContent from "../components/Layout/MainContent";
import Sidebar from "../components/Layout/Sidebar";

const HomePage = () => {
  return (
    <div className="relative">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default HomePage;
