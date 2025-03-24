"use client";

import { useEffect } from "react";
import { defaultFont } from "@/utils/assets/font";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error("Error", error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          className={`${defaultFont.variable} mx-auto flex min-h-screen flex-col items-center justify-center p-6 font-sans`}
        >
          <div className="flex min-h-[400px] max-w-xl flex-col items-center justify-around rounded bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
            <div className="text-center font-semibold text-black">
              <h3 className="mb-6 uppercase">Oops! Something went wrong.</h3>
              <p className="mb-4 text-base uppercase">
                We are working on fixing the issue.
              </p>
            </div>

            <button
              onClick={reset}
              className="mx-auto h-[36px] w-[180px] whitespace-nowrap rounded border-none bg-primary text-center text-xs font-semibold text-white hover:!bg-primary sm:w-[220px]"
            >
              Go To Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
