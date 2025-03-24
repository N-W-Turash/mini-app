import type { ComponentProps } from "react";
import BaseModal from "@/components/modals/BaseModal";
import { DELETE_CONFIRMATION_DESCRIPTION } from "@/constants/constants";

interface DeleteConfirmationModalProps extends ComponentProps<any> {
  description?: string;
  deleteButtonText?: string;
  isDeleting: boolean;
  onDeleteConfirm: () => void;
  title: string;
  showDeleteConfirmationModal: boolean;
  setShowDeleteConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteConfirmationModal = ({
  description = DELETE_CONFIRMATION_DESCRIPTION,
  deleteButtonText = "Delete",
  isDeleting = false,
  onDeleteConfirm = () => {},
  title = "",
  showDeleteConfirmationModal,
  setShowDeleteConfirmationModal,
  ...rest
}: DeleteConfirmationModalProps) => {
  return (
    <BaseModal
      title={title}
      showFooter={true}
      width={500}
      okButtonProps={{
        className: "!bg-error !text-xs font-medium hover:!bg-error/90",
        loading: isDeleting,
      }}
      okText={deleteButtonText}
      cancelButtonProps={{
        className:
          "!border-secondary/75 !text-black/75 !text-xs hover:!border-secondary hover:!text-black",
      }}
      showModal={showDeleteConfirmationModal}
      setShowModal={setShowDeleteConfirmationModal}
      onOk={() => {
        onDeleteConfirm();
      }}
      {...rest}
    >
      <p className="my-4 text-semi-sm font-medium text-black/90">{description}</p>
    </BaseModal>
  );
};

export default DeleteConfirmationModal;
