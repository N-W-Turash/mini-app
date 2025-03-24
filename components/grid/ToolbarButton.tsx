import { ReactNode, MouseEventHandler } from "react";
import { Tooltip, Button } from "antd";

interface ToolbarButtonProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ToolbarButton = ({
  title,
  children,
  className = "",
  onClick = () => {},
  ...rest
}: ToolbarButtonProps) => {
  return (
    <Tooltip title={title} trigger={["hover"]}>
      <Button
        className={`${className} !h-[32px] rounded-semi-sm border !border-light-ash !px-4 !text-black/30 hover:!border-light-ash hover:!text-black/50`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

export default ToolbarButton;
