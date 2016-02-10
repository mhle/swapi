import { getRandomPlanets } from './swapisearch';
import Cycle from '@cycle/core';
import { div, h2, makeDOMDriver } from '@cycle/dom';

function main({DOM}) {

  let planet$ = getRandomPlanets();

  return {
    DOM: planet$.map(planets => {
      return div(planets.map(planet => h2(planet.name)));
    })
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
})