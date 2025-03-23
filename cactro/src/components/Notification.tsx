const Notification: React.FC = () => {
  return (
    <div className="bg-custom-blue  rounded-full flex justify-between items-center text-white py-2 px-4 md:px-6 md:py-4 -mx-4">
      <div>
        Slack is your digital HQ. Meet the new features keeping teams connected
        in a work-from-anywhere world.{" "}
        <a className="underline" href="/">
          Let's go
        </a>
      </div>
      <button className="text-xl ml-10">x</button>
    </div>
  );
};

export default Notification;
