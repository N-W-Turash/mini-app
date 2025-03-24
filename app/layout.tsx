import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import QueryProvider from "@/components/providers/QueryProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { defaultFont } from "@/utils/assets/font";
import "@/stylings/globals.css";

const fontClass = `${defaultFont.variable} font-sans`;

export const metadata: Metadata = {
  title: {
    default: "Mini App",
    template: "Mini App - %s",
  },
  description: "Mini App",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={fontClass}>
      <QueryProvider>
        <AntdRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </AntdRegistry>
      </QueryProvider>
    </body>
  </html>
);

export default RootLayout;
