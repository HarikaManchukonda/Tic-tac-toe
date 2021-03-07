import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Style from './Game.module.scss';
import { resetGame } from '../../store/actions/moves';
import { selectGame } from '../../store/selectors';

export const Announcement = () => {
  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  if (!game.end) {
    return null;
  }

  return (
    <div className={Style.Announcement}>
      <div className={Style.Message} data-testid="announcement">
        {game.winner && (
          <>
            <div className={Style.Congratulations}>Congratulations!</div>
            <div className={Style.Name}>
              Player{' '}
              <strong className={`color-${game.winner}`}>{game.winner}</strong>{' '}
              Won
            </div>
          </>
        )}
        {!game.winner && <div className={Style.Name}>It's a Tie!</div>}
        <button
          data-testid="restart-button"
          className={Style.RestartButton}
          type="button"
          onClick={() => dispatch(resetGame())}
        >
          Restart
        </button>
      </div>
    </div>
  );
};
