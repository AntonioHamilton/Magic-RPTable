import type { BoardState, BoardAction } from "./types";

export const boardReducer = (
  state: BoardState,
  action: BoardAction
): BoardState => {
  switch (action.type) {
    case "SET_GRID_SIZE":
      return {
        ...state,
        gridSize: action.payload
      };
    case "SET_CELL_SIZE":
      return {
        ...state,
        cellSize: action.payload
      };
    case "SET_ZOOM":
      return {
        ...state,
        zoom: action.payload
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.payload
      };
    case "SET_GRID_TYPE":
      return {
        ...state,
        gridType: action.payload
      };
    default:
      return state;
  }
};
