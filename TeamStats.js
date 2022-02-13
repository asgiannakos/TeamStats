const team = {
  _players: [  
      {
        firstName: 'Andre',
        lastName: 'Pirlo',
        age: 11
      }
    ],

  _games: [
    {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27                    
    }
  ],

  get player() {
    return this._player;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName, 
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponenetPoints: opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Knicks', 34, 44);
team.addGame('Bulls', 45, 43);
team.addGame('Lakers', 66, 62);
console.log(team._games);