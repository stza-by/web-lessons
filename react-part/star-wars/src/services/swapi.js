
export default class SwapiService {

  static root = 'https://swapi.py4e.com/api/';

  static getResources = async (path) => {
    const response = await fetch(this.root + path);
    return await response.json();
  }

  static getFullData = async (dataName) => {
    let data;
    let result = [];
    let page = 1;
    do {
      data = await this.getResources(`${dataName}/${page > 1 ? `?page=${page}` : ""}`);
      result = result.concat(data.results);
      page++;
    } while (data.next);
    return result;
  };

  static getPlanets = async () => await this.getFullData('planets');

  static getPlanet = async (id = 10) => {
    return await this.getResources(`planets/${id}/`);
  }

  static getPeople = async () => await this.getFullData('people');

  static getPerson = async (id) => {
    return await this.getResources(`people/${id}`);
  }

  static getStarships = async () => await this.getFullData("starships");
}





