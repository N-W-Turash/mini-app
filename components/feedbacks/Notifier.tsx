import { WarningIcon, CheckMarkIcon, InfoIcon } from "@/components/icons/Icons";

const NotificationIcon = ({ type }: any) => {
  switch (type) {
    case "success":
      return <CheckMarkIcon className="w-4" />;

    case "error":
      return <WarningIcon className="w-4" />;

    default:
      return <InfoIcon height={16} width={16} />;
  }
};

export const NotificationMessage = ({ type, message }: any) => {
  return (
    <span className="mb-1 flex items-center gap-x-2 text-xs !font-semibold !text-white">
      <NotificationIcon type={type} />
      <span>{message}</span>
    </span>
  );
};

export const SuccessNotificationIcon = () => <CheckMarkIcon className="w-4" />;

export const ErrorNotificationIcon = () => <WarningIcon height={20} width={20} />;
