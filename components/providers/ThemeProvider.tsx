"use client";

import { useState, useEffect } from "react";
import { ConfigProvider, App } from "antd";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import InnerLayout from "@/components/layouts/InnerLayout";
import ScreenLoader from "@/components/common/ScreenLoader";
import theme from "@/themeConfig";
import { defaultFont } from "@/utils/assets/font";
import type { PropsWithChildren } from "react";

const appProps = {
  message: { maxCount: 2, top: 5 },
  notification: { maxCount: 2 },
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const screenLoader = document.getElementById("screen-loader");
    if (screenLoader) setTimeout(() => setShowLoader(false), 550);
  });

  return (
    <>
      <ProgressBar height="4.5px" color="#18B15E" options={{ showSpinner: false }} />

      <ConfigProvider
        theme={{
          token: {
            ...theme.token,
            fontFamily: `${defaultFont.style.fontFamily}`,
          },
          components: {
            ...theme.components,
          },
        }}
      >
        {!!showLoader && <ScreenLoader />}

        <App
          {...appProps}
          className={`${
            showLoader
              ? "max-h-screen overflow-hidden supports-[max-height:100dvh]:max-h-dvh"
              : ""
          }`}
        >
          <InnerLayout>{children}</InnerLayout>
        </App>
      </ConfigProvider>
    </>
  );
};

export default ThemeProvider;
