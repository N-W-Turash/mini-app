interface SpinnerProps {
  backgroundClassName?: string | undefined;
  className?: string | undefined;
  indicator?: React.ReactNode | undefined;
  size?: string | undefined;
}

const Spinner = ({
  backgroundClassName = "bg-white/60",
  className = "bg-primary",
  indicator = null,
  size = "default",
}: SpinnerProps) => {
  const sizes: any = {
    extraSmall: "h-[14px] w-[14px]",
    small: "h-[18px] w-[18px]",
    default: "h-[24px] w-[24px]",
    medium: "h-[36px] w-[36px]",
    large: "h-[48px] w-[48px]",
    extraLarge: "h-[60px] w-[60px]",
  };

  const sizeClasses = sizes[size];

  return (
    <div
      className={`absolute z-[25] flex h-full w-full items-center justify-center self-center ${backgroundClassName}`}
    >
      {indicator ? (
        indicator
      ) : (
        <span className={`relative flex ${sizeClasses}`}>
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${className}`}
          ></span>
          <span
            className={`relative inline-flex rounded-full ${className} ${sizeClasses}`}
          ></span>
        </span>
      )}
    </div>
  );
};

export default Spinner;
