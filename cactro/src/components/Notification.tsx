const Notification: React.FC = () => {
  return (
    <div className="bg-custom-blue px-6 py-4 rounded-full flex justify-between items-center text-white">
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
