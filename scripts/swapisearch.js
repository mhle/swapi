import Rx from 'rx';

export function getRandomPlanet() {
  const requestStream = Rx.Observable.just('https://swapi.co/api/planets/');

  return requestStream
    .flatMap(requestUrl => {
      return Rx.Observable.fromPromise(fetch(requestUrl).then(response => response.json()));
    })
    .map(response => {
      const random = Math.round(Math.random() * 10);

      console.log(random);

      return response.results[random];
    });
}

