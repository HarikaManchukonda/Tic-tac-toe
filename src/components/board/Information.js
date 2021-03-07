import React from 'react';
import Style from './Game.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame } from '../../store/actions/moves';
import { selectGame } from '../../store/selectors';

export const Information = () => {
  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  return (
    <div className={Style.Information}>
      <span data-testid="player-turn">
        Player:{' '}
        <strong className={`color-${game.currentPlayer}`}>
          {game.currentPlayer}
        </strong>
      </span>
      <button
        data-testid="reset-button"
        type="button"
        className={Style.RestartButton}
        onClick={() => dispatch(resetGame())}
      >
        Restart
      </button>
    </div>
  );
};
