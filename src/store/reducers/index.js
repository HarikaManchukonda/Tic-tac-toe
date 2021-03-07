import { combineReducers } from 'redux';
import { SELECT_CELL, RESET_GAME, GAME_END, GAME_WON } from '../actions/moves';

export const createBoard = (i) =>
	Array(i)
		.fill(null)
		.map((_) => Array(i).fill(null));

export const board = (state = createBoard(3), action) => {
	switch (action.type) {
		case SELECT_CELL: {
			const newBoard = JSON.parse(JSON.stringify(state));
			newBoard[action.row][action.col] = action.currentPlayer;
			return newBoard;
		}
		case RESET_GAME: {
			return createBoard(3);
		}
		default: {
			return state;
		}
	}
};

export const initialGameState = { currentPlayer: 'X', winner: null, end: false };

export const game = (state = initialGameState, action) => {
	switch (action.type) {
		case SELECT_CELL: {
			return {
				...state,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				end: false,
			};
		}
		case RESET_GAME: {
			return {
				...initialGameState,
			};
		}
		case GAME_END: {
			return {
				...state,
				end: true,
			};
		}
		case GAME_WON: {
			return {
				...state,
				end: true,
				winner: action.winner,
			};
		}
		default: {
			return state;
		}
	}
};

export default combineReducers({
	board,
	game,
});
