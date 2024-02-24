import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    load() {
        return new Promise((resolve, reject) => {
            read().then((response) => {
                json(response).then((response) => {
                    resolve(JSON.parse(response));
                });
            })
        });
    }
}