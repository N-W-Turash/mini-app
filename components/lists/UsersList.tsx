"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Button } from "antd";
import DataGrid from "@/components/grid/DataGrid";
import ActionButton from "@/components/grid/ActionButton";
import SteppedLoadingIndicator from "@/components/common/SteppedLoadingIndicator";
import TransitionContainer from "@/components/common/TransitionContainer";
import DeleteConfirmationModal from "@/components/modals/DeleteConfirmationModal";
import GridToolbar from "@/components/grid/GridToolbar";
import { PlusIcon, DeleteIcon } from "@/components/icons/Icons";
import useFeedback from "@/utils/hooks/useFeedback";
import { useFetchUsers, useDeleteUser } from "@/utils/hooks/useUsersServices";
import { capitalizeFirstLetter } from "@/utils/helpers/transformationHelpers";
import { formatDateAsISO8601 } from "@/utils/helpers/dateHelpers";
import { generateSuccessMessage } from "@/utils/helpers/utilityHelpers";
import { FAILED_OPS_ERROR_MESSAGE } from "@/constants/constants";
import { TableParams } from "@/utils/types/dataGrid";

const AddUserModal = dynamic(() => import("@/components/modals/AddUserModal"), {
  ssr: false,
});

const AddUserButton = ({ setShowAddUserModal }: any) => {
  return (
    <Button
      type="link"
      className="!h-4 !p-0 text-xs !text-primary"
      onClick={() => setShowAddUserModal(true)}
    >
      <span className="!flex items-center gap-1">
        <span className="text-primary">
          <PlusIcon className="h-3 w-3" />
        </span>
        <span className="text-xs">Add User</span>
      </span>
    </Button>
  );
};

const UsersList = () => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: { current: 1, pageSize: 10 },
  });
  const [query, setQuery] = useState("");
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(undefined);
  const { mutate: deleteUser, isPending: deleting } = useDeleteUser();
  const { notifyError, notifySuccess } = useFeedback();

  const params = useMemo(() => {
    return {
      _page: tableParams?.pagination?.current,
      _limit: tableParams?.pagination?.pageSize,
      _sort: "createdAt",
      _order: "desc",
      ...(query && { q: query?.trim() }),
    };
  }, [tableParams, query]);

  const { data, isLoading: loading, isFetching: fetching } = useFetchUsers(params);
  const { data: users, total } = data || {};

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      ellipsis: true,
      width: 140,
      render: (fullName?: string) => fullName ?? "-",
    },

    {
      title: "Email",
      dataIndex: "email",
      ellipsis: true,
      width: 160,
      render: (email?: any) => email ?? "-",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      ellipsis: true,
      width: 100,
      render: (createdAt: any) => <span>{formatDateAsISO8601(createdAt)}</span>,
    },

    {
      title: "Status",
      dataIndex: "status",
      ellipsis: true,
      width: 120,
      render: (status: any) => {
        const capitalizedStatus = capitalizeFirstLetter(status);
        const classes = `font-semibold ${status === "active" ? "text-primary" : "text-error"}`;
        return <span className={classes}>{capitalizedStatus}</span>;
      },
    },

    {
      title: "Actions",
      dataIndex: "actions",
      width: 100,
      className: "!text-center !py-0",
      render: (_: any, row: any) => {
        return (
          <div className="flex items-center justify-center gap-1">
            {/* <ActionButton
              title="Edit Product"
              onClick={() => {
                setSelectedProduct(row);
                setShowEditProductModal(true);
              }}
            >
              <EditIcon className="h-4 w-4 text-green-500" />
            </ActionButton> */}

            <ActionButton
              title="Delete Product"
              onClick={() => {
                setSelectedUserId(row?._id);
                setShowDeleteConfirmationModal(true);
              }}
            >
              <DeleteIcon className="h-4 w-4 text-error" />
            </ActionButton>
          </div>
        );
      },
    },
  ];

  const deleteSpecificUser = (userId: string) => {
    deleteUser(userId, {
      onSuccess: () => {
        notifySuccess(generateSuccessMessage("User", "delete"));
      },
      onError: () => {
        notifyError(FAILED_OPS_ERROR_MESSAGE);
      },
      onSettled: () => {
        setShowDeleteConfirmationModal(false);
      },
    });
  };

  return (
    <>
      <div className="mx-auto min-h-full max-w-5xl xl:max-w-6xl">
        {loading && <SteppedLoadingIndicator />}

        <div className="p-5">
          <TransitionContainer show={!loading} fade>
            <div>
              <GridToolbar
                title={
                  <div className="flex items-center gap-x-2">
                    <span>Users</span>
                  </div>
                }
                fetching={fetching}
                setQuery={setQuery}
                tableParams={tableParams}
                setTableParams={setTableParams}
                queryKey={["users"]}
                additionalComponents={
                  <AddUserButton setShowAddUserModal={setShowAddUserModal} />
                }
              />

              <DataGrid
                columns={columns}
                dataSource={users}
                rowKey="_id"
                fetching={fetching}
                loading={loading}
                tableParams={tableParams}
                // title={() => (
                //   <>
                //     <h3 className="mb-0 text-sm font-semibold text-black">Users</h3>
                //     <Button
                //       type="link"
                //       className="!h-4 !p-0 text-xs !text-primary"
                //       onClick={() => setShowAddUserModal(true)}
                //     >
                //       <span className="!flex items-center gap-1">
                //         <span className="text-primary">
                //           <PlusIcon className="h-3 w-3" />
                //         </span>
                //         <span className="text-xs">Add User</span>
                //       </span>
                //     </Button>
                //   </>
                // )}
                total={total}
                setTableParams={setTableParams}
              />
            </div>
          </TransitionContainer>
        </div>
      </div>

      {showDeleteConfirmationModal && (
        <DeleteConfirmationModal
          title="Delete User?"
          isDeleting={deleting}
          onDeleteConfirm={() => deleteSpecificUser(selectedUserId || "")}
          showDeleteConfirmationModal={showDeleteConfirmationModal}
          setShowDeleteConfirmationModal={setShowDeleteConfirmationModal}
        />
      )}

      {showAddUserModal && (
        <AddUserModal
          showAddUserModal={showAddUserModal}
          setShowAddUserModal={setShowAddUserModal}
        />
      )}
    </>
  );
};

export default UsersList;
