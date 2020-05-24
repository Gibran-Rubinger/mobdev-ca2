import { Injectable } from '@angular/core';
//add imports HttpClient...
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//include inside the constructor what it was imported like HttpClient
  constructor(private http: HttpClient) { }
  //create the fuction "get" ...it need return (this.http.get(); the https request
  //take care of the kind os commas especially with tel (id) returns... 
    getEpisodes() {
        return this.http.get('https://breakingbadapi.com/api/episodes');
    }
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }
    getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters');
    }
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }
    getQuotes() {
        return this.http.get('https://breakingbadapi.com/api/quotes');
    }
    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
    }
    getDeaths() {
        return this.http.get('https://breakingbadapi.com/api/deaths');
    }
}