
export default class SwapiService {
    apiBase = 'https://swapi.dev/api';
    async  getResource (url) {
    const res = await fetch(`${this.apiBase}${url}`);
    return await res.json();
    
    }
     getAllPeople = async() => {
        const n = await this.getResource('/people/');
        return n.results.map(this.transformPeople);
    }
     getPeople = async(id) => {
        const peoples = await this.getResource(`/people/${id}`);
        return this.transformPeople(peoples)
    }
     getAllPlanets = async() => {
        const n =  await this.getResource('/planets/');
        return n.results.map(this.transformPlanet).slice(1);
    }
    getPlanet =  async(id) => {
        const planet =   await this.getResource(`/planets/${id}`);
        return this.transformPlanet(planet);
    }
     getAllStarships = async() => {
        const n = await this.getResource('/starships/');
         return n.results.map(this.transformStarship);
    }
     getStarship = async(id) => {
        const starship =  await this.getResource(`/starships/${id}`);
        return this.transformStarship(starship);
    }
    extractId(item){
        const regId = /\/([0-9]*)\/$/;
        return item.url.match(regId)[1];
        
    }
    transformPlanet = (planet) => {
        return{
            id:this.extractId(planet),
            name:planet.name,
            population: planet.population ,
            rotationPeriod:planet.rotation_period,
            diameter: planet.diameter,
            orbital_period:planet.orbital_period,
            gravity:planet.gravity,
            terrain:planet.terrain,
            surface_water:planet.surface_water,
            climate:planet.climate,
        }
    }
    transformPeople = (peoples) => {
        return{
            id:this.extractId(peoples),
            name:peoples.name,
            hair_color: peoples.hair_color ,
            height:peoples.height,
            gender: peoples.gender,
            birth_year:peoples.birth_year,
            eye_color:peoples.eye_color,
            mass:peoples.mass,
            skin_color:peoples.skin_color,
            homeworld:peoples.homeworld
        }
    }
   
    transformStarship = (starship) => {
        return{
            id:this.extractId(starship),
            name:starship.name,
            model: starship.model ,
            manufacturer:starship.manufacturer,
            starship_class: starship.starship_class,
            cost_in_credits:starship.cost_in_credits,
            max_atmosphering_speed:starship.max_atmosphering_speed,
            hyperdrive_rating:starship.hyperdrive_rating,
            length:starship.length
        }
    }
}

// const people = new SwapiService();
// people.getPeople(2).then((body) =>{
//     console.log(body);
// })

