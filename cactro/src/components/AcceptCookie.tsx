const AcceptCookie: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 p-8 bg-white shadow-2xl w-[20%]">
      <span className="absolute top-4 right-4 cursor-pointer"> X</span>
      <div className="mb-4 text-sm">
        This website uses cookies to enhance user experience and to analyze
        performance and traffic on our website. We also share information about
        your use of out site with our social media, advertising and media
        partners.
        <a href="#" className="underline text-blue-500 ml-1">
          More info.
        </a>
      </div>
      <button className="uppercase w-full text-uppercase bg-custom-purple py-2 px-4 rounded-sm text-white font-bold hidden lg:inline-block">
        Accept all cookies
      </button>
      <button className="uppercase w-full mt-2 text-uppercase border border-custom-purple py-2 px-4 rounded-sm text-custom-purple font-bold hidden lg:inline-block">
        Only necessary
      </button>
    </div>
  );
};

export default AcceptCookie;
