import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  keyArray = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  gridState = {
    redSelected: 0,
    blueSelected: 0,
    assassinSelected: 0,
    neutralSelected: 0,
  };

  winner = '';

  getNameOfWinner() {
    if (this.gridState.assassinSelected > 0) {
      this.winner = 'assassin';
    } else if (this.gridState.redSelected == 2) {
      this.winner = 'red';
    } else if (this.gridState.blueSelected == 2) {
      this.winner = 'blue';
    }
    return this.winner;
  }

  getKeyAtPosition(x: number, y: number) {
    return this.keyArray[x][y];
  }

  addSelectionToTally(color: string) {
    if (color == 'blue') {
      this.gridState.blueSelected += 1;
    } else if (color == 'red') {
      this.gridState.redSelected += 1;
    } else if (color == 'neutral') {
      this.gridState.neutralSelected += 1;
    } else {
      this.gridState.assassinSelected += 1;
    }
  }

  checkForWinner() {
    if (
      this.gridState.assassinSelected ||
      this.gridState.redSelected > 1 ||
      this.gridState.blueSelected > 1
    ) {
      return true;
    } else {
      return false;
    }
  }
}
