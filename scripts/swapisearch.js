import Rx from 'rx';
import _ from 'lodash';

export function getRandomPlanets() {
  const requestStream = Rx.Observable.just('https://swapi.co/api/planets/');

  return requestStream
    .flatMap(requestUrl => {
      return Rx.Observable.fromPromise(fetch(requestUrl).then(response => response.json()));
    })
    .map(response => {
      return _.sampleSize(response.results, 3);
    });
}

