const Info: React.FC = () => {
  return (
    <div className="flex py-2 flex-col md:flex-row md:py-12">
      <div className="w-full md:w-1/2">
        <img
          className=" rounded-lg"
          src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/static/hero@2x.IN.jpg"
          alt="banner-image"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col ">
        <h1 className="text-xl font-bold">
          Now is your moment to build a better tomorrow
        </h1>
        <p className="font-sm">
          We've seen what the future can be. Now its your time to decide what it
          will be.
        </p>
        <div className="space-x-2 my-2">
          <button className="text-uppercase border border-custom-purple py-2 px-4 rounded-sm text-custom-purple font-bold">
            Watch video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
