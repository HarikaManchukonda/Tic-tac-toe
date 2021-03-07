import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GAME_END, GAME_WON, SELECT_CELL } from '../actions/moves';
import { selectBoard } from '../selectors';

// helper functions
function hasAnyMovesLeft(board) {
  return !board.every((row) => row.every(Boolean));
}

function rowWinCondition(row) {
  return row[0] && row.every((c) => c === row[0]); // all columns in row match first item of row
}

function columnWinCondition(board, column) {
  return (
    board[0][column] && board.every((row) => row[column] === board[0][column])
  ); // all row columns have same value as in first row column
}

function diagonalWinCondition(board) {
  if (!board[1][1]) {
    return false;
  }
  const diagon1Win = board.every((row, i) => board[1][1] === row[i]);
  const diagon2Win = board.every(
    (row, i) => board[1][1] === row[board.length - i - 1]
  );
  return diagon1Win || diagon2Win;
}

function hasWon(board) {
  return (
    diagonalWinCondition(board) ||
    board.some(rowWinCondition) ||
    [...new Array(board.length).keys()].some((col) =>
      columnWinCondition(board, col)
    )
  );
}

// saga
function* onUpdate(action) {
  const board = yield select(selectBoard);
  const hasUserWon = yield call(hasWon, board);
  // console.log(board.map((r) => r.map((x) => x || '-').join(' ')).join('\n'));
  if (hasUserWon) {
    yield put({ type: GAME_WON, winner: action.currentPlayer });
  }
  const hasMoves = yield call(hasAnyMovesLeft, board);
  if (!hasMoves) {
    yield put({ type: GAME_END });
  }
}

function* storeSaga() {
  yield takeLatest(SELECT_CELL, onUpdate);
}

export default storeSaga;
