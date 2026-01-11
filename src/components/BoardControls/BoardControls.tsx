import { useState, useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useBoard } from "@contexts/Board";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Tooltip } from "@components/Tooltip";
import * as SC from "./styled";
import type { BoardControlsProps } from "./types";

const MAX_CELLS = 2000;

export const BoardControls = ({ className }: BoardControlsProps) => {
  const { state, dispatch } = useBoard();
  const { gridSize, cellSize } = state;

  const [localGridWidth, setLocalGridWidth] = useState(
    gridSize.width.toString()
  );
  const [localGridHeight, setLocalGridHeight] = useState(
    gridSize.height.toString()
  );
  const [localCellSize, setLocalCellSize] = useState(cellSize.toString());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLocalGridWidth(gridSize.width.toString());
    setLocalGridHeight(gridSize.height.toString());
    setLocalCellSize(cellSize.toString());
  }, [gridSize.width, gridSize.height, cellSize]);

  const handleSave = () => {
    setError(null);

    const width = parseInt(localGridWidth, 10);
    const height = parseInt(localGridHeight, 10);
    const size = parseInt(localCellSize, 10);

    if (isNaN(width) || isNaN(height) || isNaN(size)) {
      setError("Todos os valores devem ser números válidos");
      return;
    }

    if (width < 1 || height < 1 || size < 1) {
      setError("Todos os valores devem ser maiores que 0");
      return;
    }

    const totalCells = width * height;
    if (totalCells > MAX_CELLS) {
      setError(
        `Quantidade de células excedida: ${totalCells}/${MAX_CELLS}. Reduza as dimensões do grid.`
      );
      return;
    }

    dispatch({
      type: "SET_GRID_SIZE",
      payload: { width, height }
    });

    dispatch({
      type: "SET_CELL_SIZE",
      payload: size
    });
  };

  const currentTotalCells = gridSize.width * gridSize.height;

  const localWidth = parseInt(localGridWidth, 10);
  const localHeight = parseInt(localGridHeight, 10);
  const previewTotalCells =
    !isNaN(localWidth) &&
    !isNaN(localHeight) &&
    localWidth > 0 &&
    localHeight > 0
      ? localWidth * localHeight
      : currentTotalCells;

  const displayTotalCells = previewTotalCells;

  return (
    <SC.ControlsContainer className={className}>
      <SC.ControlGroup>
        <SC.ControlRow>
          <SC.ControlLabel htmlFor="grid-width">
            Largura (células)
          </SC.ControlLabel>
          <Tooltip
            content={`Máximo de ${MAX_CELLS} células totais para evitar problemas de performance em navegadores com 8GB de RAM. Células: ${displayTotalCells}/${MAX_CELLS}`}
            position="right"
          >
            <SC.IconWrapper>
              <InformationCircleIcon
                style={{ width: "1rem", height: "1rem" }}
              />
            </SC.IconWrapper>
          </Tooltip>
        </SC.ControlRow>
        <Input
          id="grid-width"
          type="number"
          value={localGridWidth}
          onChange={(e) => setLocalGridWidth(e.target.value)}
        />
      </SC.ControlGroup>

      <SC.ControlGroup>
        <SC.ControlRow>
          <SC.ControlLabel htmlFor="grid-height">
            Altura (células)
          </SC.ControlLabel>
          <Tooltip
            content={`Máximo de ${MAX_CELLS} células totais para evitar problemas de performance em navegadores com 8GB de RAM. Células: ${displayTotalCells}/${MAX_CELLS}`}
            position="right"
          >
            <SC.IconWrapper>
              <InformationCircleIcon
                style={{ width: "1rem", height: "1rem" }}
              />
            </SC.IconWrapper>
          </Tooltip>
        </SC.ControlRow>
        <Input
          id="grid-height"
          type="number"
          value={localGridHeight}
          onChange={(e) => setLocalGridHeight(e.target.value)}
        />
      </SC.ControlGroup>

      <SC.ControlGroup>
        <SC.ControlLabel htmlFor="cell-size">
          Tamanho da Célula (px)
        </SC.ControlLabel>
        <Input
          id="cell-size"
          type="number"
          value={localCellSize}
          onChange={(e) => setLocalCellSize(e.target.value)}
        />
      </SC.ControlGroup>

      {error && (
        <SC.ControlGroup>
          <SC.ErrorText>{error}</SC.ErrorText>
        </SC.ControlGroup>
      )}

      <SC.ControlGroup>
        <SC.WarningText>
          Células: {displayTotalCells}/{MAX_CELLS}
        </SC.WarningText>
      </SC.ControlGroup>

      <SC.ControlGroup>
        <Button variant="primary" onClick={handleSave}>
          Salvar
        </Button>
      </SC.ControlGroup>
    </SC.ControlsContainer>
  );
};
