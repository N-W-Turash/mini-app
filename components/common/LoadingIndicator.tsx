import Spinner from "@/components/common/Spinner";
import { SpinnerIcon } from "@/components/icons/Icons";

const LoadingIndicator = ({ backgroundClassName = "bg-transparent", className = "" }) => {
  return (
    <Spinner
      backgroundClassName={backgroundClassName}
      indicator={<SpinnerIcon className={className} />}
    />
  );
};

export default LoadingIndicator;
