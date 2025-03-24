import React, { ComponentProps } from "react";
import BaseModal from "@/components/modals/BaseModal";
import AddUserForm from "@/components/forms/AddUser";

interface AddUserModalProps extends ComponentProps<any> {
  title?: string;
  showAddUserModal: boolean;
  setShowAddUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUserModal = ({
  title = "Add User",
  showAddUserModal,
  setShowAddUserModal,
  ...rest
}: AddUserModalProps) => {
  const closeModal = () => setShowAddUserModal(false);

  return (
    <BaseModal
      title={title}
      headerClassName="px-2 pt-1"
      showModal={showAddUserModal}
      setShowModal={setShowAddUserModal}
      width={450}
      {...rest}
    >
      <div className="px-2 pb-2 pt-1">
        <AddUserForm closeModal={closeModal} />
      </div>
    </BaseModal>
  );
};

export default AddUserModal;
