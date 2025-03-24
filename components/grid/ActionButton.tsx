import { ReactNode, MouseEventHandler, ComponentProps } from "react";
import { Button } from "antd";
import { twMerge } from "tailwind-merge";

interface ActionButtonProps extends ComponentProps<any> {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ActionButton = ({
  className = "",
  children,
  disabled = false,
  onClick,
  ...rest
}: ActionButtonProps) => {
  return (
    <Button
      type="link"
      className="flex !h-4 !w-4 items-center p-0 text-xs font-medium leading-normal"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <span className={twMerge(className)}>{children}</span>
    </Button>
  );
};

export default ActionButton;
