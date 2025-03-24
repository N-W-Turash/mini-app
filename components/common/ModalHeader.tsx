import { twMerge } from "tailwind-merge";
import LineDivider from "@/components/common/LineDivider";
import { CloseIcon } from "@/components/icons/Icons";

interface ModalHeaderProps {
  className?: string;
  children?: React.ReactNode;
  title: React.ReactNode;
  withDivider?: boolean;
  closeModal: () => void;
}

const ModalHeader = ({
  className = "",
  children,
  title,
  closeModal,
  withDivider = false,
}: ModalHeaderProps) => {
  return (
    <>
      <div className={twMerge("flex items-start justify-between", className)}>
        {title ? (
          <h4 className="text-sm font-semibold text-black/90">{title}</h4>
        ) : (
          children
        )}

        <div
          className="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-error text-center text-white hover:bg-error/90"
          role="button"
          onClick={() => closeModal()}
        >
          <CloseIcon height="8" width="8" />
        </div>
      </div>

      {withDivider && <LineDivider className="my-3 border-t-black/[0.1]" />}
    </>
  );
};

export default ModalHeader;
