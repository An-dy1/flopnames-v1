import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {}

  keyState = {
    style: 'visibility: hidden',
    visible: false,
  };

  teamsArr = [
    {
      current: false,
      color: 'red',
      name: 'Red',
    },
    {
      current: false,
      color: 'blue',
      name: 'Blue',
    },
  ];

  // this currently exists both here and in the service, because the key component is calling the value of this array directly
  keyArray = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  displayGrid() {
    if (this.currentTeam == '') {
      return 'none';
    }
  }

  // could make current a member of the object in the teams array
  currentTeam = '';
  unCurrentTeam = '';
  winner = '';

  currentTeamColor = '';

  toggleKey() {
    if (this.keyState.visible === true) {
      this.keyState.style = `visibility: hidden`;
      this.keyState.visible = false;
    } else {
      this.keyState.style = ``;
      this.keyState.visible = true;
    }
  }

  selectTeam(index: number) {
    if (index === 0) {
      this.currentTeam = this.teamsArr[index].name;
      this.unCurrentTeam = this.teamsArr[1].name;
      this.currentTeamColor = `color: ` + this.teamsArr[index].color;
    } else {
      this.currentTeam = this.teamsArr[index].name;
      this.unCurrentTeam = this.teamsArr[0].name;
      this.currentTeamColor = `color: ` + this.teamsArr[index].color;
    }
  }

  logWinner(winner) {
    if (winner == 'assassin') {
      this.winner = this.unCurrentTeam;
    } else {
      this.winner = winner;
    }
  }
}
