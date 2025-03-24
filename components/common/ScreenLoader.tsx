const ScreenLoader = ({ text = "Loading..." }) => {
  return (
    <div
      id="screen-loader"
      className="fixed inset-0 z-100 grid place-content-center bg-white"
    >
      <div className="flex flex-col items-center gap-8">
        <p className="text-primary text-lg font-semibold md:text-xl">{text}</p>

        <div className="w-[300px] max-w-[300px]">
          <div className="rounded-semi-sm bg-primary/10 h-2 w-full overflow-hidden">
            <div className="origin-left-right animate-progress bg-primary h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenLoader;
