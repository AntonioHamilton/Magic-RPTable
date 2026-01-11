import { useBoard } from "@contexts/Board";
import * as SC from "./styled";
import type { BoardProps } from "./types";

export const Board = ({ className }: BoardProps) => {
  const { state } = useBoard();
  const { gridSize, cellSize } = state;

  const cells = [];
  for (let y = 0; y < gridSize.height; y++) {
    for (let x = 0; x < gridSize.width; x++) {
      cells.push(
        <SC.GridCell key={`${x}-${y}`} $x={x} $y={y} $cellSize={cellSize} />
      );
    }
  }

  return (
    <SC.BoardContainer className={className}>
      <SC.GridWrapper
        $width={gridSize.width}
        $height={gridSize.height}
        $cellSize={cellSize}
      >
        {cells}
      </SC.GridWrapper>
    </SC.BoardContainer>
  );
};
