// TODO: write your code here

import GameSavingLoader from "./GameSavingLoader";
import GameSaving from "./GameSaving";

const gameSaving = new GameSaving();

GameSavingLoader.load().then((saving) => {
    gameSaving.saving = saving;
  }, (error) => {
    gameSaving.saving = undefined;
    alert(error.message);
  });