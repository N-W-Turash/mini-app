import Spinner from "@/components/common/Spinner";
import ProgressiveSpinner from "@/components/common/ProgressiveSpinner";

const SteppedLoadingIndicator = ({
  backgroundClassName = "bg-transparent",
  progressiveSpinnerProps = {},
}) => {
  return (
    <Spinner
      backgroundClassName={backgroundClassName}
      indicator={<ProgressiveSpinner {...progressiveSpinnerProps} />}
    />
  );
};

export default SteppedLoadingIndicator;
