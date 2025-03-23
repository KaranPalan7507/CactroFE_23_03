import Banner from "../components/Banner";
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
      <div className="container m-auto lg:max-w-[70rem] px-6">
        <Header navItems={navItems} />
        <Notification />
        <Banner />
      </div>
    </div>
  );
};

export default LandingPage;
