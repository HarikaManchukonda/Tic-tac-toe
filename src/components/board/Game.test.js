import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Game } from './Game';
import configureStore from '../../store';

describe('Game', () => {
  function renderWithState(state = {}) {
    const store = configureStore(state);
    return render(
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }

  test('initialized board should have no cells marked', () => {
    const { component } = renderWithState();
    expect(component).toMatchSnapshot();
  });

  test('renders Board with 9 cells', () => {
    renderWithState();
    const cells = screen.getAllByTestId('cell-button');
    expect(cells.length).toEqual(9);
  });
  
});
