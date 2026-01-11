import type { GridSize, GridType, Position } from "@/types/board";

export interface BoardState {
  gridSize: GridSize;
  cellSize: number;
  zoom: number;
  offset: Position;
  gridType: GridType;
}

export type BoardAction =
  | { type: "SET_GRID_SIZE"; payload: GridSize }
  | { type: "SET_CELL_SIZE"; payload: number }
  | { type: "SET_ZOOM"; payload: number }
  | { type: "SET_OFFSET"; payload: Position }
  | { type: "SET_GRID_TYPE"; payload: GridType };
