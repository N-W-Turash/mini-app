import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className={`mx-auto flex h-full w-full items-center justify-between px-0`}>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex w-full flex-row items-center justify-between gap-2">
          <div className="relative flex w-full items-center gap-2.5 sm:gap-3">
            <Link href="/" className="relative">
              <h5 className="font-bold text-green-400">Mini App</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
