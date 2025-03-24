import { useMemo } from "react";
import { Modal } from "antd";
import ModalHeader from "@/components/common/ModalHeader";
import ModalContext from "@/utils/contexts/modalContext";
import type { ModalProps } from "antd";

interface BaseModalProps extends ModalProps {
  centered?: boolean;
  dataSource?: any;
  children: React.ReactNode;
  headerClassName?: string;
  title: React.ReactNode;
  showFooter?: boolean;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  width?: number;
}

const BaseModal = ({
  centered = true,
  dataSource = null,
  children,
  headerClassName = "",
  showFooter = false,
  title = "",
  showModal,
  setShowModal = () => {},
  width = 450,
  ...rest
}: BaseModalProps) => {
  const modalContextValue = useMemo(
    () => ({
      setShowModal,
      dataSource: { ...dataSource },
    }),

    [setShowModal, dataSource],
  );

  return (
    <Modal
      centered={centered}
      classNames={{ mask: "bg-black" }}
      closable={false}
      title={
        <ModalHeader
          className={headerClassName}
          title={title}
          closeModal={() => setShowModal(false)}
        />
      }
      open={showModal}
      {...(!showFooter && { footer: null })}
      destroyOnClose={true}
      width={width}
      maskClosable={false}
      onCancel={() => setShowModal(false)}
      {...rest}
    >
      <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>
    </Modal>
  );
};

export default BaseModal;
