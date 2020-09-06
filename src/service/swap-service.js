
export default class SwapiService {
    apiBase = 'https://swapi.dev/api';
    async  getResource (url) {
    const res = await fetch(`${this.apiBase}${url}`);
    return await res.json();
    
    }
    async getAllPeople() {
        return await this.getResource('/people/');
    }
    async getPeople(id){
        return await this.getResource(`/people/${id}`);
    }
    async getAllPlanets() {
        return await this.getResource('/planets/');
    }
    async getPlanet(id){
        return await this.getResource(`/planets/${id}`);
    }
    async  getAllStarships() {
        return await this.getResource('/starships/');
    }
    async getPlanet(id) {
        return await this.getResource(`/starships/${id}`);
    }
}

// const people = new SwapiService();
// people.getPeople(2).then((body) =>{
//     console.log(body);
// })

