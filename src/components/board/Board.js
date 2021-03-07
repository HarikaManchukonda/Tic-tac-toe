import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import Style from './Game.module.scss';
import { selectBoard, selectGame } from '../../store/selectors';
import { selectCell } from '../../store/actions/moves';

export const Board = () => {
  const board = useSelector(selectBoard);
  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  return (
    <div data-testid="board" className={Style.Board}>
      {board.map((row, r) => (
        <div key={r} className={Style.Row}>
          {row.map((col, c) => (
            <button
              data-testid="cell-button"
              type="button"
              key={`${r}-${c}`}
              className={clsx(Style.Cell, `color-${col}`)}
              disabled={!!col}
              onClick={() => dispatch(selectCell(game.currentPlayer, r, c))}
            >
              {col}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
