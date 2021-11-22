export default function createLocalStorage(params) {
  const dataGame = {
    1: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    2: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    3: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    4: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    5: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    6: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    7: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    8: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    9: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    10: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    11: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
    12: {
      answer: [],
      result: 0,
      scoreLastGame: 0,
    },
  };
  const settings = {
    timer: false,
    volume: 50,
  };
  if (
    localStorage.getItem('dataGamePictureQuiz') &&
    localStorage.getItem('dataGameArtistQuiz') &&
    localStorage.getItem('settings')
  ) {
    return;
  } else {
    localStorage.setItem('dataGamePictureQuiz', JSON.stringify(dataGame));
    localStorage.setItem('dataGameArtistQuiz', JSON.stringify(dataGame));
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
