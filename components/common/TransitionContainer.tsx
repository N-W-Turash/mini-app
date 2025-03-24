import { cloneElement, useRef, ReactElement, ComponentProps } from "react";
import { CSSTransition } from "react-transition-group";
import type { EnterHandler } from "react-transition-group/Transition";

interface TransitionContainerProps extends ComponentProps<any> {
  appear?: boolean;
  children: ReactElement<any>;
  classNames?: string;
  fade?: boolean;
  mountOnEnter?: boolean;
  show?: boolean;
  timeout?: number;
  unmountOnExit?: boolean;
  wrapperClassNames?: string;
  onEntered?: EnterHandler<any>;
}

const TransitionContainer = ({
  children,
  classNames = "",
  fade = false,
  show = false,
  timeout = 500,
  onEntered,
  ...rest
}: TransitionContainerProps) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      {...(show && { in: show })}
      nodeRef={nodeRef}
      timeout={timeout}
      classNames={classNames ? classNames : fade ? "fade" : "transition-node"}
      unmountOnExit
      onEntered={onEntered}
      {...rest}
    >
      {cloneElement(children, {
        className: `relative z-auto w-full ${children.props.className || ""}`,
        ref: nodeRef,
      })}
    </CSSTransition>
  );
};

export default TransitionContainer;
