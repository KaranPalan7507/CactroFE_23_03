import Banner from "../components/Banner";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Notification from "../components/Notification";
const navItems = [
  { text: "Product", url: "#" },
  { text: "Enterprise", url: "#" },
  { text: "Resources", url: "#" },
  { text: "Pricing", url: "#" },
];
const companies = [
  {
    text: "Company1",
    url: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png",
  },
  {
    text: "Company2",
    url: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png",
  },
  {
    text: "Company3",
    url: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png",
  },
  {
    text: "Company4",
    url: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png",
  },
  {
    text: "Company5",
    url: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png",
  },
  {
    text: "Company6",
    url: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-custom-bg min-h-screen">
      <div className="container m-auto lg:max-w-[70rem] px-6">
        <Header navItems={navItems} />
        <Notification />
        <Banner />
        <Companies companies={companies} />
        <Info />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
