import { getRandomPlanet } from './swapisearch';
import Cycle from '@cycle/core';
import { div, h2, makeDOMDriver } from '@cycle/dom';

function main({DOM}) {

  let planet$ = getRandomPlanet();

  return {
    DOM: planet$.map(planet => {
      console.log(planet);
      return div(`PLANET NAME ${planet.name}`);
    })
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
})