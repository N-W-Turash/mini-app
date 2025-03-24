import { useCallback } from "react";
import { App } from "antd";
import {
  NotificationMessage,
  SuccessNotificationIcon,
  ErrorNotificationIcon,
} from "@/components/feedbacks/Notifier";

type NotificationPlacement =
  | "bottomRight"
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | undefined;

interface NotificationProps {
  message: string;
  description: string;
  type: string;
  duration?: string;
  placement?: NotificationPlacement;
}

const backgroundClasses: object = {
  error: "!bg-error",
  success: "!bg-success",
  info: "!bg-info",
};

const useFeedback = () => {
  const { notification, message } = App.useApp();

  const showNotification = useCallback(
    (notificationObj: NotificationProps) => {
      const { message, description, type, duration, placement } = notificationObj;
      const notificationClassName = `${backgroundClasses?.[type as keyof typeof backgroundClasses]} !rounded !w-[350px]`;

      notification.open({
        message: <NotificationMessage type={type} message={message} />,
        description: (
          <span className="!text-semi-sm font-semibold !text-white">{description}</span>
        ),
        className: notificationClassName,
        duration: Number(duration) || 2,
        placement: placement || "bottomRight",
      });
    },

    [notification],
  );

  const clearNotification = useCallback(() => {
    notification.destroy();
  }, [notification]);

  const showMessage = useCallback(
    async (messageObj: any) => {
      const { content, type, duration } = messageObj;
      message.open({
        content,
        type,
        duration: duration ? Number(duration) : 2,
        ...(type === "success" && {
          icon: <SuccessNotificationIcon />,
        }),
        ...(type === "error" && {
          icon: <ErrorNotificationIcon />,
        }),
      });
    },
    [message],
  );

  const clearMessage = useCallback(() => {
    message.destroy();
  }, [message]);

  const notifySuccess = useCallback(
    (message: string, duration = "2") => {
      showNotification({
        message: "Done",
        description: message,
        type: "success",
        duration,
      });
    },
    [showNotification],
  );

  const notifyError = useCallback(
    (errorMessage: string, duration = "2") => {
      showNotification({
        message: "Error",
        description: errorMessage,
        type: "error",
        duration,
      });
    },
    [showNotification],
  );

  const showErrorMessage = useCallback(
    (errorMessage: string, duration = "2") => {
      showMessage({
        content: errorMessage,
        type: "error",
        duration,
      });
    },
    [showMessage],
  );

  return {
    showNotification,
    clearNotification,
    showMessage,
    clearMessage,
    notifySuccess,
    notifyError,
    showErrorMessage,
  };
};

export default useFeedback;
