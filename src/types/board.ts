export interface Position {
  x: number;
  y: number;
}

export interface GridSize {
  width: number;
  height: number;
}

export type GridType = "square" | "hexagon";

export interface BoardState {
  gridSize: GridSize;
  cellSize: number;
  zoom: number;
  offset: Position;
  gridType: GridType;
}
