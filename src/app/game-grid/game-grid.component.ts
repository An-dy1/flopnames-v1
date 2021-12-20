import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: [],
})
export class GameGridComponent {
  @Input() currentTeam;

  @Output() thereIsAWinner = new EventEmitter();

  constructor(public gameService: GameService) {}

  ngOnInit() {}

  displayGrid() {
    if (this.currentTeam == '') {
      return 'none';
    }
  }

  currentClasses = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  choicesArray = [
    ['Battlefield Earth', 'Howard the Duck', 'Batman and Robin'],
    ['Catwoman', 'Jack and Jill', 'Cats'],
    ['Wing Commander', 'Dudley Do-Right', 'Twilight'],
  ];

  winnerEmitter(winner) {
    this.thereIsAWinner.emit(winner);
  }

  selectFromGrid(x: number, y: number) {
    let selectedColor = this.gameService.getKeyAtPosition(x, y);
    this.currentClasses[x][y] = selectedColor;
    this.gameService.addSelectionToTally(selectedColor);

    if (this.gameService.checkForWinner()) {
      let winner = this.gameService.getNameOfWinner();
      this.winnerEmitter(winner);
    }
  }
}
