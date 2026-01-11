import { useState, useRef, useEffect } from "react";
import * as SC from "./styled";
import type { TooltipProps } from "./types";

export const Tooltip = ({
  children,
  content,
  position = "top",
  className
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible || !containerRef.current || !tooltipRef.current) {
      return;
    }

    const container = containerRef.current;
    const tooltip = tooltipRef.current;
    const rect = container.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let newPosition = position;

    if (position === "right") {
      const spaceRight = window.innerWidth - rect.right;
      if (spaceRight < tooltipRect.width + 8) {
        newPosition = "bottom";
      }
    } else if (position === "left") {
      const spaceLeft = rect.left;
      if (spaceLeft < tooltipRect.width + 8) {
        newPosition = "bottom";
      }
    } else if (position === "top") {
      const spaceTop = rect.top;
      if (spaceTop < tooltipRect.height + 8) {
        newPosition = "bottom";
      }
    } else if (position === "bottom") {
      const spaceBottom = window.innerHeight - rect.bottom;
      if (spaceBottom < tooltipRect.height + 8) {
        newPosition = "top";
      }
    }

    setAdjustedPosition(newPosition);
  }, [visible, position]);

  return (
    <SC.TooltipContainer
      ref={containerRef}
      className={className}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <SC.TooltipContent
        ref={tooltipRef}
        $position={adjustedPosition}
        $visible={visible}
      >
        {content}
      </SC.TooltipContent>
    </SC.TooltipContainer>
  );
};
