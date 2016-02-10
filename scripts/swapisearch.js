import Rx from 'rx';
import jQuery from 'jquery';

var requestStream = Rx.Observable.just('https://swapi.co/api/planets/');

var responseStream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  });

responseStream.subscribe(function(response) {
  console.log(response);
});