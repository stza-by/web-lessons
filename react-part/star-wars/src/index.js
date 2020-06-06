import SwapiService from './services/swapi';

SwapiService.getPlanets().then(result => {
  console.log(result);
});

SwapiService.getPlanet().then(result => {
  console.log(result);
})

SwapiService.getPeople().then((result) => {
  console.log(result);
})


SwapiService.getPerson(31).then(result => {
  console.log(result);
})
