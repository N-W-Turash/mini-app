import UsersContainer from "@/components/containers/home/Users";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const Home = async () => {
  return (
    <section className="relative h-full">
      <UsersContainer />
    </section>
  );
};

export default Home;
