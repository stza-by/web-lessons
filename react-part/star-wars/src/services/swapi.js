
export default class SwapiService {

  static root = 'https://swapi.py4e.com/api/';
  
  static getResources = async (path) => {
    const response = await fetch(this.root + path);
    return await response.json();
  }

  static getPlanets = async () => {
    const planets = await this.getResources('planets/');
    return planets.results;
  } 

  static getPlanet = async (id = 10) => {
    return await this.getResources(`planets/${id}/`);
  }

  static getPeople = async () => {
      const people = await this.getResources('people/');
      return people.results;
  }

  static getPerson = async (id) => {
    return await this.getResources(`people/${id}`);
  }
}



