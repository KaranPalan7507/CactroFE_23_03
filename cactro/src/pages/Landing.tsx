import Header from "../components/Header";
import Notification from "../components/Notification";

const LandingPage: React.FC = () => {
  const navItems = [
    { text: "Product", url: "#" },
    { text: "Enterprise", url: "#" },
    { text: "Resources", url: "#" },
    { text: "Pricing", url: "#" },
  ];
  return (
    <div className="bg-custom-bg min-h-screen">
      <div className="container m-auto max-w-[90vw]">
        <Header navItems={navItems} />
        <Notification />
      </div>
    </div>
  );
};

export default LandingPage;
