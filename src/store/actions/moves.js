export const SELECT_CELL = 'SELECT_CELL';
export const RESET_GAME = 'RESET_GAME';
export const GAME_END = 'GAME_END';
export const GAME_WON = 'GAME_WON';

export function selectCell(currentPlayer, row, col) {
	return {
		type: SELECT_CELL,
		currentPlayer,
		row,
		col,
	};
}

export function resetGame() {
	return {
		type: RESET_GAME,
	};
}

export function endGameWithNoWinner() {
	return {
		type: GAME_END,
	};
}

export function declareWinner(winner) {
	return {
		type: GAME_WON,
		winner,
	};
}
