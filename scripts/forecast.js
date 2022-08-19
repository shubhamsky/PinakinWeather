class Forecast {
    constructor() {
        this.key = 'dmvGV5I92s60hTAs8uYBBBQmxYsULxLa';
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityDetailsURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }

    //update city information
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        //shorthand notation when property name is same as value
        return { cityDets, weather };
    }

    //get city information
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityDetailsURI + query);
        const data = await response.json();
        return data[0];
    }

    // get weather information
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}





