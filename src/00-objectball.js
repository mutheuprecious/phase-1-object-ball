let gameObject = () => {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  };
  
  const homeTeamName = (teams) => teams().home.teamName;
  
  const numPointsScored = (playerName) => {
    const checkHomeOrAway = Object.keys(gameObject().home.players).includes(playerName);
    return checkHomeOrAway
      ? gameObject()["home"]["players"][playerName]["points"]
      : gameObject()["away"]["players"][playerName]["points"];
  };
  
  const shoeSize = (playerName) => {
    const checkHomeOrAway = Object.keys(gameObject().home.players).includes(playerName);
    return checkHomeOrAway
      ? gameObject()["home"]["players"][playerName]["shoe"]
      : gameObject()["away"]["players"][playerName]["shoe"];
  };
  
  const teamColors = (team) =>
    gameObject().home.teamName === team ? gameObject().home.colors : gameObject().away.colors;
  
  const teamNames = () => [gameObject().home.teamName, gameObject().away.teamName];
  
  const playerNumbers = (team) => {
    let jersyNumbers = [];
    if (gameObject().home.teamName === team) {
      for (player in gameObject().home.players) {
        jersyNumbers.push(gameObject()["home"]["players"][player]["number"]);
      }
    } else {
      for (player in gameObject().away.players) {
        jersyNumbers.push(gameObject()["away"]["players"][player]["number"]);
      }
    }
    return jersyNumbers;
  };
  
  const playerStats = (player) => {
    const checkHomeOrAway = Object.keys(gameObject().home.players).includes(player);
    return checkHomeOrAway
      ? gameObject()["home"]["players"][player]
      : gameObject()["away"]["players"][player];
  };
  
  const bigShoeRebounds = () => {
    const getLargestShoeSize = (homeOrAway) => {
      let shoeArray = [];
      for (const player in gameObject()[homeOrAway]["players"]) {
        shoeArray.push(gameObject()[homeOrAway]["players"][player]["shoe"]);
      }
      return Math.max(...shoeArray);
    };
  
    let bigShoeHome = getLargestShoeSize("home");
    let bigShoeAway = getLargestShoeSize("away");
  
    if (bigShoeHome > bigShoeAway) {
      for (const player in gameObject().home.players) {
        if (gameObject()["home"]["players"][player]["shoe"] === bigShoeHome) {
          return gameObject()["home"]["players"][player]["rebounds"];
        }
      }
    } else {
      for (const player in gameObject().away.players) {
        if (gameObject()["away"]["players"][player]["shoe"] === bigShoeAway) {
          return gameObject()["away"]["players"][player]["rebounds"];
        }
      }
    }
  };