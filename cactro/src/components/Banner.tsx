const Banner: React.FC = () => {
  return (
    <div className="flex py-2 flex-col md:flex-row md:py-12">
      <div className="w-full md:w-1/2 p-4 flex flex-col ">
        <h1 className="text-4xl font-bold">Slack is where the future works</h1>
        <p>
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className="space-x-2 my-2">
          <button className="text-uppercase bg-custom-purple py-2 px-4 rounded-sm text-white font-bold lg:text-lg text-md">
            Try for free
          </button>
          <button className="text-uppercase bg-blue-500 py-2 px-4 rounded-sm text-white font-bold lg:text-lg text-md">
            Sign up with Google
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          className=" rounded-lg"
          src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/static/hero@2x.IN.jpg"
          alt="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
