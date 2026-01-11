import { BoardProvider } from "@contexts/Board";
import { Board } from "@components/Board";
import { BoardControls } from "@components/BoardControls";
import * as SC from "./styled";

const initialBoardState = {
  gridSize: { width: 29, height: 14 },
  cellSize: 40,
  zoom: 1,
  offset: { x: 0, y: 0 },
  gridType: "square" as const
};

export const Home = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Title>Magic RPTable</SC.Title>
      </SC.Header>
      <BoardProvider initialState={initialBoardState}>
        <SC.Content>
          <SC.Sidebar>
            <BoardControls />
          </SC.Sidebar>
          <SC.BoardWrapper>
            <Board />
          </SC.BoardWrapper>
        </SC.Content>
      </BoardProvider>
    </SC.Container>
  );
};
