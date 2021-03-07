import React from 'react';
import Style from './Game.module.scss';
import { Board } from './Board';
import { Information } from './Information';
import { Announcement } from './Announcement';

export const Game = () => {
  return (
    <div className={Style.Game}>
      <Information></Information>
      <Board></Board>
      <Announcement></Announcement>
    </div>
  );
};

