"use client";

import { Layout } from "antd";
import NavigationBar from "@/components/navigation/NavigationBar";
import type { PropsWithChildren } from "react";

const { Header, Content } = Layout;

const InnerLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Header className="fixed top-0 z-10 w-full border-b border-b-light-ash">
        <NavigationBar />
      </Header>

      <Layout>
        <Content
          className={`relative top-[60px] h-[calc(100vh-60px)] overflow-auto bg-[#FCFCFC] transition-all duration-200`}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default InnerLayout;
