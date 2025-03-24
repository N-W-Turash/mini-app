"use client";

import dynamic from "next/dynamic";
import LoadingIndicator from "@/components/common/LoadingIndicator";

const Loader = () => <LoadingIndicator className="h-9 w-9 text-primary" />;

const UsersList = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return import("@/components/lists/UsersList");
  },

  { loading: Loader },
);

const Users = () => <UsersList />;

export default Users;
