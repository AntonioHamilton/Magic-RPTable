import { createContext, useContext, useReducer, ReactNode } from "react";
import { boardReducer } from "./reducer";
import type { BoardState, BoardAction } from "./types";

interface BoardContextType {
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

interface BoardProviderProps {
  children: ReactNode;
  initialState: BoardState;
}

export const BoardProvider = ({
  children,
  initialState
}: BoardProviderProps) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBoard = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within BoardProvider");
  }
  return context;
};
