import GameSavingLoader from "../GameSavingLoader";

test('Проверка класса GameSavingLoader', () => {
  const data = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  const load = new GameSavingLoader();
  load.load().then((response) => {
    expect(response).toEqual(data);
  }, (error) => {
    throw error;
  })
});
