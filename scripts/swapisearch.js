import Rx from 'rx';

var requestStream = Rx.Observable.just('https://swapi.co/api/planets/');

var responseStream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(fetch(requestUrl).then(response => response.json()));
  });

responseStream.subscribe(response => {
  console.log(response);
});