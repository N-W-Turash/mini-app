"use client";

import { useEffect, useState, useRef } from "react";
import { Progress } from "antd";

type ProgressiveSpinnerType = "line" | "circle" | "dashboard";

interface ProgressiveSpinnerProps {
  size?: number;
  strokeWidth?: number;
  type?: ProgressiveSpinnerType;
}

const ProgressiveSpinner = ({
  size = 60,
  strokeWidth = 16,
  type = "circle",
  ...rest
}: ProgressiveSpinnerProps) => {
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(setTimeout(() => {}));

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 10;
        return nextPercentage > 100 ? 0 : nextPercentage;
      });
    }, 180);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [percentage]);

  return (
    <Progress
      percent={percentage}
      type={type}
      steps={{ count: 10, gap: 4 }}
      showInfo={false}
      size={size}
      strokeColor="#4ade80"
      strokeWidth={strokeWidth}
      trailColor="rgba(0, 0, 0, 0.06)"
      {...rest}
    />
  );
};

export default ProgressiveSpinner;
