type INavItem = {
  text: string;
  url: string;
};
interface IHeaderProps {
  navItems: INavItem[];
}
const Header: React.FC<IHeaderProps> = ({ navItems }) => {
  return (
    <div className="h-20 p-2">
      <div className="flex h-full items-center justify-between">
        <div className="h-full flex items-center space-x-8">
          <a href="/" className="h-full">
            <img
              className="h-full"
              src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png"
            />
          </a>
          <nav className="flex space-x-4 hidden md:block">
            {navItems.map((item) => (
              <a key={item.text} href={item.url}>
                {item.text}
              </a>
            ))}
          </nav>
        </div>
        <div className="space-x-4">
          <button className="py-2 px-4 font-bold hidden md:inline-block">
            Sign in
          </button>
          <button className="text-uppercase border border-custom-purple py-2 px-4 rounded-sm text-custom-purple font-bold hidden lg:inline-block">
            Talk to sales
          </button>
          <button className="text-uppercase bg-custom-purple py-2 px-4 rounded-sm text-white font-bold hidden lg:inline-block">
            Try for free
          </button>
        </div>
        <div className="block md:hidden">=</div>
      </div>
    </div>
  );
};

export default Header;
